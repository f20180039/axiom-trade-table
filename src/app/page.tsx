"use client";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { INITIAL_TOKENS } from "@/lib/mock-data";
import { setTokens, updateToken } from "@/store/tokensSlice";
import { socketService } from "@/lib/socket-mock";
import { RootState } from "@/store/store";

export default function Home() {
  const dispatch = useDispatch();
  const tokens = useSelector((state: RootState) => state.tokens.items);
  const tokenIds = useSelector((state: RootState) => state.tokens.ids);

  // 1. React Query "Fetch"
  const { data, isLoading } = useQuery({
    queryKey: ["tokens-initial"],
    queryFn: async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return INITIAL_TOKENS;
    },
  });

  // 2. Sync Query data to Redux
  useEffect(() => {
    if (data) {
      dispatch(setTokens(data));
    }
  }, [data, dispatch]);

  // 3. Listen to WebSocket and Update Redux
  useEffect(() => {
    const unsubscribe = socketService.subscribe((update) => {
      dispatch(updateToken(update));
    });
    return () => unsubscribe();
  }, [dispatch]);

  if (isLoading)
    return <div className="p-10 text-white">Loading Initial Snapshot...</div>;

  return (
    <main className="p-10 text-white">
      <h1 className="text-2xl font-bold mb-6">State Management Verified</h1>
      <div className="grid gap-4">
        {tokenIds.map((id) => (
          <div
            key={id}
            className="p-4 bg-card border border-border rounded-lg flex justify-between"
          >
            <span>
              {tokens?.[id]?.name} ({tokens?.[id]?.symbol})
            </span>
            <span className="font-mono text-axiom-yellow">
              MC: {tokens?.[id]?.marketCap}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

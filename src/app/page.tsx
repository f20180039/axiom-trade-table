"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { INITIAL_TOKENS } from "@/lib/mock-data";
import { setTokens, updateToken } from "@/store/tokensSlice";
import { socketService } from "@/lib/socket-mock";
import { DiscoveryGrid } from "@/components/templates/DiscoveryGrid";

export default function Home() {
  const dispatch = useDispatch();

  // 1. Initial Data Fetch
  const { data } = useQuery({
    queryKey: ["tokens-snapshot"],
    queryFn: async () => {
      // In production, this would be your API call
      return INITIAL_TOKENS;
    },
  });

  // 2. Sync to Redux
  useEffect(() => {
    if (data) dispatch(setTokens(data));
  }, [data, dispatch]);

  // 3. Start Live Stream
  useEffect(() => {
    const unsubscribe = socketService.subscribe((update) => {
      dispatch(updateToken(update));
    });
    return () => unsubscribe();
  }, [dispatch]);

  return <DiscoveryGrid />;
}

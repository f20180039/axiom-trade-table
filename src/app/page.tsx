"use client";
import { useEffect, useState } from "react";
import { socketService } from "@/lib/socket-mock";
import { TokenUpdate } from "@/types/token";

export default function Home() {
  const [lastUpdate, setLastUpdate] = useState<TokenUpdate | null>(null);
  useEffect(() => {
    // Connect to our mock socket
    const unsubscribe = socketService.subscribe((update) => {
      console.log("New WebSocket Message:", update);
      setLastUpdate(update);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="p-10 bg-background min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">WebSocket Test Engine</h1>
      <div className="p-4 border border-border bg-card rounded-md">
        {lastUpdate ? (
          <div>
            <p>
              Last Updated Token ID:{" "}
              <span className="text-axiom-blue font-mono">{lastUpdate.id}</span>
            </p>
            <p>
              New Price:{" "}
              <span
                className={
                  lastUpdate.changeDirection === "up"
                    ? "text-axiom-green"
                    : "text-axiom-red"
                }
              >
                {lastUpdate.price?.toFixed(4)}
              </span>
            </p>
            <p className="text-text-dim text-sm mt-2">
              Check browser console for full stream
            </p>
          </div>
        ) : (
          <p className="text-text-muted">Waiting for socket data...</p>
        )}
      </div>
    </main>
  );
}

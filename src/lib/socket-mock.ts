import { TokenUpdate } from "@/types/token";

type Subscriber = (update: TokenUpdate) => void;

class MockSocket {
  private subscribers: Set<Subscriber> = new Set();
  private interval: NodeJS.Timeout | null = null;

  // Simulate "Connecting" to a WebSocket
  subscribe(callback: Subscriber) {
    this.subscribers.add(callback);
    
    // Start emitting if this is the first subscriber
    if (!this.interval) {
      this.startSimulation();
    }

    // Unsubscribe cleanup
    return () => {
      this.subscribers.delete(callback);
      if (this.subscribers.size === 0 && this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      }
    };
  }

  private startSimulation() {
    this.interval = setInterval(() => {
      // Randomly pick a token ID 1, 2, or 3
      const randomId = Math.floor(Math.random() * 3) + 1;
      const isUp = Math.random() > 0.5;
      
      const update: TokenUpdate = {
        id: randomId.toString(),
        price: isUp ? Math.random() * 2 : Math.random() * 1.5,
        marketCap: `$${(Math.random() * 100).toFixed(1)}K`,
        changeDirection: isUp ? 'up' : 'down'
      };

      // Broadcast to all "connected" components
      this.subscribers.forEach(callback => callback(update));
    }, 2000); // Push an update every 2 seconds
  }
}

// Export a single instance to be shared across the app
export const socketService = new MockSocket();
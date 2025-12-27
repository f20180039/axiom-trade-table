export type TokenCategory = 'new-pairs' | 'final-stretch' | 'migrated';

export interface Token {
  id: string;
  name: string;
  symbol: string;
  category: TokenCategory;
  price: number;
  marketCap: string;
  volume: string;
  timeAgo: string;
  image: string;
  txCount: number;
  progress: number; // For the green/red bar
  // The small badges at the bottom of the card
  metrics: {
    liquidity: string;
    buyTax: string;
    sellTax: string;
    isScam: boolean;
    audit: 'pass' | 'fail' | 'warning';
  };
}

// This represents the data coming through the "WebSocket"
export interface TokenUpdate {
  id: string;
  price?: number;
  marketCap?: string;
  volume?: string;
  changeDirection?: 'up' | 'down';
}
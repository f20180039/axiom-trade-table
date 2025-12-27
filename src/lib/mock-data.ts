import { Token } from "@/types/token";

export const INITIAL_TOKENS: Token[] = [
  {
    id: "1",
    name: "ROGER",
    symbol: "I can't Chill",
    category: "new-pairs",
    price: 0.00045,
    marketCap: "$4.8K",
    volume: "$1K",
    timeAgo: "3s",
    image: "https://api.dicebear.com/7.x/identicon/svg?seed=Roger",
    txCount: 16,
    progress: 60,
    metrics: { liquidity: "18%", buyTax: "8%", sellTax: "17%", isScam: false, audit: 'pass' }
  },
  {
    id: "2",
    name: "CLOUD",
    symbol: "ClaudeCloud",
    category: "final-stretch",
    price: 0.024,
    marketCap: "$35.8K",
    volume: "$55K",
    timeAgo: "11m",
    image: "https://api.dicebear.com/7.x/identicon/svg?seed=Cloud",
    txCount: 997,
    progress: 85,
    metrics: { liquidity: "24%", buyTax: "3%", sellTax: "32%", isScam: false, audit: 'pass' }
  },
  {
    id: "3",
    name: "Red Bull",
    symbol: "REDBULL",
    category: "migrated",
    price: 1.19,
    marketCap: "$1.19M",
    volume: "$24K",
    timeAgo: "1s",
    image: "https://api.dicebear.com/7.x/identicon/svg?seed=Bull",
    txCount: 276,
    progress: 40,
    metrics: { liquidity: "20%", buyTax: "0%", sellTax: "20%", isScam: false, audit: 'pass' }
  }
];
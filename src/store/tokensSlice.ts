import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Token, TokenUpdate } from '@/types/token';

interface TokensState {
  items: Record<string, Token>;
  ids: string[];
}

const initialState: TokensState = {
  items: {},
  ids: [],
};

const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    // Set initial data from React Query fetch
    setTokens: (state, action: PayloadAction<Token[]>) => {
      action.payload.forEach((token) => {
        state.items[token.id] = token;
        if (!state.ids.includes(token.id)) {
          state.ids.push(token.id);
        }
      });
    },
    // Update a single token from WebSocket
    updateToken: (state, action: PayloadAction<TokenUpdate>) => {
      const { id, ...updates } = action.payload;
      if (state.items[id]) {
        state.items[id] = { ...state.items[id], ...updates };
      }
    },
  },
});

export const { setTokens, updateToken } = tokensSlice.actions;
export default tokensSlice.reducer;
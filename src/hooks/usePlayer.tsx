import { createContext, useContext } from "react";

export const playerContext = createContext({
  player: {
    name: null,
    score: 0,
  },
  setPlayer: () => {},
});

export const usePlayer = () => useContext(playerContext);

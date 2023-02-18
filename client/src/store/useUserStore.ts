import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStorage = create(
  persist(
    (set, get) => ({
      user: {
        name: "",
        password: "",
      },
      login: () => ({}),
      logout: () => ({}),
    }),
    {
      name: "user",
    }
  )
);

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set, get) => ({
      user: {
        nickname: "",
        password: "",
      },
      login: () => set({ user: {} }),
      logout: () => set({ user: {} }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

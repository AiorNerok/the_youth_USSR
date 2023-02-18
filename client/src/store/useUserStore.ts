import { create } from "zustand";

interface UserProps {
  username: string;
  password: string;
  typeUser: string;
}

export interface useUserStorageProps extends UserProps {
  login: (payload: {
    username: string;
    password: string;
    typeUser: string;
  }) => void;
  logout: () => void;
}

export const useUserStorage = create<useUserStorageProps>((set, get) => ({
  username: "",
  password: "",
  typeUser: "",
  login: (userPayload: UserProps) =>
    set(() => ({
      username: userPayload.username,
      password: userPayload.password,
      typeUser: userPayload.typeUser,
    })),
  logout: () => set({ username: "", password: "", typeUser: "" }),
}));

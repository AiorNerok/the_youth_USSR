import { create } from "zustand";

interface NotificationStoreProps {
  isShow: boolean;
  toggle: () => void;
}

export const useNotificationStore = create<NotificationStoreProps>((set) => ({
  isShow: false,
  toggle: () =>
    set((state: { isShow: boolean }) => ({ isShow: !state.isShow })),
}));

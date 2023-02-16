import { create } from 'zustand'

export const useNotificationStore = create((set) => ({
    isShow: false,
    toggle: () => set((state: { isShow: boolean }) => ({ isShow: !state.isShow }))
}))
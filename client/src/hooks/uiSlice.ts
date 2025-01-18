import { StateCreator } from "zustand";

export type UISlice = {
    darkMode: boolean;
    setDarkMode: () => void;

    dialog: boolean;
    setDialog: () => void;
};

export const useUISlice: StateCreator<UISlice, [], [], UISlice> = (set) => ({
    darkMode: false,
    setDarkMode: () => {
        set((state) => ({
            darkMode: !state.darkMode,
        }));
    },

    dialog: false,
    setDialog: () => {
        set((state) => ({
            dialog: !state.dialog,
        }));
    },
});

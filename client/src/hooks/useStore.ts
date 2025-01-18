import { create } from "zustand";
import { UISlice, useUISlice } from "./uiSlice";
import { devtools } from "zustand/middleware";
import { CodeSlice, useCodeSlice } from "./codeSlice";

type StoreSlice = UISlice & CodeSlice;

export const useStore = create<StoreSlice>()(
    devtools((...a) => ({
        ...useUISlice(...a),
        ...useCodeSlice(...a),
    }))
);

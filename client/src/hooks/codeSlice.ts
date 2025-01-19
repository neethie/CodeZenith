import { StateCreator } from "zustand";
import { EditorData } from "../components/editor/CodeEditor.data";

export type CodeSlice = {
    code: string | undefined;
    language: number;

    created: boolean;
    setCreated: (created: boolean) => void;

    setCode: (code: string | undefined) => void;
    setLanguage: (languageId: number) => void;
};

export const useCodeSlice: StateCreator<CodeSlice, [], [], CodeSlice> = (
    set
) => ({
    code: EditorData.defaultCode,
    language: EditorData.defaultLanguage,

    setCode: (code) => {
        set({ code });
    },

    setLanguage: (language) => {
        set({ language });
    },

    created: false,
    setCreated: (created) => {
        set({ created });
    },
});

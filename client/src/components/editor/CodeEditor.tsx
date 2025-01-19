import { Editor } from "@monaco-editor/react";
import { EditorData } from "./CodeEditor.data";
import Button from "../ui/Button";
import CodeLanguages from "./CodeLanguages";
import { useStore } from "../../hooks/useStore";
import { useMutation } from "@tanstack/react-query";
import { CodeAPI } from "../../services/codeAPI";
import { useState } from "react";

type CodeEditorProps = {
    code?: string;
    languageId?: number;
};

export default function CodeEditor({
    code: codeShared,
    languageId: languageIdShared,
}: CodeEditorProps) {
    const {
        darkMode,
        setDarkMode,
        setCode,

        language,
        code,
        dialog,
        setDialog,

        created,
        setCreated,
    } = useStore();

    const [link, setLink] = useState<string>();

    const { mutate } = useMutation({
        mutationFn: CodeAPI.create,
        onSuccess: (data) => {
            console.log(data);
            setLink(`${import.meta.env.VITE_FRONTEND_URL}/code/${data}`);
        },
    });

    const handleCreate = () => {
        setCreated(true);
        const data = {
            code: code ? code : "Vacio",
            languageId: language,
        };
        mutate(data);
    };

    const handleCopy = async () => {
        if (link) {
            await navigator.clipboard.writeText(link);
            window.alert("Has copiado el enlace");
        }
    };

    const handleDarkMode = () => {
        setDarkMode();
    };

    const handleLanguages = () => {
        setDialog();
    };

    const handleChange = (value: string | undefined) => {
        setCreated(false);
        setCode(value);
    };

    return (
        <>
            <Editor
                onChange={handleChange}
                height={"50vh"}
                defaultLanguage={
                    languageIdShared
                        ? EditorData.LanguagesInfo[languageIdShared].language
                        : EditorData.LanguagesInfo[EditorData.defaultLanguage]
                              .language
                }
                defaultValue={codeShared ? codeShared : EditorData.defaultCode}
                theme={darkMode ? "vs-dark" : "ligth"}
                language={
                    languageIdShared
                        ? EditorData.LanguagesInfo[languageIdShared].language
                        : EditorData.LanguagesInfo[language].language
                }
            />
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button onClick={handleDarkMode}>
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </Button>
                    <Button onClick={handleLanguages}>
                        {languageIdShared
                            ? EditorData.LanguagesInfo[languageIdShared].label
                            : EditorData.LanguagesInfo[language].label}
                    </Button>
                    {dialog && (
                        <div className="relative">
                            <CodeLanguages />
                        </div>
                    )}
                </div>
                {!codeShared && !created && (
                    <Button
                        color="bg-blue-600"
                        customClass="flex items-center gap-2"
                        onClick={handleCreate}
                    >
                        <img src="/svg/share.svg" alt="Compartir" />
                        Compartir
                    </Button>
                )}
                {created && (
                    <Button
                        color="bg-blue-400"
                        customClass="flex items-center gap-2"
                        onClick={handleCopy}
                    >
                        {link}
                    </Button>
                )}
            </div>
        </>
    );
}

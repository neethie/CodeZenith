import { Editor } from "@monaco-editor/react";
import { EditorData } from "./CodeEditor.data";
import Button from "../ui/Button";
import CodeLanguages from "./CodeLanguages";
import { useStore } from "../../hooks/useStore";

export default function CodeEditor() {
    const { darkMode, setDarkMode, setCode, language, dialog, setDialog } =
        useStore();

    const handleDarkMode = () => {
        setDarkMode();
    };

    const handleLanguages = () => {
        setDialog();
    };

    const handleChange = (value: string | undefined) => {
        setCode(value);
    };

    return (
        <>
            <Editor
                onChange={handleChange}
                height={"50vh"}
                defaultLanguage={
                    EditorData.LanguagesInfo[EditorData.defaultLanguage]
                        .language
                }
                defaultValue={EditorData.defaultCode}
                theme={darkMode ? "vs-dark" : "ligth"}
                language={EditorData.LanguagesInfo[language].language}
            />
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Button onClick={handleDarkMode}>
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </Button>
                    <Button onClick={handleLanguages}>
                        {EditorData.LanguagesInfo[language].label}
                    </Button>
                    {dialog && (
                        <div className="relative">
                            <CodeLanguages />
                        </div>
                    )}
                </div>
                <Button
                    color="bg-blue-600"
                    customClass="flex items-center gap-2"
                >
                    <img src="./svg/share.svg" alt="Compartir" />
                    Compartir
                </Button>
            </div>
        </>
    );
}

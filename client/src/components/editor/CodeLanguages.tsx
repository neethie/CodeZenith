import { useStore } from "../../hooks/useStore";
import { EditorData } from "./CodeEditor.data";

export default function CodeLanguages() {
    const { setLanguage, setDialog } = useStore();

    const handleClick = (languageId: number) => {
        setDialog();
        setLanguage(languageId);
    };

    return (
        <div className="absolute w-max h-28 flex flex-col overflow-y-scroll shadow-lg rounded-md">
            {EditorData.LanguagesInfo.map((language) => (
                <button
                    onClick={() => handleClick(language.id)}
                    className="bg-white text-left px-2 hover:bg-blue-300 transition-all hover:text-white"
                    key={language.id}
                >
                    {language.label}
                </button>
            ))}
        </div>
    );
}

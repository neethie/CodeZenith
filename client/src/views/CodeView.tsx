import styles from "./MainView.module.scss";
import CodeEditor from "../components/editor/CodeEditor";
import { useStore } from "../hooks/useStore";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { CodeAPI } from "../services/codeAPI";

export default function CodeView() {
    const { darkMode } = useStore();

    const { id } = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["getCode", id],
        queryFn: () => CodeAPI.getById(id!),
    });

    if (isLoading) return;
    if (isError) return "Error";
    console.log(data);
    if (data)
        return (
            <div className={styles.container}>
                <div className="font-semibold flex items-center justify-center flex-col py-10">
                    <h3 className="text-[2rem]">Crea y Comparte</h3>
                    <h4 className="text-[2.5rem]">Tu código hasta las nubes</h4>
                </div>
                <main className="flex justify-center">
                    <div
                        className={`p-2 rounded-xl shadow-lg space-y-2 w-2/3 ${
                            darkMode ? "bg-[#201c1c]" : "bg-white"
                        }`}
                    >
                        <CodeEditor
                            code={data.code}
                            languageId={data.languageId}
                        />
                    </div>
                </main>
            </div>
        );
}

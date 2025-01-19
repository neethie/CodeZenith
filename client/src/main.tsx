import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainView from "./views/MainView";
import CodeView from "./views/CodeView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MainView />} />
                    <Route path="/code/:id" element={<CodeView />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>
);

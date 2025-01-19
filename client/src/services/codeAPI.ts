import { isAxiosError } from "axios";
import { api } from "../common/axios";
import { Code } from "../types/code";

export class CodeAPI {
    static create = async (codeData: Code) => {
        try {
            const { data } = await api.post("/code/create", codeData);
            return data;
        } catch (error) {
            console.log(error);
            if (isAxiosError(error)) throw new Error(error.message);
        }
    };

    static getById = async (id: string) => {
        try {
            const { data } = await api.get(`/code/${id}`);
            return data;
        } catch (error) {
            console.log(error);
            if (isAxiosError(error)) throw new Error(error.message);
        }
    };
}

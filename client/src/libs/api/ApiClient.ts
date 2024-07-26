import axios, {AxiosInstance} from "axios";

import {TaskData} from "../../types";

class ApiClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: `${process.env.API_BASE_URL}/api`,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async addTask<T>(data: TaskData): Promise<T> {
        const response = await this.client.post("/tasks", data);
        return response.data;
    }

    async getTasks<T>(): Promise<T> {
        const response = await this.client.get("/tasks");
        return response.data;
    }
}

const ClientApi = new ApiClient();

export default ClientApi;
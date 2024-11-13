import { axiosInstance } from "./axiosInstance";

export const baseService = {
    getAll: async<T> (url: string) => {
        try {
            let response = await axiosInstance.get<T>(url);
            return response.data;
        } catch (error) {
            console.log(`Base Service getAll error ${url}`, error);
            throw error;
        }
    },
    getById: async<T> (url: string, id: string) => {
        try {
            let response = await axiosInstance.get<T>(`${url}/${id}`);
            return response.data;
        } catch (error) {
            console.log(`Base Service getById error ${url}`, error);
            throw error;
        }
    },
    add: async<T> (url: string, model: any) => {
        try {
            let response = await axiosInstance.post<T>(url, model);
            return response.data;
        } catch (error) {
            console.log(`Base Service add error ${url}`, error);
            throw error;
        }
    },
    update: async<T> (url: string, model: any) => {
        try {
            let response = await axiosInstance.put(url, model);
            return response.data;
        } catch (error) {
            console.log(`Base Service update error ${url}`, error);
            throw error;
        }
    },
    delete: async<T> (url: string, id: number) => {
        try {
            let response = await axiosInstance.delete(`${url}/${id}`);
            return response.data;
        } catch (error) {
            console.log(`Base Service delete error ${url}`, error);
            throw error;
        }
    }
}
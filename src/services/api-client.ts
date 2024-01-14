import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: number;
    next ?: string;
    results: T[];
}

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '7911166ca74b4fc1a89a79142db24e36'
    }
})

class APIClient<T>{
    endpoint : string;
    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
                            .then(res => res.data);
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id)
                            .then(res => res.data);
    }
}

export default APIClient;


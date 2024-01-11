import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '7911166ca74b4fc1a89a79142db24e36'
    }
})

export interface FetchResponse<T>{
    count: number;
    results: T[];
}

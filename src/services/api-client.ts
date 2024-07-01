import axios, { Axios, AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
     count: number;
     next: string | null;
     results: T[];
}

const axiosInstance = axios.create({
     baseURL: "https://api.rawg.io/api/",
     params: {
          key: "d1d7ddcde6274c88b0cc05565abc4452",
     }
});

class APIClient<T> {
     endPoint: string;
     constructor(endPoint: string) {
          this.endPoint = endPoint;
     }
     getAll = (config: AxiosRequestConfig) => {
          return axiosInstance
               .get<FetchResponse<T>>(this.endPoint, config)
               .then((response) => response.data);
     }
}

export default APIClient;
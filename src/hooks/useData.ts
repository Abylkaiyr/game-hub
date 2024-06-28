import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
     count: number;
     results: T[];
}

const useData = <T>(endPoint: string, requestCongig?: AxiosRequestConfig, deps?: any) => {
     const [data, setData] = useState<T[]>([]);
     const [error, setError] = useState("");
     const [isLoading, setIsLoading] = useState(false);
     useEffect(() => {
          const conroller = new AbortController();
          setIsLoading(true);
          apiClient
               .get<FetchResponse<T>>(endPoint, { signal: conroller.signal, ...requestCongig })
               .then((response) => {
                    setIsLoading(false);
                    setData(response.data.results)
               }
               )
               .catch((error) => {
                    if (error instanceof CanceledError) return;
                    setError(error.message)
                    setIsLoading(false);
               });

          return () => conroller.abort();
     }, deps ? [...deps] : []);

     return { data, error, isLoading };
};
export default useData;

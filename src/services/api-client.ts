import axios from "axios";

export interface FetchResponse<T> {
     count: number;
     results: T[];
}

export default axios.create({
     baseURL: "https://api.rawg.io/api/",
     params: {
          key: "d1d7ddcde6274c88b0cc05565abc4452",
     }
});
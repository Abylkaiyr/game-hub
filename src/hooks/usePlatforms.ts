import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import platforms from "../assets/data/platforms";
import ms from "ms";

export interface Platform {
     id: number;
     name: string;
     slug: string;
}

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () => useQuery({
     queryKey: ["platforms"],
     queryFn: apiClient.getAll,
     staleTime: ms("24h"),
     initialData: platforms,
})

export default usePlatforms;
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import platforms from "../assets/data/platforms";

export interface Platform {
     id: number;
     name: string;
     slug: string;
}

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () => useQuery({
     queryKey: ["platforms"],
     queryFn: apiClient.getAll,
     staleTime: 1000 * 60 * 60 * 24, // 24 hours
     initialData: {
          count: platforms.length,
          results: platforms,
     }
})

export default usePlatforms;
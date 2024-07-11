import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import platforms from "../assets/data/platforms";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms");

const usePlatforms = () => useQuery({
     queryKey: ["platforms"],
     queryFn: apiClient.getAll,
     staleTime: ms("24h"),
     initialData: platforms,
})

export default usePlatforms;
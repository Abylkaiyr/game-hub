import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ms from "ms";
import useGameQueryStore from "../services/store";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>(
    {
      queryKey: ["games", gameQuery],
      queryFn: ({ pageParam = 1 }) => apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortBy,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      },       // allPages contains data for each page we have retrieved so far
      staleTime: ms("24h"),
    }
  );
}

export default useGames;
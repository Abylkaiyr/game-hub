
import { useQuery } from "@tanstack/react-query";
import { GameScreenShots } from "../entities/GameScreenShots";
import APIClient from "../services/api-client";

const useGameScreenShots = (gameId: number) => {
    const apiClient = new APIClient<GameScreenShots>(`/games/${gameId}/screenshots`);
    return useQuery({
        queryKey: ["screenshots", gameId],
        queryFn: apiClient.getAll
    });
}

export default useGameScreenShots;

import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortBy?: string;
    searchText?: string;
}

export interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortBy: (sortBy: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {
    },
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setGenreId: (genreId) => set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
    setPlatformId: (platformId) => set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
    setSortBy: (sortBy) => set((state) => ({ gameQuery: { ...state.gameQuery, sortBy } })),
}));

export default useGameQueryStore;




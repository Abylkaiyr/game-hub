import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Platform } from "./hooks/usePlatforms";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { sortingOptions } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortBy: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <NavBar
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText });
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onGenreSelect={(genre) => {
              setGameQuery({ ...gameQuery, genreId: genre.id});
            }}
          />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <Box paddingLeft={5}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={2}>
            <Box marginRight={5}>
              <PlatformSelector
                onSelect={(platform) => {
                  setGameQuery({ ...gameQuery, platformId: platform.id});
                }}
                selectedPlatformId={gameQuery.platformId}
              />
            </Box>

            <SortSelector
              onSelect={(sortBy) => {
                setGameQuery({ ...gameQuery, sortBy });
              }}
              selectedSort={sortingOptions.get(gameQuery.sortBy)}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

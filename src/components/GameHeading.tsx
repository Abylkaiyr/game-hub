import { Heading } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../services/store";



const GameHeading = () => {
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);  
  const platform = usePlatform(platformId);
  
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;

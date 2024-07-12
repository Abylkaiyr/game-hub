import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { Genre } from "../entities/Genre";
import { Publisher } from "../entities/Publisher";

interface GameAttributesProps {
    game: Game;
}

const GameAttributes = ({game}: GameAttributesProps) => {
  return (
    <SimpleGrid columns={2} spacing={5} as='dl'>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({platform}) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="MetaScore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game.genres?.map((genre: Genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher: Publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
        </DefinitionItem>
      </SimpleGrid>
  )
}

export default GameAttributes
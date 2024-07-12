import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";


const GameDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { data: game, isLoading, error } = useGame(slug!); 
  
  if (isLoading) {
    return <Spinner />
  }

  if (error || !game) {
    throw error
  }
  return (   
    <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
      <GridItem>
        <h1>{game.name}</h1>
        <ExpandableText children={game.description_raw} />
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenShots  gameId={game.id} />
      </GridItem>    
    </SimpleGrid>
  )
}

export default GameDetailPage
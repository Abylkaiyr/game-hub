import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Spinner, Text } from "@chakra-ui/react";


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
    <>
      <h1>{game.name}</h1>
      <Text>{game.description_raw}</Text>
    </>
  )
}

export default GameDetailPage
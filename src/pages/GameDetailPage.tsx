import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Button, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import ExpandableText from "../components/ExpandableText";


const GameDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { data: game, isLoading, error } = useGame(slug!);
  const [showMore, setShowMore] = useState(false);
  
  if (isLoading) {
    return <Spinner />
  }

  if (error || !game) {
    throw error
  }

  return (
    <>
      <h1>{game.name}</h1>
      <ExpandableText children={game.description_raw} />
    </>
  )
}

export default GameDetailPage
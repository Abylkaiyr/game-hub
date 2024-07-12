import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import CriticScore from "../components/CriticScore";
import GameAttributes from "../components/GameAttributes";
import useGameTrailer from "../hooks/useGameTrailer";
import GameTrailer from "../components/GameTrailer";


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
      <ExpandableText children={game.description_raw} />
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  )
}

export default GameDetailPage
import { SimpleGrid } from "@chakra-ui/react";
import useGameScreenShots from "../hooks/useGameScreenShots";

interface GameScreenShotsProps {
    gameId: number;
}


const GameScreenShots = ({gameId}: GameScreenShotsProps) => {
  const { data, isLoading, isError } = useGameScreenShots(gameId);
  if (isLoading) return null;
  if (isError) throw new Error("An error occurred") ;
  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
        {data?.results.map((file => (
            <img key={file.id} src={file.image} alt="" />
        )))}
    </SimpleGrid>
  )  
}

export default GameScreenShots
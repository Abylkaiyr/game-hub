import useGameTrailers from "../hooks/useGameTrailer";

interface GameTrailerProps {
    gameId: number;
}

const GameTrailer = ({gameId}: GameTrailerProps) => {
  const { data: trailers, isLoading, error } = useGameTrailers(gameId);

    if (isLoading) {
        return null;
    }

    if (error) {
        throw error;
    }


  const firstTrailer = trailers?.results[0];
    return firstTrailer ? <video src={firstTrailer.data[480]}
    poster={firstTrailer.preview}
    controls
    /> : null;
}

export default GameTrailer
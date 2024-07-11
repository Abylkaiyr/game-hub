import {
  Button,
  HStack,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import getCroppedImage from "../services/image-url";
import useGameQueryStore from "../services/store";



const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore(s=>s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s=>s.setGenreId);
  return (
    <>
      {isLoading && <Spinner />}
      {error && null}
      {!isLoading && (
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
      )}
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            {
              <HStack key={genre.id}>
                <Image
                  src={getCroppedImage(genre.image_background)}
                  alt={genre.name}
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                />
                <Button
                  variant="link"
                  fontSize="lg"
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={
                    genre.id === selectedGenreId ? "bold" : "normal"
                  }
                  onClick={() => {
                    setSelectedGenreId(genre.id);
                  }}
                >
                  {genre.name}
                </Button>
              </HStack>
            }
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

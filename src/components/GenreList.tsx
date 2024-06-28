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
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";

interface Props {
  onGenreSelect: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenreList = ({ selectedGenre, onGenreSelect }: Props) => {
  const { data, error, isLoading } = useGenres();
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
                    selectedGenre
                      ? selectedGenre.id === genre.id
                        ? "bold"
                        : "normal"
                      : "normal"
                  }
                  onClick={() => {
                    onGenreSelect(genre);
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

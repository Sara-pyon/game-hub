import { Button, HStack, Image, List, ListItem, Skeleton, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url';

interface Props{
  onSelectGenre : (genre : Genre) => void;
}

const GenreList = ({onSelectGenre} :Props) => {
  const { data, isLoading, error } = useGenres();

  if(error) return null;
  if(isLoading) return <Skeleton height='100vh' width='100%' borderRadius='5px'></Skeleton>

  return (
    <List>
      {data.map(genre => 
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius='5px' src={getCroppedImageUrl(genre.image_background)}/>
            <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{ genre.name }</Button>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList
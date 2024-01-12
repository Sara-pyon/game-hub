import { Button, HStack, Heading, Image, List, ListItem, Skeleton } from '@chakra-ui/react';
import useGenres from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url';

interface Props{
  onSelectGenreId : (genreId: number) => void;
  selectedGenreId : number | undefined;
}

const GenreList = ({onSelectGenreId,selectedGenreId} :Props) => {
  const { data, isLoading, error } = useGenres();

  if(error) return null;
  if(isLoading) return <Skeleton height='100vh' width='100%' borderRadius='5px'></Skeleton>

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map(genre => 
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image 
                objectFit='cover' boxSize='32px' borderRadius='5px' 
                src={getCroppedImageUrl(genre.image_background)}/>
              <Button 
                whiteSpace='normal' textAlign='left'
                fontWeight={genre.id === selectedGenreId ? 'bold':'normal'} 
                onClick={() => onSelectGenreId(genre.id)} fontSize='lg' variant='link'>
                  { genre.name }
              </Button>
            </HStack>
          </ListItem>)}
      </List>
    </>
  )
}

export default GenreList
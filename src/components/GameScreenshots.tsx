import { GridItem, SimpleGrid, Image } from "@chakra-ui/react"
import useScreenShots from "../hooks/useScreenShots"

interface Props{
    gameId: number;
}

const GameScreenshots = ({ gameId }:Props) => {
    const {data ,error, isLoading} = useScreenShots(gameId);

    if(isLoading) null;
    if(error) throw error;

    console.log(data);

  return (
    <SimpleGrid columns={{base:1,md:2}} spacing={2} marginY={5}>
        {data?.results.map(file => <Image key={file.id} src={file.image}/>)}
    </SimpleGrid>
  )
}

export default GameScreenshots
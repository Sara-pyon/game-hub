import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkelton from './GameCardSkelton';
import GameCardContainer from './GameCardContainer';


const GameGrid = () => {
    const { games, error, isLoading} = useGames();
    const skeltons = [1, 2, 3, 4, 5, 6];

  return (
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding= '10px'>
          {isLoading && skeltons.map(skelton => (
            <GameCardContainer key ={skelton}>
              <GameCardSkelton key ={skelton}/>
            </GameCardContainer>))}
          {games.map(game => (
            <GameCardContainer key={game.id}>
              <GameCard key={game.id} game={game}/>
            </GameCardContainer>))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid
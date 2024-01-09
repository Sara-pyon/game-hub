import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return ( 
    <InputGroup>
        <InputLeftElement children={<BsSearch/>} />
        <Input borderRadius={20} placeholder='search games...' variant='Filled'/>
    </InputGroup>
  )
}

export default SearchInput
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface Props{
    onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({onSelectedPlatform}:Props) => {
  const {data, error} = usePlatforms();

  if(error) return null;
    
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>PlatForm</MenuButton>
        <MenuList>
            {data.map(platform => 
                <MenuItem key={platform.id} onClick={() => onSelectedPlatform(platform)}>
                    {platform.name}
                </MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector
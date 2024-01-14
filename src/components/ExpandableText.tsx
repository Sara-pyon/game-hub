import { Button, Text } from "@chakra-ui/react";
import { useState } from "react"

interface Props{
    children: string;
}

const ExpandableText = ({children}:Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if(!children) return null;

  if(children.length <= limit)
    return <Text>{children}</Text>;

  const sammary = expanded? children : children.substring(0, limit) + '... ';

  return (<Text>{ sammary }
            <Button onClick={() => setExpanded(!expanded)} 
                    colorScheme='yellow'
                    size='xs'
                    fontWeight='bold'
                    marginInline={2}>
                {expanded ? 'Show More' : 'Show less' }
            </Button>
          </Text>);
};

export default ExpandableText
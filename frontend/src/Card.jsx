import { Button, VStack, Image, Text} from '@chakra-ui/react'
import React from 'react'

export const Card = ({amount, img, checkoutHandler}) => {
  return (

    <VStack>
       <Image src={img}   boxSize={"64"} objectFit={'cover'} />
       <Text>₹{amount}</Text>
       <Button onClick={()=>{
        checkoutHandler(amount)}}>Buy Now</Button>
    </VStack>

  )
}

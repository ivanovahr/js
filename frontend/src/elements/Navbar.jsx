import React from 'react'
import { Container, Flex, Text, Link } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
            <Text
                backgroundColor='gray.50'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
            >
              <Link to={"/"}>WEEKLY MENU</Link>
            </Text>
        </Flex>
    </Container>
  )
}

export default Navbar
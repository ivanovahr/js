import React from 'react'
import { BsPatchPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={4} bg='pink.200'>
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
                backgroundColor='black'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
            >
              <Link to={"/"}>WEEKLY MENU</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <BsPatchPlus />
                    </Button>
                </Link>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar
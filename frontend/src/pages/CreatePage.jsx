import { Heading, VStack, Container, Box } from '@chakra-ui/react';
import React, { useState } from 'react'

const CreatePage = () => {
    const[newMeal, setNewMeal] = useState({
        name: "",
    });
    return <Container maxW={"container.sm"} size={"2xl"} textAlign={"center"} mb={8}>
        <VStack spacing={8}>
            <Heading as={"h1"}>
                Save New Meal
            </Heading>
            <Box w={"full"} bg="blackAlpha.200" p={6} rounded={"lg"} shadow={"md"}>

            </Box>
        </VStack>
    </Container>
}

export default CreatePage
import { useMealTable } from '../store/meal';
import { Heading, VStack, Container, Box, Input, Button } from '@chakra-ui/react';
import { toaster } from "@/components/ui/toaster"
import React, { useState } from 'react'

const CreatePage = () => {
    const[newMeal, setNewMeal] = useState({
        name: "",
    });

    const { createMeal }=useMealTable()

    const handleAddMeal = async() => {
       const {success, message} = await createMeal(newMeal)
       console.log("Success:", success)
       console.log("Message:", message)
        if(!success) {
            toaster.create({
                title: "Error",
                description: message,
            })
        } else {
            toaster.create({
                title: "GREAT!",
                description: message,
            })
        }
        setNewMeal({name:""});
    }

    return <Container maxW={"container.sm"} size={"2xl"} textAlign={"center"} mb={8}>
        <VStack spacing={8}>
            <Box w={"full"} bg="blackAlpha.200" p={6} rounded={"lg"} shadow={"md"} mt ={16}>

                <Heading as={"h1"} size={"2xl"} mb={16} mt={8} textAlign={"center"}>
                    NEW MEAL
                </Heading>

                <VStack spacing={4}>
                    <Input
                        placeholder="Meal name"
                        borderColor={"black"}
                        name="name"
                        value={newMeal.name}
                        onChange={(e)=> setNewMeal({...newMeal, name: e.target.value})}
                    />
                    <Button colorScheme={"black"} onClick={handleAddMeal} w={"full"}>
                        Add New Meal
                    </Button>
                </VStack>

                
            </Box>
        </VStack>
    </Container>
}

export default CreatePage
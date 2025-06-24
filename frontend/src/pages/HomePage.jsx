import { useMealTable } from '@/store/meal';
import { Container, VStack, Heading, SimpleGrid, Box} from '@chakra-ui/react';
import React, { useEffect } from 'react'
import MealCard from '@/components_app/MealCard';

const HomePage = () => {
  const {fetchMeals, meals} = useMealTable();
  useEffect(() => {fetchMeals()}, [fetchMeals]);
  console.log("meals: ", meals);

  return (
    <Container maxW={"container.xl"} py={8}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} mb={16} mt={8} textAlign={"center"}>
          Meal Plan
        </Heading>
        <Heading as={"h1"} size={"2xl"} mb={16} mt={8} textAlign={"center"}>
          All Meals
        </Heading>
        <SimpleGrid  columns={4} spacing={8} w={"full"} spaceY={4} spaceX={2}>
          {meals.map((meal) => (
            <MealCard key={meal._id} meal={meal} />
          ))}
        </SimpleGrid>

      </VStack>

    </Container>
  )
};

export default HomePage
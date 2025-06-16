import { Box, Heading, HStack, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const MealCard = ({meal}) => {
    return (
        <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        transition="all 0.3s"
        _hover={{transform: "translateY(-5px)", shadow:"xl"}}>
            
            <Box p={4}>
                <Heading as="h3" size={"md"} mb={2}>
                    {meal.name}
                </Heading>
                <HStack spacing={2}>
                    <IconButton icon={<EditIcon/>}
                     colorScheme={"blue"}
                     aria-label="Edit meal"
                      />
                    <IconButton icon={<DeleteIcon/>}
                     colorScheme={"red"}
                     aria-label="Delete meal"
                      />
                </HStack>

            </Box>
            
        </Box>
    );
};
export default MealCard
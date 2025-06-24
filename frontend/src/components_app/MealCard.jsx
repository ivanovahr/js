import { Box, Heading, HStack, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useMealTable } from "@/store/meal";

const MealCard = ({meal}) => {
    // const { deleteMeal } = useMealTable() 
    // const toast = useToast()
    // const handleDeletedMeal = async (id) => {
    //     const {success, message} =  await deleteMeal(id)
    //     if(!success) {
    //         toast ({
    //             title: 'Error',
    //             description: message,
    //             status: 'error',
    //             duration: 3000,
    //             isClosable: true,
    //         })
    //     } else {
    //         toast ({
    //             title: 'Success',
    //             description: message,
    //             status: 'success',
    //             duration: 3000,
    //             isClosable: true,
    //         })
    //     }
    // }

    return (
        <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        transition="all 0.3s"
        _hover={{transform: "translateY(-5px)", shadow:"xl"}}>
            
            <Box p={2}>
                <Heading as="h3" size={"md"} mb={2}>
                    {meal.name}
                </Heading>
                <HStack spacing={2}>
                    <IconButton
                     variant="solid"
                     aria-label="Edit meal"
                    >
                        <EditIcon color="white"/>
                    </IconButton>
                    <IconButton 
                     aria-label="Delete meal"
                    //  onClick={() => handleDeletedMeal(meal._id)}
                    >
                        <DeleteIcon color="white"/>
                    </IconButton>
                

                </HStack>

            </Box>
            
        </Box>
    );
};
export default MealCard
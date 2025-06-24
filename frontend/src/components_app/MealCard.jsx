import { Box, Heading, HStack, IconButton, Input, useDisclosure, VStack } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { toaster } from "@/components/ui/toaster"
import { useMealTable } from "@/store/meal";

const MealCard = ({meal}) => {
    const { deleteMeal } = useMealTable();
    // const { isOpen, onOpen, onClose } = useDisclosure;
    const handleDeletedMeal = async (id) => {
        const {success, message} =  await deleteMeal(id)
        if(!success) {
            toaster.create({
                title: "Error",
                description: message,
            });
        } else {
            toaster.create({
                title: "GREAT!",
                description: message,
            });
        }
    }

    return (
        <Box
        shadow="lg"
        w="100%" 
        rounded="lg"
        overflow="hidden"
        transition="all 0.3s"
        _hover={{transform: "translateY(-5px)", shadow:"xl"}}
        >
            
            <Box p={2}>
                <Heading as="h3" size={"md"} mb={2}>
                    {meal.name}
                </Heading>
                <HStack spacing={2}>
                    <IconButton
                     variant="solid"
                     aria-label="Edit meal"
                    //  onClick={onOpen}
                    >
                    <EditIcon color="white"/>
                    </IconButton>
                    <IconButton 
                     aria-label="Delete meal"
                     onClick={() => handleDeletedMeal(meal._id)}
                    >
                        <DeleteIcon color="white"/>
                    </IconButton>
                

                </HStack>

            </Box>
            {/* <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Update Meal</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input  placeholder="Meal name"
                                borderColor={"black"}
                                name="name"/>
                        </VStack>
                    </ModalBody>
                </ModalContent>

            </Modal> */}
            
        </Box>
    );
};
export default MealCard
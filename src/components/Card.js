import { Heading, HStack, Box, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div>
      <HStack spacing={2}>
        <Box backgroundColor="white" paddingBottom={5} textColor="black" rounded="10">
          <VStack spacing={2}>
            <Image src={imageSrc} rounded="10" />
            <Box padding={3}>
            <Heading paddingBottom="2" size="md">
              {title}
            </Heading>
            <Text>{description}</Text>
            <HStack spacing={2}>
              <Text fontWeight="bold">See more</Text>
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </HStack>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </div>
  );
};

export default Card;

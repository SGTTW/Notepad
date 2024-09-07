import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Image,
  // List,
  // ListIcon,
  // ListItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

// importing picture
import profilePicture from "../../../public/pp.jpeg";

//screen @ 1:54
const About = () => {
  // let's make use of our useState here
  const [button, setButton] = useState(false);

  //now let's do useEffect
  // triggered everytime the page is loaded
  useEffect(() => {
    if (button == false) {
      setTimeout(() => {
        alert("Welcome, thanks for getting to know me!");
      }, [5000]);
    } else {
      setTimeout(() => {
        alert("  thanks for getting to know me!");
      }, [5000]);
    }
  }, [button]);

  return (
    <div>
      <Flex direction={"column"} pl={"1rem"}>
        <Flex
          justify={{ base: "center" }}
          direction={"column"}
          align={"center"}
          mt={{ base: "20px", md: "40px", lg: "60px" }}
        >
          <Text
            fontSize={{ base: "24px", md: "28px" }}
            p={{ base: "1", md: "2", lg: "3" }}
            align={"center"}
            fontWeight={"bold"}
          >
            <Image
              src={profilePicture}
              boxSize={{ base: "240px", md: "300px", lg: "350px" }}
              borderRadius={"full"}
            />
            About Segun
          </Text>
        </Flex>
        <Text
          p={{ base: "1", md: "2", lg: "3" }}
          fontSize={{ base: "18px", md: "20px", lg: "22px" }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, rem
          doloribus officiis a natus impedit consequatur beatae quibusdam? Rem
          dolores velit dolorem, mollitia, sint unde, inventore quas tempore
          alias dolorum quaerat architecto nemo? Pariatur inventore ullam ab,
          voluptate iste odio nobis eligendi quia ipsa, facere velit nemo
          consectetur deserunt ut.
        </Text>
        {/* let's add a table */}
        <Flex justify={"center"}>
          {/* <TableContainer>
            <Table>
              //  <TableCaption>First Column</TableCaption>  
              <Thead>
                <Tr>
                  <Th>example 1</Th>
                  <Th>example 1</Th>
                  <Th>example 1</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Th>example 1</Th>
                <Th>example 1</Th>
                <Th>example 1</Th>
              </Tbody>
            </Table>
          </TableContainer> */}
          {/* copied this from ckakra documentation */}
          <TableContainer
            w={{ base: "400px", md: "600px", lg: "700px" }}
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          >
            <Table variant="striped" colorScheme="blue">
              {/* for now we don't need the table caption */}
              {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
              <Thead>
                <Tr>
                  <Th>Hobbies</Th>
                  <Th>Description</Th>
                  {/* <Th>into</Th> */}
                  {/* <Th isNumeric></Th> */}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Reading</Td>
                  <Td>40 minutes a day</Td>
                  {/* <Td>millimetres (mm)</Td> */}
                  {/* <Td isNumeric>25.4</Td> */}
                </Tr>
                <Tr>
                  <Td>Gaming</Td>
                  <Td>Action and RPG</Td>
                  {/* <Td>centimetres (cm)</Td> */}
                  {/* <Td isNumeric>30.48</Td> */}
                </Tr>
                <Tr>
                  <Td>Coding</Td>
                  <Td>React</Td>
                  {/* <Td>metres (m)</Td> */}
                  {/* <Td isNumeric>0.91444</Td> */}
                </Tr>
              </Tbody>
              {/* <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot> */}
            </Table>
          </TableContainer>
        </Flex>
        {/* let's add an accordion */}
        <Flex
          mt={{ base: "20px", md: "40px", lg: "60px" }}
          ml={{ base: "10px", md: "20px", lg: "30px" }}
        >
          {/* <Accordion>
            <AccordionItem>
              <Text>heyyyyyy</Text>
              <AccordionButton></AccordionButton>
            </AccordionItem>
          </Accordion> */}
          {button == false ? (
            <Flex
              justify={"center"}
              // w={{ base: "120px", md: "200px", lg: "300px" }} //let's add a padding instead
              p={{ base: "1", md: "2", lg: "3" }}
              bg={"gray.300"}
              _dark={{ bg: "gray.600" }}
              align={"center"}
              borderRadius={{ base: "5", md: "10", lg: "15" }}
              cursor={"pointer"}
              _hover={{ fontStyle: "italic" }}
              onClick={() => {
                setButton(!button);
              }}
            >
              <Text fontSize={{ base: "18px", md: "20px", lg: "22px" }}>
                Philosophy
              </Text>
            </Flex>
          ) : (
            <Flex
              justify={"center"}
              // w={{ base: "120px", md: "200px", lg: "300px" }} //let's add a padding instead
              p={{ base: "1", md: "2", lg: "3" }}
              bg={"gray.300"}
              _dark={{ bg: "gray.600" }}
              align={"center"}
              borderTopLeftRadius={{ base: "5", md: "10", lg: "15" }}
              borderTopRightRadius={{ base: "5", md: "10", lg: "15" }}
              cursor={"pointer"}
              _hover={{ fontStyle: "italic" }}
              onClick={() => {
                setButton(!button);
              }}
            >
              <Text fontSize={{ base: "18px", md: "20px", lg: "22px" }}>
                Philosophy
              </Text>
            </Flex>
          )}
        </Flex>

        {button === false ? null : (
          <Flex
            bg={"gray.300"}
            _dark={{ bg: "gray.600" }}
            p={{ base: "1", md: "2", lg: "3" }}
          >
            <Text
              p={{ base: "10px", md: "20px", lg: "30px" }}
              fontSize={{ base: "18px", md: "20px", lg: "22px" }}
            >
              Lorem ipsum dolor s it amet consectetur adipisicing elit. Dicta,
              nihil?
            </Text>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default About;

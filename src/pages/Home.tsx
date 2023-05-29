import React from "react";
import "./Home.css";
import { Flex, Box, Spacer, Button } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import ImageSlide from "../components/ImageSlide";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <Flex
        borderRadius={10}
        backgroundColor={"black"}
        direction={"column"}
        justify={"center"}
        align={"center"}
        w={"100%"}
      >
        <Flex direction={"column"} mb={"3%"}>
          <Text
            mb={"5%"}
            textAlign={"center"}
            textColor={"white"}
            fontWeight={"bold"}
            fontSize={"75px"}
          >
            QuitBoard
            <br />
            안전한 킥보드 생활.
          </Text>

          <Box mb={"5%"}>
            <Link to="/statistics">
              <Button borderRadius={"20"} colorScheme={"green"}>
                Get your statistics
              </Button>
            </Link>
          </Box>
        </Flex>
        <Box overflow={"hidden"} maxW={"100%"}>
          <ImageSlide />
        </Box>
      </Flex>
    </React.Fragment>
  );
}

export default Home;

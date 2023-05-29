import {
  Button,
  Spacer,
  Image,
  Text,
  Box,
  Flex,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { MdMap, MdWarning, MdWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";
import searchpage from "../assets/images/searchpage.png";
import "./Search.css";

function Search() {
  return (
    <Flex
      className="container search-container"
      w={"100%"}
      align={"center"}
      direction={"row"}
    >
      <Flex flex={"3"}>
        <Image src={searchpage} ml={"14%"}></Image>
      </Flex>
      <Spacer />
      <Flex flex={"1"} direction={"column"} mr={"10%"}>
        <Flex direction={"column"} textAlign={"center"}>
          <Text
            fontSize={"80px"}
            lineHeight={"1.2"}
            pb={"5%"}
            borderBottom={"2px solid #82a585"}
          >
            Search
          </Text>
          <Text mt={"2%"}>
            위반 항목을 더 상세히 찾아보세요.
            <Text>
              세 가지 항목 중 원하는 항목을 골라 검색하실 수 있습니다.
              <Text>
                위반은 카드형태로 나타나며 상세 정보를 확인하실 수 있습니다.
              </Text>
            </Text>
          </Text>
        </Flex>

        <Flex
          alignItems="center"
          w={"100%"}
          mt={"9%"}
          mb={"3%"}
          justify="center"
          className="searchbox"
        >
          <Stack direction="column" spacing={4}>
            <Link to="/violations/choice/region">
              <Button
                size="lg"
                width="350px"
                height="70px"
                leftIcon={<MdMap />}
                colorScheme="green"
                variant="solid"
              >
                위치 선택
              </Button>
            </Link>
            <Spacer />
            <Link to="/violations/choice/violation">
              <Button
                size="lg"
                width="350px"
                height="70px"
                leftIcon={<MdWarning />}
                colorScheme="teal"
                variant="solid"
              >
                위반 항목 선택
              </Button>
            </Link>
            <Spacer />
            <Link to="/violations/choice/time">
              <Button
                size="lg"
                width="350px"
                height="70px"
                leftIcon={<MdWatchLater />}
                colorScheme="green"
                variant="solid"
              >
                날짜 선택
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Search;

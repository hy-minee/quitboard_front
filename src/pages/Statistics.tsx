import { Flex, Box, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import S_regionChart from "../components/S_regionChart1";
import S_timeChart from "../components/S_timeChart";
import S_violationChart from "../components/S_violationChart";
import "./Statistics.css";

function Statistics() {
  const [accumulatedCount, setaccumulatedCount] = useState(0);

  useEffect(() => {
    // API 요청
    fetch("/api/images/count")
      .then((response) => response.json())
      .then((data) => {
        // 이미지 개수 데이터 처리
        setaccumulatedCount(data.count);
      })
      .catch((error) => {
        console.error("Error fetching count:", error);
      });
  }, []);

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  return (
    <React.Fragment>
      <Flex
        borderRadius={10}
        backgroundColor={"black"}
        className={"statistics-container"}
        direction={"column"}
        w={"100%"}
      >
        <Flex direction={"column"} w={"100%"} mt={"2%"}>
          <Text
            textAlign={"center"}
            textColor={"white"}
            fontWeight={"bold"}
            fontSize={"60px"}
          >
            분야별 현황
          </Text>
        </Flex>
        <Spacer />
        <Flex direction="row" w="100%">
          <Flex flex={3}>
            <S_timeChart />
          </Flex>
          <Flex
            pl={"2%"}
            ml={"2%"}
            mt={"10%"}
            mr={"3%"}
            flex={2}
            direction="column"
            backgroundColor={"#111111"}
            borderRadius={"10px"}
          >
            <Text
              pt={"2%"}
              fontSize={"20px"}
              textAlign={"left"}
              textColor={"white"}
            >
              지역 및 위반 종류별 현황
            </Text>
            <Flex direction={"row"} flex={2}>
              <Flex flex={1}>
                <S_regionChart data={data} />
              </Flex>
              <Flex flex={1}>
                <S_violationChart />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Spacer />
        <Text fontSize={"15px"} textAlign={"center"} textColor={"lightgray"}>
          누적 촬영 수 : {accumulatedCount}
        </Text>
        <Spacer />
        <Text
          ml={"5"}
          fontSize={"12px"}
          textAlign={"left"}
          textColor={"lightgray"}
        >
          참고: 통계치는 전날 자정을 기준으로 업데이트 됩니다.
        </Text>
      </Flex>
    </React.Fragment>
  );
}

export default Statistics;

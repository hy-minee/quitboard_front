import { Flex, Box, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import S_regionChart from "../components/S_regionChart1";
import S_timeChart from "../components/S_timeChart";
import S_violationChart from "../components/S_violationChart1";
import "./Statistics.css";
import axios from "axios";

interface ViolationCountObj {
  [key: string]: number;
}

interface RegionCountObj {
  [key: string]: number;
}

interface DetectedHourCountObj {
  [key: string]: number;
}

interface MyJsonData {
  violationCountObj: ViolationCountObj;
  regionCountObj: RegionCountObj;
  detectedHourCountObj: DetectedHourCountObj;
}

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8000/api/v1"
      : "http://ec2-43-200-248-130.ap-northeast-2.compute.amazonaws.com/api/v1/",
  withCredentials: true,
});

function Statistics() {
  const [totalCount, setTotalCount] = useState<MyJsonData>({
    violationCountObj: {
      "헬멧 미착용": 4,
      "인도 주행": 2,
    },
    regionCountObj: {
      "공대 7호관": 2,
      "법 전원": 2,
    },
    detectedHourCountObj: {
      "10": 8,
      "11": 10,
      "12": 13,
      "13": 20,
      "14": 4,
      "15": 15,
      "16": 7,
      "17": 4,
      "18": 2,
      "19": 11,
      "20": 13,
    },
  });
  useEffect(() => {
    // 데이터를 받아오는 비동기 함수 호출
    fetchData();
  }, []);

  const fetchData = () => {
    // 데이터를 받아오는 비동기 요청
    instance.get("violations/").then((response) => {
      // 받아온 데이터 설정
      console.log("response.data출력");
      console.log(response.data);
      setTotalCount(response.data);
    });
    console.log(totalCount);
    console.log(totalCount.violationCountObj);
    console.log(totalCount.regionCountObj);
    console.log(totalCount.detectedHourCountObj);
  };
  // useEffect(() => {
  //   // API 요청
  //   fetch("/api/images/count")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // 이미지 개수 데이터 처리
  //       setaccumulatedCount(data.count);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching count:", error);
  //     });
  // }, []);

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
            <S_timeChart data={totalCount.detectedHourCountObj} />
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
                <S_regionChart data={totalCount.regionCountObj} />
              </Flex>
              <Flex flex={1}>
                <S_violationChart data={totalCount.violationCountObj} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Spacer />
        <Text fontSize={"15px"} textAlign={"center"} textColor={"lightgray"}>
          {/* 누적 촬영 수 : {totalCount.detectedHourCountObj.} */}
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

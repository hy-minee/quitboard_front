import { Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import S_regionChart from "../components/S_regionChart";
import S_timeChart from "../components/S_timeChart";
import S_violationChart from "../components/S_violationChart";
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

  return (
    <React.Fragment>
      <Flex
        borderRadius={10}
        backgroundColor={"black"}
        className={"statistics-container"}
        direction={"column"}
        w={"100%"}
      >
        <Flex direction={"column"} w={"100%"} mt={"3%"}>
          <Text
            textAlign={"center"}
            textColor={"white"}
            fontWeight={"bold"}
            fontSize={"60px"}
          >
            분야별 현황
          </Text>
        </Flex>

        <Flex direction="row" w="100%" h={"60vh"} mt={"3%"} mb={20}>
          <Flex flex={5}>
            <S_timeChart data={totalCount.detectedHourCountObj} />
          </Flex>
          <Flex flex={3} align={"center"} justify={"center"}>
            <Text textAlign={"right"} textColor={"lightgray"}>
              <Text fontSize={"2xl"} fontWeight={"bold"} textColor={"white"}>
                위반 시간의 누적치 현황
              </Text>
              <br />
              위반이 일어난 시간을 비교해보세요.
              <br />
              오전 10시부터 오후 22시까지의 정보를 담았고
              <br />
              각각 1시간 동안 일어난 위반 누적치를 나타냅니다.
              <br />
              그래프에 커서를 갖다대면 정확한 누적치를 확인할 수 있습니다.
              <br />
              <br />
              <br />
              어느 시간대에 가장 많은 위반이 일어났나요?
              <br />
            </Text>
          </Flex>
        </Flex>

        <Flex direction={"row"} h={"70vh"} mb={20} w={"100%"}>
          <Spacer />
          <Flex flex={5}>
            <Flex direction={"column"} justify={"center"} ml={20}>
              <Spacer />
              <Spacer />
              <Text textAlign={"left"} textColor={"lightgray"}>
                <Text fontSize={"2xl"} fontWeight={"bold"} textColor={"white"}>
                  지역별 위반 비율
                </Text>
                <br />
                위반이 일어난 지역의 비율을 확인해보세요.
                <br />
                그래프에 커서를 올리면 각 지역명과 함께 발생 건수를 확인할 수
                있습니다.
                <br />
                <br />
              </Text>
              <Spacer />
              <Text textAlign={"left"} textColor={"lightgray"}>
                <Text fontSize={"2xl"} fontWeight={"bold"} textColor={"white"}>
                  위반 종류별 비율
                </Text>
                <br />
                발생한 위반 사항의 비율을 확인해보세요.
                <br />
                헬멧 미착용, 2인 이상 탑승, 인도 주행 총 세 가지 위반을
                감지합니다.
                <br />
                그래프에 커서를 올리면 위반명과 함께 발생 건수를 확인할 수
                있습니다.
                <br />
                <br />
              </Text>
              <Spacer />
            </Flex>
          </Flex>
          <Spacer />
          <Flex
            mr={"3%"}
            direction="column"
            backgroundColor={"#111111"}
            borderRadius={"10px"}
            flex={4}
          >
            <Text
              mr={"7%"}
              pt={"6%"}
              fontSize={"28px"}
              textAlign={"right"}
              textColor={"white"}
            >
              지역 및 위반 종류별 비율
            </Text>
            <Flex direction={"column"} flex={2}>
              <Flex flex={1}>
                <S_regionChart data={totalCount.regionCountObj} />
              </Flex>

              <Flex flex={1}>
                <S_violationChart data={totalCount.violationCountObj} />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Text fontSize={"15px"} textAlign={"center"} textColor={"lightgray"}>
          {/* 누적 촬영 수 : {totalCount.detectedHourCountObj.} */}
        </Text>
        <Text ml={"5"} fontSize={"12px"} textAlign={"left"} textColor={"gray"}>
          참고: 통계치는 전날 자정을 기준으로 업데이트 됩니다.
        </Text>
      </Flex>
    </React.Fragment>
  );
}

export default Statistics;

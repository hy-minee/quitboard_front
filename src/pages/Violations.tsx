import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Flex,
  Text,
  Spacer,
  GridItem,
  Grid,
  Box,
  useBoolean,
} from "@chakra-ui/react";
import Radiogroup from "../components/CustomRadio";
import CustomRadio from "../components/CustomRadio";
import CardItem from "../components/Carditem";
import ViolationRadioGroup from "../components/CustomRadio";
import "./Violations.css";
import cardex from "../assets/images/cardex.png";
import Cardpage from "./Cardpage";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8000/api/v1"
      : "http://ec2-43-200-248-130.ap-northeast-2.compute.amazonaws.com/api/v1/",
  withCredentials: true,
});

interface Data {
  img: string;
  region: string;
  violation_list: string[];
  date: string;
}

function Violation() {
  //선택된 값을 받는 문자열 useState 생성
  const [selectedViolation, setSelectedViolation] = useState<string>("");
  const [selectedReady, setSelectedReady] = useState<string>("");
  const [data, setData] = useState<Data[]>([]);

  const [flag, setFlag] = useBoolean(false);

  const fetchData = () => {
    // 데이터를 받아오는 비동기 요청
    instance.get("violations/choice/violation").then((response) => {
      // 받아온 데이터 설정
      setData(response.data);
      console.log(data);
    });
  };

  // handleViolationChange 함수, Violation 선택이 바뀔 때마다 문자열 변경, 화면에서 사용자가 고른 위반 변경
  const handleViolationChange = (value: string) => {
    setSelectedReady(value);
  };

  //search 버튼 이벤트
  const handleSearch2 = () => {
    // 선택된 위반
    //const selectedViolationValue = selectedViolation;

    // 선택된 위반에 해당하는 데이터를 필터링
    //  const filteredData = rawData.filter((item) =>
    //    item.violation.includes(selectedViolationValue)
    //  );

    // 필터링된 데이터를 state에 저장
    // setData(filteredData);
    //setSelectedViolation(item);
    setSelectedViolation(selectedReady);
    fetchData();
    setFlag.on();
  };

  // const rawData = [
  //   {
  //     id: 1,
  //     region: "공대쪽문",
  //     violation: ["2인 이상 탑승", "헬멧 미착용"],
  //     date: "2023-04-29 10:00:00",
  //     image: "https://bit.ly/dan-abramov",
  //   },
  //   {
  //     id: 2,
  //     region: "example_region",
  //     violation: ["헬멧 미착용", "2인 이상 탑승", "인도 주행"],
  //     date: "2023-04-29 11:00:00",
  //     image: require("../assets/images/cardex.png"),
  //   },
  //   {
  //     id: 3,
  //     region: "인문대 3호관",
  //     violation: ["2인 이상 탑승"],
  //     date: "2023-04-29 12:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  //   {
  //     id: 4,
  //     region: "자연대 3호관",
  //     violation: ["인도 주행"],
  //     date: "2023-04-29 13:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  //   {
  //     id: 5,
  //     region: "공대7호관",
  //     violation: ["헬멧 미착용"],
  //     date: "2023-04-29 14:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  //   {
  //     id: 6,
  //     region: "기숙사9동",
  //     violation: ["인도 주행"],
  //     date: "2023-04-29 15:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  //   {
  //     id: 7,
  //     region: "공대7호관",
  //     violation: ["인도 주행"],
  //     date: "2023-04-29 16:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  //   {
  //     id: 8,
  //     region: "공대쪽문",
  //     violation: ["헬멧 미착용"],
  //     date: "2023-04-29 17:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  //   {
  //     id: 9,
  //     region: "인문대 3호관",
  //     violation: ["인도 주행"],
  //     date: "2023-04-29 18:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  //   {
  //     id: 10,
  //     region: "공대쪽문",
  //     violation: ["인도 주행"],
  //     date: "2023-04-29 19:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  //   {
  //     id: 11,
  //     region: "기숙사9동",
  //     violation: ["헬멧 미착용"],
  //     date: "2023-04-29 20:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  //   {
  //     id: 12,
  //     region: "공대7호관",
  //     violation: ["2인 이상 탑승"],
  //     date: "2023-04-29 21:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  //   {
  //     id: 13,
  //     region: "기숙사9동",
  //     violation: ["인도 주행"],
  //     date: "2023-04-29 22:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  // ];

  //서버에서 받은 데이터를 보내는 이벤트
  // const handleSearch1 = () => {
  //   //확인용 log
  //   console.log("Selected Violation:", selectedViolation);
  //   axios
  //     .get("http://127.0.0.1:8000/api/v1", {
  //       params: {
  //         locations: selectedViolation,
  //       },
  //     })
  //     .then((response) => {
  //       // 서버로부터 받아온 데이터를 처리하는 로직을 작성합니다.
  //       console.log(response.data);
  //     });
  // };

  return (
    <React.Fragment>
      <Flex className="whole" flexDirection={["column"]} w={"100%"} h={"100%"}>
        <Flex
          className="violations_top"
          direction={"column"}
          align={"center"}
          justify={"center"}
          w={"100%"}
          minH={"90vh"}
        >
          <Box w={"100%"}>
            <Flex direction={"column"} mb={"3%"}>
              <Text
                padding={"5"}
                textAlign={"center"}
                textColor={"black"}
                fontSize={"60px"}
                fontWeight={"bold"}
              >
                위반 항목 검색
              </Text>
              <Text textColor={"black"}>
                검색하고자 하는 위반 사진을 클릭하고 Search 버튼을 눌러보세요.
                위반 장면이 카드형태로 제공됩니다.
              </Text>
            </Flex>
          </Box>
          <Box w={"100%"}>
            <Flex direction="column" alignItems="center" mb={"2%"}>
              <ViolationRadioGroup onChange={handleViolationChange} />
              <Button
                onClick={handleSearch2}
                w={"10%"}
                size={"lg"}
                colorScheme="green"
                variant="solid"
                mt={4}
              >
                Search
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Spacer />
        {flag ? (
          <Cardpage
            url={`violations/choice/violation/${selectedViolation}`}
            key={selectedViolation}
          />
        ) : null}
      </Flex>
    </React.Fragment>
  );
}

export default Violation;

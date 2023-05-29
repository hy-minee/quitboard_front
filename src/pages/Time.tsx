import React from "react";
import { useState, useEffect } from "react";
import Calendar from "../components/Calendar";
import axios from "axios";
import {
  Image,
  Button,
  Flex,
  Text,
  Spacer,
  Box,
  GridItem,
  Grid,
  useBoolean,
} from "@chakra-ui/react";
import "./Time.css";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import CardItem from "../components/Carditem";
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

function Time() {
  const fetchData = (date: string) => {
    // 데이터를 받아오는 비동기 요청
    instance.get(`violations/choice/time/${date}`).then((response) => {
      // 받아온 데이터 설정
      setData(response.data);
      console.log(data);
    });
  };

  // 선택된 값을 받는 Date useState 생성
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [stringDate, setStringDate] = useState<string>("");
  const [data, setData] = useState<Data[]>([]);
  const [flag, setFlag] = useBoolean(false);
  const handleDateChange = (value: Date) => {
    setSelectedDate(value);
  };

  const handleSearch2 = () => {
    // 선택된 날짜
    const selectedDateString = format(selectedDate, "yyyy-MM-dd");
    setStringDate(selectedDateString);

    // // 선택된 날짜에 해당하는 데이터를 필터링
    // const filteredData = rawData.filter((item) =>
    //   item.date.startsWith(selectedDateString)
    // );
    fetchData(stringDate);
    // 필터링된 데이터를 state에 저장
    // setData(filteredData);
    setFlag.on();
  };

  const dateString = format(selectedDate, "yyyy-MM-dd");

  // const rawData = [
  //   {
  //     id: 1,
  //     region: "공대쪽문",
  //     violation: ["2인 이상 탑승", "인도 주행"],
  //     date: "2023-04-29 10:00:00",
  //     image: "https://bit.ly/dan-abramov",
  //   },
  //   {
  //     id: 2,
  //     region: "인문대 3호관",
  //     violation: ["헬멧 미착용"],
  //     date: "2023-04-29 11:00:00",
  //     image: "https://via.placeholder.com/300x200",
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
  //     violation: ["2인 이상 탑승", "인도 주행"],
  //     date: "2023-04-29 21:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  //   {
  //     id: 13,
  //     region: "기숙사9동",
  //     violation: ["인도 주행"],
  //     date: "2023-05-01 22:00:00",
  //     image: "https://via.placeholder.com/300x200",
  //   },
  // ];

  // const handleSearch1 = () => {
  //   //확인용 log
  //   console.log("Selected Date:", dateString);
  //   axios
  //     .get("http://127.0.0.1:8000/api/v1", {
  //       params: {
  //         locations: selectedDate,
  //       },
  //     })
  //     .then((response) => {
  //       // 서버로부터 받아온 데이터를 처리하는 로직을 작성합니다.
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       // 에러 처리 로직을 작성합니다.
  //       console.error(error);
  //     });
  // };

  return (
    <React.Fragment>
      <Flex className="whole" flexDirection={["column"]} w={"100%"} h={"100%"}>
        <Flex
          className="time_top"
          direction={"column"}
          align={"center"}
          justify={"center"}
          w={"100%"}
          minH={"90vh"}
        >
          <Flex direction={"column"} mb={"3%"}>
            <Text
              padding={"5"}
              textAlign={"center"}
              textColor={"white"}
              fontSize={"60px"}
              fontWeight={"bold"}
            >
              날짜 검색
            </Text>
            <Text textColor={"white"}>
              날짜를 입력하고 검색 버튼을 눌러보세요. 날짜와 일치하는 날의 위반
              장면을 시간 순서대로 카드 형식으로 제공합니다.
            </Text>
          </Flex>
          <Flex
            flexDirection={"row"}
            justify="center"
            align={"center"}
            h={"100%"}
            mb={"15%"}
          >
            <Box mr={"3%"}>
              <Calendar
                selectedDate={selectedDate}
                onChange={handleDateChange}
                showPopperArrow={false}
              />
            </Box>

            <Box>
              <Button
                onClick={handleSearch2}
                size={"lg"}
                colorScheme="green"
                variant="solid"
              >
                Search
              </Button>
            </Box>
          </Flex>
        </Flex>
        <Spacer />
        {flag ? (
          <Cardpage
            url={`violations/choice/time/${stringDate}`}
            key={stringDate}
          />
        ) : null}
      </Flex>
    </React.Fragment>
  );
}

export default Time;

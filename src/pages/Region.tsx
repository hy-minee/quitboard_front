import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useBoolean, Button, Spacer, Stack, useToast } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text, Image } from "@chakra-ui/react";
import jnumap from "../assets/images/jnumap.png";
import "./Region.css";
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

function Region() {
  // 선택된 값을 받는 문자열 useState 생성
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [data, setData] = useState<string[]>([]);

  const [flag, setFlag] = useBoolean(false);

  useEffect(() => {
    // 데이터를 받아오는 비동기 함수 호출
    fetchData();
  }, []);

  const fetchData = () => {
    // 데이터를 받아오는 비동기 요청
    instance.get("violations/choice/region").then((response) => {
      // 받아온 데이터 설정
      setData(response.data);
      console.log(data);
    });
  };

  const toast = useToast();

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

  return (
    <React.Fragment>
      <Flex className="whole" flexDirection={["column"]} w={"100%"} h={"100%"}>
        <Flex
          className="region_top"
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
              위치 검색
            </Text>
            <Text textColor={"white"}>
              하단의 원하는 지역 버튼을 클릭하시면 위반 장면이 카드형태로
              제공됩니다.
            </Text>
          </Flex>

          <Flex justifyContent="center" width={"100%"}>
            <Image
              ml={"25%"}
              mr={"15%"}
              src={jnumap}
              alt="map"
              style={{
                width: "30%",
                height: "30%",
              }}
            />
            <Spacer />
            <Flex mr={"25%"} direction={"column"} justify={"center"}>
              <Stack>
                {data.map((item) => (
                  <Button
                    size="lg"
                    width="300px"
                    height="55px"
                    colorScheme="whiteAlpha"
                    variant="solid"
                    onClick={() => {
                      setSelectedRegion(item);
                      setFlag.on();
                      toast({
                        status: "success",
                        title: "Complete!",
                        position: "bottom-right",
                        isClosable: true,
                      });
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
            </Flex>
          </Flex>
        </Flex>
        <Spacer />
        {flag ? (
          <Cardpage
            url={`violations/choice/region/${selectedRegion}`}
            key={selectedRegion}
          />
        ) : null}
      </Flex>
    </React.Fragment>
  );
}

export default Region;

import { Flex, Grid, GridItem } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItem from "../components/Carditem";

interface IItem {
  img: string;
  region: string;
  violation_list: string[];
  date: string;
}

interface IUrl {
  url: string;
}

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8000/api/v1"
      : "http://ec2-43-200-248-130.ap-northeast-2.compute.amazonaws.com/api/v1/",
  withCredentials: true,
});

function Cardpage({ url }: IUrl) {
  console.log(url);
  useEffect(() => {
    // 데이터를 받아오는 비동기 함수 호출
    console.log("패치 전");
    fetchData();
    console.log("패치 후");
  }, []);

  const [data, setData] = useState<[]>([]);

  const fetchData = () => {
    // 데이터를 받아오는 비동기 요청
    instance.get(url).then((response) => {
      // 받아온 데이터 설정
      setData(response.data);
    });
  };

  console.log(data);
  console.log(typeof data);
  return (
    <Flex>
      <Grid
        templateColumns="repeat(5, 1fr)" // 5열로 구성
        gap={10} // 카드 아이템 사이의 간격
        maxW="100%"
        mx="auto" // 가운데 정렬
      >
        {data.map((vio_info: IItem, index: number) => (
          <GridItem mb={10} mt={20} key={index} colSpan={1}>
            <CardItem data={vio_info} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}

export default Cardpage;

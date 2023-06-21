import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Stack } from "@chakra-ui/react";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8000/api/v1"
      : "http://ec2-43-200-248-130.ap-northeast-2.compute.amazonaws.com/api/v1/",
  withCredentials: true,
});

function RadioButtons() {
  const [data, setData] = useState([]);

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

  return (
    <Stack>
      {data.map((item, index) => (
        <Button
          size="lg"
          width="350px"
          height="70px"
          colorScheme="green"
          variant="solid"
        >
          {item}
        </Button>
      ))}
    </Stack>
  );
}

export default RadioButtons;

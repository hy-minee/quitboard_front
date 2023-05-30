import { Text, Box } from "@chakra-ui/react";
import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Chart.css";

interface STimeChartProps {
  data: { [key: string]: number };
}

// const data = [
//   { name: "~9:00", 누적치: 2400 },
//   { name: "~10:00", 누적치: 1398 },
//   { name: "~11:00", 누적치: 9800 },
//   { name: "~12:00", 누적치: 3908 },
//   { name: "~13:00", 누적치: 4800 },
//   { name: "~14:00", 누적치: 3800 },
//   { name: "~15:00", 누적치: 4300 },
//   { name: "~16:00", 누적치: 0 }, // Add more data for the remaining months
//   { name: "~17:00", 누적치: 0 },
//   { name: "~18:00", 누적치: 0 },
//   { name: "~19:00", 누적치: 0 },
//   { name: "~20:00", 누적치: 0 },
//   { name: "~21:00", 누적치: 0 },
// ];

export default class Example extends Component<STimeChartProps> {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  //useEffect(() => {
  // API 요청
  // axios
  //   .get("/api/v1/violations")
  //   .then((response) => {
  // 데이터 처리
  // 받아온 데이터를 차트 데이터 형식에 맞게 가공
  //     const chartData = response.data.map((item) => ({
  //       name: item.name,
  //       누적치: item.yesterdayValue,
  //       그제: item.beforeYesterdayValue,
  //     }));

  // 가공한 데이터를 상태로 설정
  //     setChartData(chartData);
  //    })
  //    .catch((error) => {
  //      console.error("Error fetching chart data:", error);
  //    });
  //}, []);

  convertData = (data: { [key: string]: number }) => {
    const convertedData: { name: string; 누적치: number }[] = [];

    for (let hour = 9; hour <= 21; hour++) {
      const count = data[hour.toString()] || 0;
      const convertedItem = {
        name: `~${hour}:00`,
        누적치: count,
      };
      convertedData.push(convertedItem);
    }

    return convertedData;
  };

  render(): JSX.Element {
    //const [chartTimeData, setChartTimeData] = useState([]);

    const { data } = this.props;
    const convertedData = this.convertData(data);

    console.log(convertedData);
    return (
      <Box
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          backgroundColor: "#111111",
          marginLeft: "3%",
        }}
      >
        <Text
          ml={"5%"}
          pt={"3%"}
          fontSize={"30px"}
          textAlign={"left"}
          textColor={"white"}
        >
          위반 시간 추이
        </Text>
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            width={500}
            height={300}
            data={convertedData}
            margin={{
              right: 30,
              left: 20,
              bottom: 15,
            }}
          >
            <XAxis padding={{ left: 30 }} axisLine={false} dataKey="name" />
            <YAxis padding={{ bottom: 20 }} axisLine={false} />
            <Tooltip />
            <Legend align="right" verticalAlign="top" />

            <defs>
              <linearGradient
                id="colorUv"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              ></linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C86DCE" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#C86DCE" stopOpacity={0} />
              </linearGradient>
            </defs>
            {/* <Area
              type="monotone"
              dataKey="누적치"
              stroke="#8884d8"
              fill="url(#colorUv)"
              activeDot={{ r: 8 }}
            /> */}
            <Area
              type="monotone"
              dataKey="누적치"
              stroke="#C86DCE"
              fill="url(#colorPv)"
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    );
  }
}

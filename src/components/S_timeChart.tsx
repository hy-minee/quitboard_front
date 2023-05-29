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

const data = [
  { name: "1", 그제: 4000, 어제: 2400 },
  { name: "2", 그제: 3000, 어제: 1398 },
  { name: "3", 그제: 2000, 어제: 9800 },
  { name: "4", 그제: 2780, 어제: 3908 },
  { name: "5", 그제: 1890, 어제: 4800 },
  { name: "6", 그제: 2390, 어제: 3800 },
  { name: "7", 그제: 3490, 어제: 4300 },
  { name: "8", 그제: 0, 어제: 0 }, // Add more data for the remaining months
  { name: "9", 그제: 0, 어제: 0 },
  { name: "10", 그제: 0, 어제: 0 },
  { name: "11", 그제: 0, 어제: 0 },
  { name: "12", 그제: 0, 어제: 0 },
];

export default class Example extends Component {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  //const [chartData, setChartData] = useState([]);

  //useEffect(() => {
  // API 요청
  // axios
  //   .get("/api/v1/violations")
  //   .then((response) => {
  // 데이터 처리
  // 받아온 데이터를 차트 데이터 형식에 맞게 가공
  //     const chartData = response.data.map((item) => ({
  //       name: item.name,
  //       어제: item.yesterdayValue,
  //       그제: item.beforeYesterdayValue,
  //     }));

  // 가공한 데이터를 상태로 설정
  //     setChartData(chartData);
  //    })
  //    .catch((error) => {
  //      console.error("Error fetching chart data:", error);
  //    });
  //}, []);

  render() {
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
            data={data}
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
            <Area
              type="monotone"
              dataKey="어제"
              stroke="#8884d8"
              fill="url(#colorUv)"
              activeDot={{ r: 8 }}
            />
            <Area
              type="monotone"
              dataKey="그제"
              stroke="#C86DCE"
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    );
  }
}

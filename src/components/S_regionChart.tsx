import React, { useEffect, useState, Component } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

interface RegionData {
  [key: string]: number;
}

interface ChartData {
  name: string;
  value: number;
}

const data01 = [
  { name: "공대7호관", value: 400 },
  { name: "공대쪽문", value: 300 },
  { name: "자연대 3호관", value: 300 },
  { name: "인문대 3호관", value: 200 },
  { name: "기숙사9동", value: 278 },
];

export default class Example extends Component {
  static demoUrl = "https://codesandbox.io/s/two-simple-pie-chart-otx9h";

  render() {
    //  const [chartData, setChartData] = useState<ChartData[]>([]);

    //useEffect(() => {
    // 서버에서 데이터 받아오기
    //  axios
    //    .get<{ regionCountObj: RegionData }>("/api/v1/violations")
    //    .then((response) => {
    // 받아온 데이터에서 regionCountObj 가져오기
    //      const regionData = response.data.regionCountObj;

    // 데이터 형식을 PieChart에 맞게 가공
    //      const chartData: ChartData[] = Object.entries(regionData).map(
    //        ([name, value]) => ({
    //          name,
    //          value,
    //        })
    //      );

    // 가공한 데이터를 상태로 설정
    //      setChartData(chartData);
    //    })
    //    .catch((error) => {
    //      console.error("Error fetching chart data:", error);
    //    });
    //}, []);
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#59B4F0"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

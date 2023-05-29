import React, { useEffect, useState, Component } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";

interface ViolationData {
  [key: string]: number;
}

interface ChartData {
  name: string;
  value: number;
}

const data01 = [
  { name: "헬멧 미착용", value: 400 },
  { name: "2인 이상 탑승", value: 300 },
  { name: "인도 주행", value: 300 },
];

export default class Example extends Component {
  static demoUrl = "https://codesandbox.io/s/two-simple-pie-chart-otx9h";

  render() {
    //  const [chartData, setChartData] = useState<ChartData[]>([]);

    //useEffect(() => {
    // 서버에서 데이터 받아오기
    //  axios
    //    .get<{ violationCountObj: ViolationData }>("/api/v1/violations")
    //    .then((response) => {
    // 받아온 데이터에서 violationCountObj 가져오기
    //      const violationData: ViolationData = response.data.violationCountObj;

    // 데이터 형식을 PieChart에 맞게 가공
    //      const chartData: ChartData[] = Object.entries(violationData).map(
    //        ([name, value]) => ({ name, value })
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
            fill="#ECDD57"
            label
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Chart.css";

function Chart() {
  const data = [
    {
      name: "2017년",
      Accidents: 117,
    },
    {
      name: "2018년",
      Accidents: 225,
    },
    {
      name: "2019년",
      Accidents: 447,
    },
    {
      name: "2020년",
      Accidents: 897,
    },
    {
      name: "2021년",
      Accidents: 1735,
    },
  ];
  return (
    <div className="chart">
      <h3 className="chartTitle">개인형 이동수단(PM) 사고 건수</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <BarChart
          data={data}
          width={150}
          height={40}
          margin={{
            top: 10,
            right: 70,
            left: 20,
            bottom: 0,
          }}
          barSize={50}
        >
          <XAxis dataKey="name" stroke="5550bd" />
          <YAxis dataKey="Accidents" />
          <Tooltip />

          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Accidents" fill="#8884d8"></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;

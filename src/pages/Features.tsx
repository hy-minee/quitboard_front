import React from "react";
import "./Features.css";
import withouthelmet from "../assets/images/withouthelmet.jpg";
import twopeople from "../assets/images/twopeople.jpg";
import sidewalk from "../assets/images/sidewalk.jpg";
import fallen from "../assets/images/fallen.jpeg";
import make from "../assets/images/make.jpg";
import Chart from "../components/Chart";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

function Features() {
  return (
    <React.Fragment>
      <Box className="feature-container">
        <Box className="video1">
          <video width={"100%"} autoPlay={true}>
            <source
              src={require("../assets/images/feature_video.mp4")}
              type="video/mp4"
            />
          </video>
        </Box>

        <Box className="feature1">
          <Box className="chartexplain" mb={"5%"}>
            QuitBoard는 이렇게 탄생했어요
          </Box>
          <Chart />
          <Flex
            direction={"row"}
            align={"center"}
            w={"100%"}
            mb={"20"}
            mt={"20"}
          >
            <Box className="featuresexplain1" flex={"1"}>
              <Text whiteSpace={"normal"}>
                도로교통공단에 따르면, 공유 킥보드의 대중화가 본격화되면서
                <br />
                개인형 이동 수단(PM)의 사용률이 급격히 늘었고
                <br />
                그에 따른 사고율 또한 함께 해마다 높아졌다고 합니다.
                <br />
                <br />
                도로교통공단 측은 개인형 이동 수단에 절대 두 명 이상 탑승해서는
                안 되며,
                <br />
                탑승 중 안전모를 착용하는 등 안전 법규에 대한 중요성을
                강조했습니다.
                <br />
                <br />
                하지만 길거리에선 위법 행위를 저지르는 이용자들을 여전히
                심심찮게 볼 수 있습니다.
                <br />
                <br />
                지난 2023년 2월, 서울시에서 개인형 이동장치에 대한
                <br />
                문제점 및 해결 방안 등 시민 의견을 정책에 반영하고자
                <br />
                3천여 명을 대상으로 설문조사를 진행하였습니다.
                <br />
                조사 결과 개인형 이동장치의 가장 큰 문제점은{" "}
                <strong style={{ color: "#E43D64" }}>'이용자 인식 부족'</strong>
                이라고 지적되었습니다.
                <br />
                <br />
                <br />
                그래서 우리는 생각했습니다.
              </Text>
            </Box>
            <Image src={fallen} flex={"1"} w={"45%"} mr={"3%"} />
          </Flex>
          <Box className="emphasis">
            "어떻게 킥보드 이용자들의 주행 위반 인식을 개선할 수 있을까?"
          </Box>
          <br />
          <br />
          <Flex direction={"row"} w={"100%"}>
            <Image src={make} objectFit={"contain"} w={"52%"} flex={"1"} />
            <Box className="featuresexplain2" flex={"1"}>
              <Text>
                위반 사항, 지역, 횟수 등을 수치화한 정보를 지속적으로
                공개함으로써
                <br />
                이용자의 자기반성을 통해 이용자의 인식변화에 기여할 수 있을
                것으로 기대하였고
                <br />
                그 결과 CCTV 기반으로 킥보드 불법 주행을 인식하는 비전 시스템을
                제작했습니다.
                <br />
                <br />
                QuitBoard는 딥러닝 기술을 사용해 불법 주행을 감지합니다.
                <br />
                <br />
                전남대학교 교내에서 어느 곳에서 가장 불법 주행이 많이 일어나는지
                <br />
                어느 시간대에, 어떤 불법 주행이 가장 많이 일어나는지에 대한
                <br /> <strong style={{ color: "#E43D64" }}>
                  통계치
                </strong>와 <strong style={{ color: "#E43D64" }}>검색</strong>{" "}
                기능을 제공합니다.
                <br />
                <br />
                내가 불법 주행을 하지는 않았는지 QuitBoard로 반성해 보는 것은
                어떤가요?
                <br />
                통계치가 점점 줄어나가는 것을 보면 나도 모르게 뿌듯함을 느낄 수
                있을 거예요
              </Text>
            </Box>
          </Flex>
          <Text
            fontSize={"25px"}
            textColor={"#006600"}
            fontWeight={"bold"}
            mb={"20"}
          >
            전남대학교 학우들과 함께 올바르고 안전한 킥보드 이용 문화를 만들어
            나가요!
          </Text>
          <Box className="detectionexplain" mt={"10%"}>
            이런 것을 감지해요
          </Box>
          <Box className="violation_ex_container">
            <Box className="violation_ex">
              <Box className="violation_ex_img_Box">
                <img src={withouthelmet} className="violation_ex_img" />
              </Box>
              <h5 className="violation_ex_title"> 헬멧 미착용</h5>
            </Box>
            <Box className="violation_ex">
              <Box className="violation_ex_img_Box">
                <img src={twopeople} className="violation_ex_img" />
              </Box>
              <h5 className="violation_ex_title"> 2인 이상 탑승</h5>
            </Box>
            <Box className="violation_ex">
              <Box className="violation_ex_img_Box">
                <img src={sidewalk} className="violation_ex_img" />
              </Box>
              <h5 className="violation_ex_title"> 인도 주행</h5>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default Features;

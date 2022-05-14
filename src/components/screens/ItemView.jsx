import React from "react";
import styled from "styled-components";
import SideBar from "../SideBar";
import IntroductoryVideo from "../IntroductoryVideo";
import Subfeatures from "../SubFeatures";
import CourseSpecs from "../CourseSpecs";
import Subscriptions from "../Subscriptions";
import Detailer from "../Detailer";
import { detail } from "../../data";

const Parent = styled.div`
  width: 100%;
  height: 100%;
`;

const SubParent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: yellow;
  flex-direction: row;
  @media (max-width: 1165px) {
    display: flex;
    flex-direction: column;
  }
`;

const SidebarDiv = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  backgroundcolor: #fff;
`;

const MainDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  margin-left: 50%;
  flex-direction: column;
  background: #fff;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1165px) {
    width: 100%;
    margin-left: 0;
    margin-top: 400px;
  }
  @media (max-width: 780px) {
    margin-top: 300px;
  }
  @media (max-width: 550px) {
    margin-top: 250px;
  }
`;

const StaticComponentsdiv = styled.div`
  width: 50%;
  height: 100%;
  background-color: blue;
  display: flex;
  position: fixed;
  flex-direction: row;
  overflow: hidden;
  @media (max-width: 1165px) {
    position: absolute;
    width: 100%;
    height: fit-content;
  }
`;

const Preview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const VideoBox = styled.div`
  width: 650px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 120px;
  margin-top: 30px;
  @media (max-width: 1596px) {
    width: 625px;
    height: 340px;
  }
  @media (max-width: 1490px) {
    width: 600px;
    height: 330px;
  }
  @media (max-width: 1446px) {
    width: 575px;
    height: 330px;
  }
  @media (max-width: 1395px) {
    width: 525px;
    height: 320px;
  }
  @media (max-width: 1365px) {
    margin-top: 50px;
    overflow: hidden;
  }
  @media (max-width: 1296px) {
    width: 500px;
    height: 300px;
  }
  @media (max-width: 1250px) {
    width: 475px;
    height: 280px;
    overflow: hidden;
  }
  @media (max-width: 1199px) {
    width: 450px;
    height: 260px;
    margin-bottom: 20px;
  }
  @media (max-width: 1165px) {
    width: 640px;
    height: 400px;
  }
  @media (max-width: 780px) {
    width: 480px;
    height: 320px;
    margin-right: 100px;
  }
  @media (max-width: 550px) {
    width: 400px;
    height: 270px;
    margin-right: 100px;
  }
  @media (max-width: 440px) {
    width: 350px;
    height: 240px;
    margin-right: 100px;
  }
`;

const FeatureContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  margin-top: 100px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-left: 140px;
  @media (max-width: 1490px) {
    margin-left: 110px;
  }
  @media (max-width: 1446px) {
    margin-left: 100px;
  }
  @media (max-width: 1395px) {
    margin-left: 80px;
  }
  @media (max-width: 1365px) {
    flex-direction: column;
    margin-left: 220px;
    margin-top: 4px;
  }
  @media (max-width: 1250px) {
    margin-left: 200px;
  }
  @media (max-width: 1165px) {
    display: none;
  }
`;

const FeatureBox = styled.div`
  width: fit-content;
  height: 50%;
  display: flex;
  margin: 10px;
  flex-direction: column;
  background-color: #fff;
  justify-content: space-around;
  align-items: center;
  row-gap: 20px;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  font: "Poppins", sans-serif;
  text-align: center;
  margin-top: 80px;
`;

const HeadBox = styled.div`
  width: 90%;
  height: fit-content;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  font-size: 24px;
  font-weight: bold;
  font: "Poppins", sans-serif;
  @media (max-width: 1340px) {
    width: 550px;
  }
  @media (max-width: 1166px) {
    width: 500px;
  }
  @media (max-width: 1165px) {
    width: 80%;
  }
  @media (max-width: 440px) {
    width: 90%;
  }
`;

const TextBox = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: justify;
  color: #9e9e9e;
  @media (max-width: 1340px) {
    width: 90%;
  }
  @media (max-width: 1166px) {
    width: 80%;
  }
  @media (max-width: 1165px) {
    width: 80%;
  }
  @media (max-width: 440px) {
    width: 90%;
  }
`;

const CourseSpecsContainer = styled.div`
  width: 600px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1165px) {
    width: 80%;
    justify-content: flex-start;
    column-gap: 20px;
  }
  @media (max-width: 620px) {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
  @media (max-width: 440px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;

const CourseSubscriptionContainer = styled.div`
  width: 600px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1165px) {
    width: 80%;
    justify-content: flex-start;
    column-gap: 20px;
  }
  @media (max-width: 620px) {
    width: 60%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
  @media (max-width: 440px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-start;
  }
`;

const DetailContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
    margin-left: -250px;
    margin-top: 15px;
  }
  @media (max-width: 1320px) {
    margin-left: -200px;
    margin-top: 7px;
  }
  @media (max-width: 1165px) {
    margin-left: -20%;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1120px) {
    margin-left: -15%;
  }
  @media (max-width: 1040px) {
    margin-left: -10%;
  }
  @media (max-width: 975px) {
    margin-left: -8%;
  }
  @media (max-width: 941px) {
    margin-left: 0%;
  }
  @media (max-width: 880px) {
    margin-left: 8%;
  }
  @media (max-width: 815px) {
    grid-template-columns: 1fr;
    margin-left: -10%;
  }
  @media (max-width: 440px) {
    margin-left: -2%;
  }
`;

function ItemView({ heading, dis50, discription }) {
  return (
    <Parent>
      <SubParent>
        <StaticComponentsdiv>
          <SidebarDiv>
            <SideBar />
          </SidebarDiv>
          <Preview>
            <VideoBox>
              <IntroductoryVideo />
            </VideoBox>
            <FeatureContainer>
              <FeatureBox>
                <Subfeatures
                  text={"55+ Hrs. of on Demand Video Content"}
                  iconNumber={1}
                />
                <Subfeatures text={"25+ Assesments"} iconNumber={2} />
              </FeatureBox>
              <FeatureBox>
                <Subfeatures text={"Self Paced"} iconNumber={3} />
                <Subfeatures text={"Community Support"} iconNumber={4} />
              </FeatureBox>
            </FeatureContainer>
          </Preview>
        </StaticComponentsdiv>
        <MainDiv>
          <HeadBox style={{ marginTop: "0px" }}>
            <Heading> {heading} </Heading>
          </HeadBox>
          <TextBox>{dis50}</TextBox>
          <HeadBox>Course Specs</HeadBox>
          <CourseSpecsContainer>
            <CourseSpecs text={"BEGINNER LEVEL"} iconNumber={1} />
            <CourseSpecs text={"APPROX. 63 HRS"} iconNumber={2} />
            <CourseSpecs text={"COMPETETIVE LEARNING"} iconNumber={3} />
            <CourseSpecs text={"TOPIC QUIZES"} iconNumber={4} />
            <CourseSpecs text={"CERTIFICATE AFTER COMPLETION"} iconNumber={5} />
          </CourseSpecsContainer>
          <HeadBox>Subscriptions</HeadBox>
          <CourseSubscriptionContainer>
            <Subscriptions
              background={"linear-gradient(180deg, #31C575 0%, #00AFBA 100%)"}
              subname={"ASPIRE"}
              price={"24"}
              month={"12"}
              hoverColor={"#00AFBA"}
            />
            <Subscriptions
              background={
                "linear-gradient(180deg, #FF7A00 0%, #FE5858 0.01%, #EE9617 100%)"
              }
              subname={"BASE"}
              price={"16"}
              month={"6"}
              hoverColor={"#EE9617"}
            />
            <Subscriptions
              background={"linear-gradient(180deg, #DC42BA 0%, #9B25C5 100%);"}
              subname={"CONCENTRATE"}
              price={"30"}
              month={"24"}
              hoverColor={"#9B25C5"}
            />
          </CourseSubscriptionContainer>
          <HeadBox> Course Discription</HeadBox>
          <TextBox>{discription}</TextBox>
          <HeadBox>Course Details</HeadBox>
          <DetailContainer>
            {detail.map((item, index) => (
              <Detailer
                key={item.id}
                heading={item.heading}
                readings={item.readings}
                tests={item.tests}
                videos={item.videos}
                cardColor={item.cardColor}
                cardNo={item.cardNo}
                time={item.time}
              />
            ))}
          </DetailContainer>
          <HeadBox></HeadBox>
        </MainDiv>
      </SubParent>
    </Parent>
  );
}

export default ItemView;

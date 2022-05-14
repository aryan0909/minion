import React from "react";
import styled from "styled-components";
import { BsBarChartFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import { GiLaurelsTrophy } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";

const Card = styled.div`
  width: 91px;
  height: 133px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #dfdfdf;
  ${"" /* box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25); */}
  border-radius: 10px;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-top: 15px;
  font-family: Poppins, sans-serif;
`;

function CourseSpecs({ text, iconNumber }) {
  const number = iconNumber;
  return (
    <>
      <Card>
        {number === 1 ? <BsBarChartFill size={30} color="#FFD233" /> : null}
        {number === 2 ? (
          <AiOutlineClockCircle size={30} color="#FFD233" />
        ) : null}
        {number === 3 ? <FaUserGraduate size={30} color="#FFD233" /> : null}
        {number === 4 ? <MdOutlineQuiz size={30} color="#FFD233" /> : null}
        {number === 5 ? <GiLaurelsTrophy size={30} color="#FFD233" /> : null}
        <Text>{text}</Text>
      </Card>
    </>
  );
}

export default CourseSpecs;

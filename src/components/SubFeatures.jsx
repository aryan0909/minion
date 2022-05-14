import React from "react";
import styled from "styled-components";
import { RiVideoFill } from "react-icons/ri";
import { SiQuicktime } from "react-icons/si";
import { SiApplearcade } from "react-icons/si";
import { MdPeople } from "react-icons/md";

const Card = styled.div`
  width: 284px;
  height: 82px;
  background: #f6f6f6;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconBox = styled.div`
  width: 50px;
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
const TextBox = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

function SubFeatures({ text, iconNumber }) {
  return (
    <Card>
      <IconBox>
        {iconNumber === 1 ? <RiVideoFill size={40} color="#F24E1E" /> : null}
        {iconNumber === 2 ? <SiQuicktime size={40} color="#4ECB71" /> : null}
        {iconNumber === 3 ? <SiApplearcade size={40} color="#9747FF" /> : null}
        {iconNumber === 4 ? <MdPeople size={40} color="#FFC700" /> : null}
      </IconBox>
      <TextBox>{text}</TextBox>
    </Card>
  );
}

export default SubFeatures;

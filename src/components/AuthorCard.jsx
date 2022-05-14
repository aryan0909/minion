import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 591px;
  height: 307px;
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  border-radius: 30px;
`;

const Header = styled.div`
  width: 589px;
  height: 104px;
  background: #f8f8f8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
  border-radius: 30px 30px 0px 0px;
`;

const NameConatainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Designation = styled.h3`
  font-family: "poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
`;

const Name = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: black;
`;

function AuthorCard(props) {
  return (
    <Card>
      <Header>
        <NameConatainer>
          <Name>Glenn Mc'Gearth</Name>
          <Designation>
            Head of the Department of Algorithmic Science, Princeton University
          </Designation>
        </NameConatainer>
      </Header>
    </Card>
  );
}

export default AuthorCard;

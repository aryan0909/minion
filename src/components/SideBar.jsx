import React from "react";

import styled from "styled-components";

import { MdSpaceDashboard } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { MdCategory } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { HiMenu } from "react-icons/hi";

const SideBarContainer = styled.div`
  width: 71px;
  height: 100%;
  background-color: #00375f;
  position: fixed;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  @media (max-width: 769px) and (min-width: 320px) {
    width: 35px;
    height: 35px;
    background-color: #f5f5f5;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 10px;
    left: 10px;
  }
  @media (max-width: 1596px) and (min-width: 768px) {
    display: none;
  }
`;

const Container1 = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container2 = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Container3 = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  background-color: green;
`;

const MenuContainer = styled.div`
  width: 36px;
  height: 36px;
  left: 17px;
  top: 205px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #006b8d;
  box-shadow: inset 4px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const ProfilePhoto = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("/student.jpg");
  background-size: cover;
  background-position: center;
`;

function SideBar(props) {
  return (
    <>
      <Hamburger>
        <HiMenu size={30} color="gray" />
      </Hamburger>
      <SideBarContainer>
        <Container1>
          <Circle />
        </Container1>
        <Container2>
          <MenuContainer>
            <MdSpaceDashboard size={25} color="white" />
          </MenuContainer>
          <MenuContainer>
            <FiSearch size={25} color="white" />
          </MenuContainer>
          <MenuContainer>
            <MdCategory size={25} color="white" />
          </MenuContainer>
          <MenuContainer>
            <RiShoppingCartLine size={25} color="white" />
          </MenuContainer>
          <MenuContainer>
            <IoIosSettings size={25} color="white" />
          </MenuContainer>
        </Container2>
        <Container3>
          <Circle>
            <ProfilePhoto />
          </Circle>
        </Container3>
      </SideBarContainer>
    </>
  );
}

export default SideBar;

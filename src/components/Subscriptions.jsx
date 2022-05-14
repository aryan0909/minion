import React from 'react';
import styled from 'styled-components';



const Card = styled.div`
    width: 154px;
    height: 184px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border:none;
    //changing background according to the props
    background: ${props => props.background};
    border-radius: 19px;
    font-family: 'Poppins', sans-serif;
`;
const TextBox = styled.div`
    width:80%;
    height:20%;
    text-align: left;
    flex-direction: column;
    font-size: 15px;
    color : white;
`;
const Button = styled.button`
    width: 120px;
    height: 32px;
    border: 2px solid #FFE9E9;
    box-sizing: border-box;
    border-radius: 100px;
    cursor: pointer;
    color: white;
    user-select: none;
    font-size: 17.5px;
    background: none;
    :hover{
        background: #FFE9E9; ;
        //changing color with props
        color: ${props => props.hoverColor};
    }
`;


function Subscriptions({ background, subname, price, month, hoverColor }) {
    return (
        <Card background={background}>
            <TextBox>
               {subname}
                <p>
                ${price} / {month} Months
                </p>
            </TextBox>    
            <Button hoverColor={hoverColor}>
                SUBSCRIBE
            </Button>
        </Card>
    );
}

export default Subscriptions;
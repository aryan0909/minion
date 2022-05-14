import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 330px;
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #F7F7F7;
    border-radius: 15px;
    padding-left: 0.5em;
    padding-right: 0.5em;
`;
const CardNo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    background: ${props => props.cardColor};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Circle = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #EEEEEE;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TextBox = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Heading = styled.h1`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: bold;
    font: 'Poppins', sans-serif;
    line-height: 22.5px;
`;

const Text = styled.p`
    font-size: 15px;
    color: #969696;
    font: 'Poppins', sans-serif;
    font-weight: normal;
`;

function Detailer({cardNo, videos, readings, tests, heading, cardColor, time}) {
    return (
        <Card>
            <CardNo cardColor={cardColor}>
                {cardNo}
            </CardNo>
            <TextBox>
                <Heading>{heading}</Heading>
                <Text>{videos} Videos, {readings} Readings, {tests} Tests</Text>
            </TextBox>
            <Circle style={{overflow: 'hidden'}}>
                <Text>
                    {time}hr
                </Text>
            </Circle>
        </Card>
    );
}

export default Detailer;
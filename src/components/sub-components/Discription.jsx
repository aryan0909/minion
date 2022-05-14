import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    width: 513px;
    height: fit-content;
    text-align: justify;
    text-justify: inter-word;
`;

const Para = styled.p`
    font-size: 20px;
    font-weight: normal;
    font-family: 'Raleway', sans-serif;
    font-family: 'Sora', sans-serif;
    line-height: 21.13px;
    color: #9E9E9E;
`;

function Discription(props) {
    return (
        <Box>
            <Para>{props.discription}</Para>
        </Box>
    );
}

export default Discription;
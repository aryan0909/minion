import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: 24px;
    font-weight: bold;
    font: 'Poppins', sans-serif;
`;

function SubHeading(props) {
    return (
        <Heading>{props.text}</Heading>
    );
}

export default SubHeading;
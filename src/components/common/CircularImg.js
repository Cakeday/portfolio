import React from 'react';
import styled from 'styled-components'

const Span = styled.span`
    display: inline-block;
    position: relative;
    margin-left: 5em;
    border: 1px solid #dddddd;
    padding: 0.65em;
    border-radius: 50%;
`

const Img = styled.img`
    display: block;
    border-radius: 50%;
    width: 20em;
`

const CircularImg = ({ source }) => {

    return (
        <Span>
            <Img src={source} />
        </Span>
    );
}

export default CircularImg;

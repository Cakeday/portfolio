import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    padding: 1em 0em 3em;
`

const Line = styled.div`
    height: 2px;
    width: 150px;
    background: rgb(153,51,255);
    background: linear-gradient(230deg, rgba(153,51,255,1) 20%, rgba(0,204,255,1) 81%);

    margin: ${props => props.justifyLeft ? "0px" : "0px auto"};
`

const GradientLine = (props) => {
    return (
        <Container>
            <Line {...props} />
        </Container>
    );
}

export default GradientLine;

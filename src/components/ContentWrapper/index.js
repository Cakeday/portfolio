import React from 'react';
import { Container, ContentWrapper } from './ContentWrapper'
import { Transition } from "./GradientTransition";

const index = ({ children }) => {
    return (
        <Container>
            <Transition />
            <ContentWrapper>
                { children }
            </ContentWrapper>
        </Container>
    );
}

export default index;

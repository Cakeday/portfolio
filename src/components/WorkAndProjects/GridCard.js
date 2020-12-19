import React from 'react';
import styled from 'styled-components'

import CircularImg from '../common/CircularImg'

const Card = styled.div`
    text-align: center;
`

const Heading = styled.h3``

const Role = styled.h5`
`

const Description = styled.p``

const GridCard = (props) => {
    const { image, title, role, description } = props

    return (
        <Card>

            <CircularImg source={image} />

            <Heading>{title}</Heading>

            <Role>{role}</Role>

            <Description>
                {description}
            </Description>

        </Card>
    );
}

export default GridCard;

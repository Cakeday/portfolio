import React from 'react'
import { ParticleCanvas } from './Particles';
import styled from 'styled-components'


const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: whitesmoke; */

    #tsparticles {
        height: 100%;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-self: center;
    position: absolute;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 30px 60px white;
    white-space: 'no-wrap';
`

const Heading = styled.h1`
    text-align: center;
    align-self: center;
`

const SubHeading = styled.h3`
    text-align: center;
    align-self: center;
`

const Button = styled.div`
    text-align: center;
    align-self: center;
    display: inline-block;
    height: 38px;
    padding: 0 30px;
    color: #555;
    text-align: center;
    font-size: 11px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: .1rem;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #bbb;
    cursor: pointer;
    box-sizing: border-box; 

    transition: color .4s, background-color .4s;

    &:hover {
        background-color: #00ccff;
        color: whitesmoke;

        > span {
            transform: rotate(1485deg);
            border-color: whitesmoke;
        }
    }

`

const Arrow = styled.span`
    margin-left: 5px;
    border: solid #555;
    border-radius: 1px;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    transition: transform 1s, border-color .4s;
`

const Hero = () => {

    return (
        <Container>

            <ParticleCanvas />

            <Content>
                <Heading>
                    Hello World, I'm Caleb Reyes.
                    <br />
                    <SubHeading>I'm a Full Stack Software Engineer.</SubHeading>
                </Heading>
                <Button>
                    Check out my work
                    <Arrow />
                </Button>
            </Content>

        </Container>
    )
}

export default Hero
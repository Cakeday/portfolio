import React from 'react'
import Container from 'react-bootstrap/Container'
import { ParticleCanvas } from './Particles';





export function Hero() {

    const style = {
        'background-image': 'radial-gradient(rgba(248, 249, 250, 1), rgba(248, 249, 250, 0))',
        'white-space': 'no-wrap'
    }



    return (
        <Container className="vh-100 d-flex flex-column justify-content-center bg-light position-relative" fluid>
            <ParticleCanvas></ParticleCanvas>
            <h1 style={style} className="text-center align-self-center position-absolute align-middle">Hello World,<br></br>I'm Caleb</h1>
        </Container>
    )
}


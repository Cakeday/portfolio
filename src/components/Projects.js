import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'




export function Projects() {
    return (
        <Container fluid className="vh-100 bg-dark">
        
            <Carousel className="h-100 w-100 justify-content-center">

                <Carousel.Item className="h-100">
                    <div className="d-flex align-items-center justify-content-center flex-column vh-100">
                        <h1 className="text-center text-light">Soundscape</h1>
                        <Carousel.Caption>
                            <p className="text-light">A music creation app that allows you to tweak your own synthesizer and make some funky beats :)</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="h-100">
                    <div className="d-flex align-items-center justify-content-center flex-column vh-100">
                        <h1 className="text-center text-light">Circles (Coming Soon)</h1>
                        <Carousel.Caption>
                            <p className="text-light">A social media app that connects people based off of social circles</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item className="h-100">
                    <div className="d-flex align-items-center justify-content-center flex-column vh-100">
                        <h1 className="text-center text-light">Cards Against Humanity (Coming Soon)</h1>
                        <Carousel.Caption>
                            <p className="text-light">A real-time card game app that allows players to play Cards Against Humanity in realtime... with a few extra rules :)</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

            </Carousel>
        </Container>
    )
}
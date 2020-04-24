import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo1 from './LI-In-Bug.png'
import logo2 from './GitHub-Mark-Light-120px-plus.png'
import logo3 from './email.png'

export function Contact() {

    const style = {
        'top': '50px'
    }

    return (
        <Container fluid className="bg-dark vh-100 flex-column justify-content-center align-items-center d-flex">
            <Row className="mb-4">
                <Col>
                    <h1 className="text-light text-center">Contact me!</h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-around mt-4" fluid>
                <Col xs={4} md={1} className="position-relative" style={{'left': '7px'}}>
                    <a href="https://www.linkedin.com/in/calebreyes/"><img src={logo1} alt="LinkedIn Icon" className="mw-100"></img></a>
                </Col>
                <Col xs={4} md={1} className="position-relative" style={style}>
                    <a href="https://github.com/Cakeday"><img src={logo2} alt="Github Icon" className="mw-100"></img></a>
                </Col>
                <Col xs={4} md={1}>
                    <a href="mailto:caleb.reyes.webdev@gmail.com"><img src={logo3} alt="Email Icon" className="mw-100"></img></a>
                </Col>
            </Row>
        </Container>
    )
}
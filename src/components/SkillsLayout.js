import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { FrontEnd, BackEnd, Database } from './SkillCards'


export function Skills() {


    return (
        <Container fluid className="vh-100 bg-light">
            <h1 className="text-center pt-4">Things I'm good at</h1>
            <Row className="justify-content-center">
                <Col md={5}>
                    <FrontEnd></FrontEnd>
                </Col>
                <Col md={5}>
                    <BackEnd></BackEnd>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={5}>
                    <Database></Database>
                </Col>
            </Row>



        </Container>
    )
}
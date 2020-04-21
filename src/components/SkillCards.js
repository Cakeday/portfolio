import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'





export function FrontEnd() {
    return (
        <Accordion>
            <Card className="shadow-sm">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h3 className="text-center">Front-End</h3> 
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>This is the body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}


export function BackEnd() {
    return (
        <Accordion>
            <Card className="shadow-sm">
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h3 className="text-center">Server-Side</h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>This is the body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export function Database() {
    return (
        <Accordion>
            <Card className="shadow-sm mt-md-4">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h3 className="text-center">Database</h3>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>This is the body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'






export function FrontEnd() {
    return (
        <Accordion>
            <Card className="shadow-sm">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h3 className="text-center">Front-End</h3> 
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <ListGroup variant="flush">
                            <h5>Languages</h5>
                            <ListGroup.Item>HTML5</ListGroup.Item>
                            <ListGroup.Item>CSS3</ListGroup.Item>
                            <ListGroup.Item>Javascript (ES6 & Typescript)</ListGroup.Item>
                            <h5 className="pt-4">Frameworks</h5>
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>Angular 7</ListGroup.Item>
                            <ListGroup.Item>Bootstrap</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
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
                    <Card.Body>
                        <ListGroup variant="flush">
                            <h5>Languages</h5>
                            <ListGroup.Item>Javascript</ListGroup.Item>
                            <ListGroup.Item>Python</ListGroup.Item>
                            <ListGroup.Item>Java</ListGroup.Item>
                            <h5 className="pt-4">Frameworks</h5>
                            <ListGroup.Item>Node</ListGroup.Item>
                            <ListGroup.Item>Django</ListGroup.Item>
                            <ListGroup.Item>Flask</ListGroup.Item>
                            <ListGroup.Item>Spring Boot</ListGroup.Item>
                            <ListGroup.Item>Flask</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
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
                    <Card.Body>
                        <ListGroup variant="flush">
                            <h5>SQL</h5>
                            <ListGroup.Item>MySQL</ListGroup.Item>
                            <ListGroup.Item>SQLite</ListGroup.Item>
                            <h5 className="pt-4">NoSQL</h5>
                            <ListGroup.Item>MongoDB</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
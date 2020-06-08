import React from 'react'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Joke(props) {
    // console.log(props)
    return (
        <div className="container">
            <Container>
                    <Row xs={2} md={4} lg={6}>
                        <Col>ID: {props.id}</Col>
                        <Col>Category: {props.categories}</Col>
                    </Row>
                    <Row>
                        <Col>{props.joke}</Col>
                    </Row>
                </Container>
        </div>
    )
}

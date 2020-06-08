import React from 'react'
import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Jokes({ jokes }) {
    // console.log(jokes)
    return (
        <div>
        {jokes.map(joke => {
            return (
                <Container key={joke.id}>
                    <Row xs={2} md={4} lg={6}>
                        <Col>ID: {joke.id}</Col>
                        <Col>Category: {joke.categories}</Col>
                    </Row>
                    <Row>
                        <Col>{joke.joke}</Col>
                    </Row>
                </Container>
            )
        })}
        </div>
    )
}

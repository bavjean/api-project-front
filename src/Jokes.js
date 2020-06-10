import React from 'react'
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom'

export default function Jokes({ jokes }) {
    // console.log(jokes)

    return (
        <div>
        {jokes.map(joke => {
            return (
                <Container key={joke.id}>
                    <Card>
                        <Card.Body>
                        <Card.Title>{joke.id}</Card.Title>
                            <Card.Text>
                                {joke.joke}
                            </Card.Text>
                        </Card.Body>
                        <Link to={ '/joke/' + joke.id}>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                        </Link>
                    </Card>
                </Container>
            )
        })}
        </div>
    )
}

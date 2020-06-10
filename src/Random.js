import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom'

export default class Random extends Component {
  constructor() {
    super();

    this.state = {
      joke: [],
    };
  }

  componentDidMount() {
    let url = "https://whispering-meadow-11234.herokuapp.com/random";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ joke: data });
      });
  }

  render() {
    console.log(this.state.joke);
    return (
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>{this.state.joke.id}</Card.Title>
            <Card.Text>{this.state.joke.joke}</Card.Text>
          </Card.Body>
          <Link to={"/joke/" + this.state.joke.id}>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Link>
        </Card>
      </Container>
    );
  }
}

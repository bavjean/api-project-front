import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    console.log(this.state.joke)
    return (
      <Container>
        <Row xs={2} md={4} lg={6}>
          <Col>Id: {this.state.joke.id}</Col>
          <Col>Category: {this.state.joke.categories}</Col>
        </Row>
        <Row>
          <Col>{this.state.joke.joke}</Col>
        </Row>
      </Container>
    );
  }
}

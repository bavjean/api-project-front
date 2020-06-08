import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      joke: []
    }
  }

  componentDidMount() {
    let url =
      "https://whispering-meadow-11234.herokuapp.com/random";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ joke: data });
      });
  }

  render() {
    console.log(this.state.joke)
  return (
    <>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="/">Chuck Norris</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/random">Random Joke</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
          <Form inline>
      <FormControl type="text" placeholder="Search by Id" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
  }
}

export default App;

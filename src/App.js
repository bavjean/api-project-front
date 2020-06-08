import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Header from "./Header"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
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
    console.log(this.state)
  return (
    <>
      {/* <Header /> */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Chuck Norris</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Random">Random Joke</Nav.Link>
            <Nav.Link href="/Create">Create</Nav.Link>
            <Nav.Link href="/Read">Read</Nav.Link>
            <Nav.Link href="/Update">Update</Nav.Link>
            <Nav.Link href="/Delete">Delete</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
  }
}

export default App;

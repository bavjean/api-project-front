import React from "react";
import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default function NavBar() {
let history = useHistory();
  const formik = useFormik({
    initialValues: {
      id: "",
    },
    onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // console.log(values.id)
    let path = `/joke/${values.id}`;
    history.push(path);
    },
  });

  return (
    <>
      <Navbar sticky="top" bg="light" expand="sm">
        <Navbar.Brand href="/">Chuck Norris Jokes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/random">Random Joke</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
          <Form inline onSubmit={formik.handleSubmit}>
          <Form.Group controlId="id">
            <FormControl
              type="text"
              placeholder="Search by Id"
              className="mr-sm-2"
              onChange={formik.handleChange}
              value={formik.values.id}
            />
        </Form.Group>
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

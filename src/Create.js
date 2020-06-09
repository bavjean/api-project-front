import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from 'formik'

export default function Create() {
    const axios = require('axios')
    
    const formik = useFormik({
        initialValues: {
          id: '',
          joke: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          axios({
            method: 'post',
            url: 'https://whispering-meadow-11234.herokuapp.com/jokes',
            data: {
              id: values.id,
              joke: values.joke
            }
          });
        },
      });

  return (
      <div className="container">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="id">
            <Form.Label>Id</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="ID number" 
            onChange={formik.handleChange}
            value={formik.values.id}
            />
          </Form.Group>

          <Form.Group controlId="joke">
            <Form.Label>Joke</Form.Label>
            <Form.Control 
            as="textarea" 
            rows="3"
            placeholder="Enter joke"
            onChange={formik.handleChange}
            value={formik.values.joke}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
  );
}

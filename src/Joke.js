import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import axios from "axios"

export default function Joke(props) {
  console.log(props)

  const formik = useFormik({
    initialValues: {
      id: props.id,
      joke: props.joke,
    },
    onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    console.log(props)
      update()
      .then(() => window.location.reload(true))
    },
  });

  const update = () => {
    return axios({
        method: "put",
        url: `https://whispering-meadow-11234.herokuapp.com/jokes/${props.id}`,
        data: {
          id: formik.values.id,
          joke: formik.values.joke,
        },
      })
  }

  const deleteJoke = () => {
    return axios({
        method: "delete",
        url: `https://whispering-meadow-11234.herokuapp.com/jokes/${props.id}`,
      }).then(() => window.location.reload(true))
  }

  return (
    <div className="container">
      <Container>
        {/* <Row xs={2} md={4} lg={6}>
          <Col>Id: {props.id}</Col>
          <Col>Category: {props.categories}</Col>
        </Row>
        <Row>
          <Col>{props.joke}</Col>
        </Row> */}
        <Card>
                        <Card.Body>
                        <Card.Title>{props.id}</Card.Title>
                            <Card.Text>
                                {props.joke}
                            </Card.Text>
                        </Card.Body>
                    </Card>
      </Container>
      <Form onSubmit={formik.handleSubmit}>

        <Form.Group controlId="joke">
          <Form.Label>Update Joke</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder={props.joke}
            onChange={formik.handleChange}
            value={formik.values.joke}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
      <Button variant="danger" type="button" onClick={deleteJoke}>
          Delete
        </Button>
    </div>
  );
}

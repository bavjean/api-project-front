import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Create() {
  return (
      <div className="container">
        <Form>
          <Form.Group controlId="formBasicId">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="ID number" />
            {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Joke</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
  );
}

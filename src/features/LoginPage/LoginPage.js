import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Label, Input } from "reactstrap";
import "./LoginStyle.css";

function LoginPage() {
  return (
    <div className="LoginPage">
      <Container className="cover">
        <div className="left"></div>
        <div className="right">
          <h2 className="text-center pb-4">Sign In</h2>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input id="exampleEmail" name="email" placeholder="Input your email" type="email" />
              <Label for="examplePassword">Password</Label>
              <Input id="examplePassword" name="password" placeholder="Input your password" type="password" />
            </FormGroup>
          </Form>
          <Button className="mb-2" color="warning" type="submit">
            Sign Up
          </Button>
          <small className="text-center">
            Don't have any account?
            <Link style={{ textDecoration: "none", color: "orange" }}>
              <b> Sign up</b>
            </Link>
          </small>
        </div>
      </Container>
    </div>
  );
}

export default LoginPage;

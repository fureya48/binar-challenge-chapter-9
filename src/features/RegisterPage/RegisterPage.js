import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Label, Input } from "reactstrap";
import "./RegisterStyle.css";

function RegisterPage() {
  return (
    <div className="RegisterPage">
      <Container className="cover">
        <div className="left"></div>
        <div className="right">
          <h2 className="text-center pb-4">Create Account</h2>
          <Form>
            <FormGroup>
              <Label>Full Name</Label>
              <Input name="fullName" placeholder="Input your first name" type="text" />
              <Label for="exampleEmail">Email</Label>
              <Input id="exampleEmail" name="email" placeholder="Input your email" type="email" />
              <Label for="examplePassword">Password</Label>
              <Input id="examplePassword" name="password" placeholder="Input your password" type="password" />
              <Label for="examplePassword">Re-Password</Label>
              <Input id="examplePassword" name="rePassword" placeholder="Retype your password" type="password" />
              <Label>Date of Birth</Label>
              <Input name="DOB" type="date" />
            </FormGroup>
          </Form>
          <Button className="mb-2" color="warning" type="submit">
            Sign Up
          </Button>
          <small className="text-center">
            Already have an account?
            <Link style={{ textDecoration: "none", color: "orange" }}>
              <b> Sign in</b>
            </Link>
          </small>
        </div>
      </Container>
    </div>
  );
}

export default RegisterPage;

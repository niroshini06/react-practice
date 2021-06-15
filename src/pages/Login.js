import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, FormItem, SubmitButton, ResetButton } from "formik-antd";
import { Row, Col } from "antd";
import axios from "axios";
import { sha512 } from "js-sha512";
import { useHistory } from "react-router-dom";

function Login() {
  const style = {
    width: "80%",
    margin: "0 auto",
    paddingTop: "8%",
  };

  const loggedInUser = useSelector((state) => state?.loggedInUser);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div style={style}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          let credentials = {
            email: values.email,
            password: sha512(values.password),
          };
          axios
            .post(
              "https://task-management-rest-app.herokuapp.com/api/users/login",
              credentials
            )
            .then((res) => {
              dispatch({ type: "SAVE_LOGGEDIN_USER", payload: res.data });
              history.push("/dashboard");
            });
        }}
      >
        <Form>
          <h1> Login here </h1>
          <Row>
            <FormItem name="email" label="email" labelCol={{ span: 24 }}>
              <Input name="email" placeholder="enter your email" />
            </FormItem>
          </Row>
          <Row>
            <FormItem name="password" label="password" labelCol={{ span: 24 }}>
              <Input name="password" placeholder="enter your password" />
            </FormItem>
          </Row>
          <Row>
            <Col span={3}>
              <SubmitButton> Submit </SubmitButton>
            </Col>
            <Col span={3}>
              <ResetButton> Reset </ResetButton>
            </Col>
          </Row>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;

// accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNWZlYjQwYjU4ODE5ZDIwMDE3NTJkZTk1IiwiZGF0YSI6eyJlbWFpbCI6InZpZ25lc2h3YXJhbkBnbWFpbC5jby5pbiJ9LCJpYXQiOjE2MjM2NjkyODAsImV4cCI6MTYyNjI2MTI4MH0.gYwY-SCXKBJ3A0yYKZ0ahXdDkgufpU4I2qs0h1k99nw"
// createdAt: "2020-12-29T14:44:05.419Z"
// email: "vigneshwaran@gmail.co.in"
// firstName: "abc"
// lastName: "abc"
// status: 1
// updatedAt: "2020-12-29T14:44:05.419Z"
// __v: 0
// _id: "5feb40b58819d2001752de95"

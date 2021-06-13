import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, FormItem, SubmitButton, ResetButton } from "formik-antd";
import { Row, Col } from "antd";

function Login() {
  const style = {
    width: "80%",
    margin: "0 auto",
    border: "1px solid black",
    paddingTop: "8%",
  };

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
          console.log(values);
        }}
      >
        <Form>
          <p> Login here </p>
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

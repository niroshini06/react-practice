import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Input, FormItem, SubmitButton, ResetButton } from "formik-antd";
import { Row, Col } from "antd";
import axios from "axios";
import { sha512 } from "js-sha512";

function Signup() {
  return (
    <Formik
    initialValues={{
      name:'',
      email: "",
      password: "",
    }}
    validationSchema={Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string().required("Required"),
    })}
  >
    </Formik>
  );
}

export default Signup;

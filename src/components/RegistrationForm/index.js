import React from "react";
import { Form, Formik } from "formik";
import InputInLabel from "../InputInLabel";
import styles from "../Form.module.scss";
import { SCHEMA_REGISTRATION } from "../../utils/validateSchemas.js";

const RegistrationForm = () => {
  const initialValues = {
    fname: "",
    lname: "",
    dname: "",
    email: "",
    password: "",
    passwordconfirm: "",
  };
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SCHEMA_REGISTRATION}
    >
      {(formikProps) => {
        return (
          <Form className={styles.container}>
            <div>
              <InputInLabel name="fname" type="text" placeholder="First name" />
              <InputInLabel name="lname" type="text" placeholder="Last name" />
            </div>
            <div>
              <InputInLabel
                name="dname"
                type="text"
                placeholder="Display name"
              />
              <InputInLabel
                name="email"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div>
              <InputInLabel
                name="password"
                type="password"
                placeholder="Password"
              />
              <InputInLabel
                name="passwordconfirm"
                type="password"
                placeholder="Password Confirmation"
              />
            </div>
            <div className={styles.radio}>
              <InputInLabel type="radio" value="0" />
              <h2>Join As a Buyer</h2>
            </div>
            <p> I am looking for a Name</p>

            <div className={styles.radio}>
              <InputInLabel type="radio" value="0" />
              <h2>Join As sa Creative or Marketplace Seller</h2>
            </div>
            <p>
              I plan to submit name ideas. Logo designs or sell names in Domain
              Marcketplace.
            </p>

            <input type="submit" className={styles.btn} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;

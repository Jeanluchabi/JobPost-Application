import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password is too short - should be 6 chars minimum.').required('Required'),
});

function RegistrationPage() {
  return (
    <div className="container">
      <h1 className="mt-5">Register</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationPage;


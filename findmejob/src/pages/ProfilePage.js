import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  resume: Yup.mixed().required('A file is required'),
});

function ProfilePage() {
  return (
    <div className="container">
      <h1>Profile</h1>
      <Formik
        initialValues={{ name: '', email: '', resume: null }}
        validationSchema={ProfileSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="resume">Resume</label>
              <input
                id="resume"
                name="resume"
                type="file"
                className="form-control"
                onChange={(event) => {
                  setFieldValue("resume", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="resume" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProfilePage;


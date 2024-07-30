import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ResumeSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  experience: Yup.string().required('Required'),
  education: Yup.string().required('Required'),
  skills: Yup.string().required('Required'),
});

function ResumeBuilderPage() {
  return (
    <div className="container">
      <h1>Resume Builder</h1>
      <Formik
        initialValues={{ name: '', email: '', experience: '', education: '', skills: '' }}
        validationSchema={ResumeSchema}
        onSubmit={(values) => {
          // Implement resume generation logic here
          console.log(values);
        }}
      >
        {({ isSubmitting }) => (
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
              <label htmlFor="experience">Experience</label>
              <Field type="text" name="experience" className="form-control" />
              <ErrorMessage name="experience" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="education">Education</label>
              <Field type="text" name="education" className="form-control" />
              <ErrorMessage name="education" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="skills">Skills</label>
              <Field type="text" name="skills" className="form-control" />
              <ErrorMessage name="skills" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Generate Resume
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ResumeBuilderPage;


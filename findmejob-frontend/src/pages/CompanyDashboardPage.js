import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const JobSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  company: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
});

function CompanyDashboardPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/api/company/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>Company Dashboard</h1>
      <h2>Post a New Job</h2>
      <Formik
        initialValues={{ title: '', description: '', company: '', location: '' }}
        validationSchema={JobSchema}
        onSubmit={(values, { resetForm }) => {
          axios.post('/api/company/jobs', values)
            .then(response => {
              setJobs([...jobs, response.data]);
              resetForm();
            })
            .catch(error => console.error(error));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="title">Job Title</label>
              <Field type="text" name="title" className="form-control" />
              <ErrorMessage name="title" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Job Description</label>
              <Field type="text" name="description" className="form-control" />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <Field type="text" name="company" className="form-control" />
              <ErrorMessage name="company" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <Field type="text" name="location" className="form-control" />
              <ErrorMessage name="location" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Post Job
            </button>
          </Form>
        )}
      </Formik>
      <h2>Manage Jobs</h2>
      <div className="list-group">
        {jobs.map(job => (
          <div className="list-group-item" key={job.id}>
            <h5>{job.title}</h5>
            <p>{job.description}</p>
            <button className="btn btn-danger" onClick={() => {
              axios.delete(`/api/company/jobs/${job.id}`)
                .then(() => setJobs(jobs.filter(j => j.id !== job.id)))
                .catch(error => console.error(error));
            }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyDashboardPage;


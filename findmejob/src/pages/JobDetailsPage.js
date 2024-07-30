import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.get(`/api/jobs/${id}`)
      .then(response => setJob(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <button className="btn btn-primary">Apply Now</button>
    </div>
  );
}

export default JobDetailsPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function JobListingsPage() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Job Listings</h1>
      <input
        type="text"
        placeholder="Search for jobs..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="form-control mb-4"
      />
      <div className="row">
        {filteredJobs.map(job => (
          <div className="col-md-4 mb-4" key={job.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.description}</p>
                <Link to={`/jobs/${job.id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListingsPage;


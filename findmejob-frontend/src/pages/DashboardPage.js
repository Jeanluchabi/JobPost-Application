import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profile</h5>
              <p className="card-text">View and edit your profile details.</p>
              <Link to="/profile" className="btn btn-primary">Go to Profile</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Job Listings</h5>
              <p className="card-text">Browse and apply for jobs.</p>
              <Link to="/job-listings" className="btn btn-primary">View Job Listings</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Notifications</h5>
              <p className="card-text">Check your latest job notifications.</p>
              <Link to="/notifications" className="btn btn-primary">View Notifications</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;


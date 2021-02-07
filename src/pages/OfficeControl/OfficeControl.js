import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import s from './style.module.sass';

export default function OfficeControl() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5 ">
      <div className="w-50">
        <h1 className="mb-5">Office control is not done</h1>
        <Button variant="success">
          <Link to="/dashboard" className="text-white">
            Go back to the Dashboard
          </Link>
        </Button>
      </div>
    </div>
  );
}

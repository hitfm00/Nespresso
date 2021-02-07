import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <div>
      <Link className="mr-4" to="/">
        Home
      </Link>
      <Link to="/office_control">Office control</Link>
    </div>
  );
}

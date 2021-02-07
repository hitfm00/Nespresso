import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useAuth } from '../../components/context/AuthContext';
import { useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import Menu from './Menu';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  async function handleLogOut() {
    setError('');

    try {
      await logOut();
      history.push('/login');
    } catch {
      setError('Failed to Log Out');
    }
  }
  return (
    <div className="mt-5">
      <Menu />
      <Card className="d-flex flex-column align-items-center justify-content-center ">
        <Card.Body className="d-flex flex-column align-items-center justify-content-center w-25">
          {error & <Alert variant={'danger'}>{error}</Alert>}
          <h4>Profile</h4>
          <span>{currentUser && currentUser.email}</span>
          <Button variant="danger" className="w-100" onClick={handleLogOut}>
            Log Out
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

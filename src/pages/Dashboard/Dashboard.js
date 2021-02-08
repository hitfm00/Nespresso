import React, { useState } from 'react';
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useAuth } from '../../components/context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import UpdateProfile from './UpdateProfile';
import s from './style.module.scss';
import Menu from './Menu';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  console.log(currentUser);

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
    <div className={`mt-5 ${s.dashboard}`}>
      <Menu />
      <Card
        className={`d-flex flex-column align-items-center justify-content-center py-4 ${s.dashboard__card}`}
      >
        <h1>Welcome to Nespresso {currentUser.email}</h1>
        <Card.Body className="d-flex flex-column align-items-center justify-content-center w-100">
          {error && <Alert variant={'danger'}>{error}</Alert>}
          <h4 className="mb-2">Profile</h4>
          <Row className="mb-4">
            <Col>
              <Button variant="dark" className={s.dashboard__item}>
                <h4>Email</h4>
                <span>{currentUser.email}</span>
              </Button>
            </Col>
          </Row>
          <Row className="w-100">
            <Col sm="12" className="mb-3">
              <Accordion defaultActiveKey="0">
                <Accordion.Toggle
                  as={Button}
                  variant="primary"
                  eventKey="0"
                  className="w-100"
                >
                  Update profile
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <UpdateProfile />
                  </Card.Body>
                </Accordion.Collapse>
              </Accordion>
            </Col>
            <Col sm="12">
              <Button variant="danger" onClick={handleLogOut} className="w-100">
                Log Out
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

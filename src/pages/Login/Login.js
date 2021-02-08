import React, { useRef, useState } from 'react';
import { Form, Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../../components/context/AuthContext';
import { Link, Redirect, useHistory } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      history.push('/dashboard');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }
  return (
    <>
      {currentUser ? (
        <Redirect to="/dashboard" />
      ) : (
        <Container>
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: '100vh' }}
          >
            <Card className="form__block">
              <Card.Body>
                <h2 className="text-center">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>

                  <Button disabled={loading} className="w-100" type="submit">
                    Log In
                  </Button>
                  <Link
                    to="/forgotpassword"
                    className="text-center d-block mt-3 w-100"
                  >
                    Forgot password?
                  </Link>
                </Form>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

import React, { useRef, useState } from 'react';
import { Form, Card, Button, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../../components/context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function PasswordReset() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
      history.push('/login');
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }
  return (
    <Container>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: '100vh' }}
      >
        <Card className="form__block">
          <Card.Body>
            <h2 className="text-center">Reset password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            {!message ? (
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Reset
                </Button>
                <Link to="/login" className="text-center d-block mt-3 w-100">
                  Log In
                </Link>
              </Form>
            ) : (
              <Link to="/" className="d-block w-100 text-center">
                Home page
              </Link>
            )}
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </Container>
  );
}

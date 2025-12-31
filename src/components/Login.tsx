import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

type User = {
  name: string;
  isLoggedIn: boolean;
};

function Login() {
  const [username, setUsername] = useState<string>('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: User = { name: username, isLoggedIn: true };
    setUser(user);

    navigate('/home');
  };

  return (
    <Container className="vh-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col md={5}>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="usernameInput" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

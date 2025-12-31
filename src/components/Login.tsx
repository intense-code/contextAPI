import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { User } from '../model/User.model';

function Login() {
  const [username, setUsername] = useState<string>('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({ name: username, isLoggedIn: true });
    navigate('/home');
  };

  return (
    <Container fluid className="vh-100 bg-light d-flex align-items-center">
      <Row className="justify-content-center w-100">
        <Col xs={12} md={10} lg={8} xl={7}>
          <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
            <Row className="g-0">
              
              {/* LEFT SIDE */}
              <Col
                md={5}
                className="bg-primary text-white d-flex flex-column justify-content-center p-4"
              >
                <h2 className="fw-bold mb-3">Welcome Back</h2>
                <p className="opacity-75">
                  Log in to access your account, view your cart,
                  and continue shopping.
                </p>
              </Col>

              {/* RIGHT SIDE */}
              <Col md={7} className="p-4 p-md-5">
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="usernameInput" className="mb-4">
                    <Form.Label className="fw-semibold">
                      Username
                    </Form.Label>

                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="py-3"
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="w-100 fw-semibold"
                  >
                    Login
                  </Button>
                </Form>
              </Col>

            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;

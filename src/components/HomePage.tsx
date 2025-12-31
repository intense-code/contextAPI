
// src/components/HomePage.jsx

import { useContext } from 'react';
import UserContext from '../context/UserContext';
import { Container } from 'react-bootstrap';

function HomePage() {
  const { user } = useContext(UserContext);

  return (
    <Container className="mt-5">
      <h1>Welcome, {user?.name}!</h1>
      <p>You are now {user?.isLoggedIn ? 'logged in' : 'logged out'}.</p>
    </Container>
  );
}

export default HomePage;

// src/components/HomePage.jsx

import { useContext,useState } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import useCartCount from '../hooks/useCartCount';
import { Container, Button} from 'react-bootstrap';
import {User} from '../model/User.model'
function HomePage() {
  const navigate = useNavigate();
  const { user,setUser } = useContext(UserContext);
  const cartCount = useCartCount()
const handleLogout = () => {
    if(user?.isLoggedIn){
      const userproperties: User = { name: '', isLoggedIn: false };
    setUser(userproperties);
    navigate('/home');
    }else{
      navigate('/')
    }
  };
  return (
    <Container className="mt-5">
      <h1>Welcome, {user?.name}!</h1>
      {user?.isLoggedIn && (
        <p>You have {cartCount} items in the basket</p>
      )}
      <p>You are now {user?.isLoggedIn ? 'logged in' : 'logged out'}.</p>
      <Button onClick={handleLogout}variant="primary"  className="w-100">
        {user?.isLoggedIn ? 'logout' : 'Login'}
      </Button>
    </Container>
  );
}

export default HomePage;
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import UserContext from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState({ name: '', isLoggedIn: false });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Template from './components/Template';
import Login from './components/Auth/Login';

function App() {
  return (
    <Router>
      <Template>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Template>
    </Router>
  );
}

export default App;
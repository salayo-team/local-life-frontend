import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateProgram from "./pages/Program/CreateProgram";

const Home = () => {
  return <h1>Hello, Local Life!</h1>;
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program/create" element={<CreateProgram />} />
      </Routes>
    </Router>
  );
};

export default App;

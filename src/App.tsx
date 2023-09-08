import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routing from './Routes'
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Routing />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

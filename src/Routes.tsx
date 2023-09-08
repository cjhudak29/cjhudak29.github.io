import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/views/Home'
import About from './components/views/About';
import Projects from './components/views/Projects';

const Routing: React.FC = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
                {/* Add more routes for other components/pages */}
            </Routes>
        </main>
    );
};

export default Routing;

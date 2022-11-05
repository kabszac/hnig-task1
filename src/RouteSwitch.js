import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Contact from './components/contact/Contact';

const RouteSwitch = () => {
    return (
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes> 
    );
};

export default RouteSwitch;
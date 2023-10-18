import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';
import MainPage from './Components/Pages/main/MainPage';
import Header from './Components/header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './client/routes/Home';
import NewDeck from './client/routes/NewDeck';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='home' element={<Home />} />
        <Route path='new-deck' element={<NewDeck />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

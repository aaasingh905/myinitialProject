import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import 'antd/dist/antd.css';
import MainLayout from './Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;

// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.scss';
import MainLayout from './Layout/index';
import { State } from './Store/Reducers/Index';

function App() {
  const user = useSelector((state: State) => state.user);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;

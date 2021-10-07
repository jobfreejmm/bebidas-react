/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Header from './components/Header';
import Forms from './components/Forms';
import CategoriasProvider from './context/CategoriaContext';
import RecetasContextProvider from './context/RecetasContext';
import Lista from './components/List';
import ModalContextProvider from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasContextProvider>
        <ModalContextProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Forms />

            </div>
            <Lista />
          </div>
        </ModalContextProvider>
      </RecetasContextProvider>
    </CategoriasProvider>

  );
}

export default App;

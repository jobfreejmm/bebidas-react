/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useState } from 'react';
import axios from 'axios';

// Crear context
export const CategoriasContext = createContext();

// Provider es donde se encuentra las funciones y el state

const CategoriasProvider = ({ children }) => {
  // crear el state del context
  const [categorias, setCategorias] = useState(null);
  React.useEffect(() => {
    const FetchApi = () => {
      axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        .then((res) => {
          setCategorias(res.data.drinks);
        }).catch((err) => {
          console.log(err);
        });
    };
    FetchApi();
  }, []);
  return (
    <CategoriasContext.Provider value={{
      categorias,
    }}
    >
      {children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;

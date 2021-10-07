/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { createContext } from 'react';
import axios from 'axios';

export const ModalContext = createContext(null);

const ModalContextProvider = ({ children }) => {
  const [idReceta, setIdReceta] = React.useState(null);
  const [inforeceta, setInfoReceta] = React.useState(null);
  React.useEffect(() => {
    const getApi = async () => {
      if (idReceta === null) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      console.log(url);
      const res = await axios.get(url);

      setInfoReceta(res.data.drinks[0]);
    };
    getApi();
  }, [idReceta]);

  return (
    <ModalContext.Provider value={{
      setInfoReceta,
      inforeceta,
      setIdReceta,
    }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;

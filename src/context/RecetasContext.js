/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { createContext } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasContextProvider = ({ children }) => {
  const [recetas, setRecetas] = React.useState([]);
  const [busquedaReceta, setBusquedaReceta] = React.useState(null);
  //
  React.useEffect(() => {
    if (busquedaReceta === null) return;
    const { ingrediente, categoria } = busquedaReceta;
    const fetchAPi = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
      const res = await axios.get(url);
      setRecetas(res.data.drinks);
    };

    fetchAPi();
  }, [busquedaReceta]);
  return (
    <RecetasContext.Provider value={{
      setBusquedaReceta,
      recetas,
    }}
    >
      {children}
    </RecetasContext.Provider>
  );
};
export default RecetasContextProvider;

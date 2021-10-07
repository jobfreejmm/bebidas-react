/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { RecetasContext } from '../context/RecetasContext';
import Receta from './Receta';

const Lista = () => {
  const context = React.useContext(RecetasContext);
  const { recetas } = context;
  return (
    <div className="row mt-5">
      {recetas && recetas.length > 0 ? recetas.map((receta) => (
        <Receta key={receta.idDrink} receta={receta} />
      )) : null}
    </div>
  );
};

export default Lista;

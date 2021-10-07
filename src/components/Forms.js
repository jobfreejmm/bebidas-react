/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CategoriasContext } from '../context/CategoriaContext';
import { RecetasContext } from '../context/RecetasContext';

const Foms = () => {
  const contextCategoria = React.useContext(CategoriasContext);
  const contextReceta = React.useContext(RecetasContext);
  const [busqueda, setBusqueda] = React.useState({});
  const { categorias } = contextCategoria;
  const { setBusquedaReceta } = contextReceta;
  console.log(contextReceta);

  //
  const onChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  //
  const onSubmit = (e) => {
    e.preventDefault();
    setBusquedaReceta(busqueda);
  };

  return (
    <form className="col-md-12" onSubmit={onSubmit}>
      <fieldset className="text-center">
        <legend>Busca bebidas por categoria e ingredientes</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            className="form-control"
            name="ingrediente"
            type="text"
            placeholder="Buscar por ingrediente..."
            onChange={onChange}
          />

        </div>
        <div className="col-md-4">
          <select className="form-control" name="categoria" onChange={onChange}>
            <option value="" disabled>--Seleciona categoria--</option>
            {categorias && categorias.length > 0 ? categorias.map((categoria) => (
              <option
                key={categoria.strCategory}
                value={categoria.strCategory}
              >
                {categoria.strCategory}
              </option>
            )) : null}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar bebidas"

          />

        </div>

      </div>
    </form>
  );
};

export default Foms;

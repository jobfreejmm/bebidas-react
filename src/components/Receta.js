/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ModalContext } from '../context/ModalContext';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: '100vh',
    overflowY: 'scroll',
    overflowX: 'none',
  },
  scroll: {
    maxHeight: '500px',
    overflowY: 'scroll',
    overflowX: 'none',
  },
}));
function Receta({ receta }) {
  const context = React.useContext(ModalContext);
  const { inforeceta, setIdReceta, setInfoReceta } = context;
  console.log(inforeceta);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // funcion que formate los ingredientes
  const mostrarIngredientes = (info) => {
    const ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (info[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {' '}
            Ingredientes:
            {info[`strIngredient${i}`]}
            {'  '}
            Informacion:
            {info[`strMeasure${i}`]}
          </li>,
        );
      }
    }
    return ingredientes;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>

        <img className="card-im-top" src={receta.strDrinkThumb} alt={receta.strDrink} />
        <div className="card-body">
          {/* <button type="button" className=">Block level button</button> */}
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            onClick={(e) => {
              setIdReceta(receta.idDrink);
              handleOpen(true);
            }}
          >
            Ver receta
          </button>
          { inforeceta && inforeceta.length !== 0 ? (
            <Modal
              open={open}
              onClose={() => {
                handleClose(null);
                setIdReceta(null);
                setInfoReceta({});
              }}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">{inforeceta.strDrink}</h2>
                <h3 className="mt-4">Instrucciones</h3>
                <p>{inforeceta.strInstructions}</p>
                <img className="img-fluid my-4" src={inforeceta.strDrinkThumb} alt={inforeceta.strDrink} />
                <h3>Ingredientes</h3>
                <ul>
                  {mostrarIngredientes(inforeceta)}
                </ul>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Receta;

import React from "react";
//Importamos useDispatch de react-redux para enviar datos a la Store
import { useDispatch } from "react-redux";

const Pokecard = ({ id, sprite, name }) => {
  //Guardamos useDispatch en una variable, para mayor legibilidad
  const dispatch = useDispatch();

  //Componente
  return (
    <div className="container m-2 p-2 pokecard__card" key={id}>
      <img src={sprite} className="card-img-top pokecard__img" alt="..." />
      <div className="card-body text-center">
        <p>{name}</p>
        <button
          className="btn btn-primary pokecard__btn"
          onClick={() => dispatch({ type: "AGREGAR_AL_EQUIPO", id })}
          //Éste dispatch mueve un elemento desde "pokemons" a "equipo" en la Store
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Pokecard;

import React from "react";
//Importamos el Dispatch de react-redux, para enviar datos a la Store
import { useDispatch } from "react-redux";

const Pokecardequipo = ({ pokemon }) => {
  //Guardamos el dispatch en una variable, para mayor legibilidad
  const dispatch = useDispatch();

  //Componente
  return (
    <div className="container m-2 p-2 pokecard__card" key={pokemon.id}>
      <img
        src={pokemon.sprites.front_default}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <p>{pokemon.name}</p>
        <button
          className="btn btn-primary pokecard__btn"
          onClick={() => dispatch({ type: "QUITAR_DEL_EQUIPO", pokemon })}
          //Éste dispatch mueve un elemento de "equipo" a "pokemons" en la Store
        >
          Quitar
        </button>
      </div>
    </div>
  );
};

export default Pokecardequipo;

import React from "react";
//Importamos componentes
import Pokecard from "./pokecard";
//Importamos useSelector de Redux para acceder a la Store
import { useSelector } from "react-redux";

const Pokemons = () => {
  //Guardamos el useSelector dentro de una variable, para mayor legibilidad
  const pokemons = useSelector((state) => state.teamReducer);
  //Usando el método sort ordenamos los elementos de la Store
  const sort = []
    .concat(pokemons.pokemons)
    .sort((a, b) => (a.order > b.order ? 1 : -1));
  //Mapeamos los elementos de la Store para mostrarlos
  const map = sort.map((item) => {
    return (
      <Pokecard
        id={item.id}
        sprite={item.sprites.front_default}
        name={item.name}
      ></Pokecard>
    );
  });

  //Componente
  return (
    <>
      <div className="container text-center">
        <h1 className="my-3">Agregá pokemons a tu equipo</h1>
      </div>
      <div className="container-fluid d-flex overflow-auto">{map}</div>
    </>
  );
};

export default Pokemons;

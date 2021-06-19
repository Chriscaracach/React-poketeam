import React from "react";
import Pokecard from "./pokecard";
import { useSelector } from "react-redux";

const Pokemons = () => {
  const pokemons = useSelector((state) => state.teamReducer);
  const sort = []
    .concat(pokemons.pokemons)
    .sort((a, b) => (a.order > b.order ? 1 : -1));
  const map = sort.map((item) => {
    return (
      <Pokecard
        id={item.id}
        sprite={item.sprites.front_default}
        name={item.name}
      ></Pokecard>
    );
  });
  return (
    <>
      <div className="container text-center">
        <h1>Lista de pókemons disponibles</h1>
      </div>
      <div className="container-fluid d-flex">{map}</div>
    </>
  );
};

export default Pokemons;

import React from "react";
import { useDispatch } from "react-redux";

//style para la card, provisorio
const styleCard = {
  width: "200px",
  height: "30%",
};

const Pokecard = ({ id, sprite, name }) => {
  //dispatch
  const dispatch = useDispatch();
  return (
    <div className="card" style={styleCard} key={id}>
      <img src={sprite} className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <p>{name}</p>
        <button
          className="btn btn-primary"
          // style={{ width: "90%", height: "10%" }}
          onClick={() => dispatch({ type: "AGREGAR_AL_EQUIPO", id })}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Pokecard;

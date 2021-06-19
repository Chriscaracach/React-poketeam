import React from "react";
import { useDispatch } from "react-redux";

//style para la card, provisorio
const styleCard = {
  width: "200px",
  height: "30%",
};

const Pokecardequipo = ({ pokemon }) => {
  //dispatch
  const dispatch = useDispatch();
  return (
    <div className="card" style={styleCard} key={pokemon.id}>
      <img
        src={pokemon.sprites.front_default}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <p>{pokemon.name}</p>
        <button
          className="btn btn-primary"
          // style={{ width: "90%", height: "10%" }}
          onClick={() => dispatch({ type: "QUITAR_DEL_EQUIPO", pokemon })}
        >
          Quitar
        </button>
      </div>
    </div>
  );
};

export default Pokecardequipo;

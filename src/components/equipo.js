import React from "react";
import Pokecardequipo from "./pokecardequipo";
import { useSelector } from "react-redux";

const Equipo = () => {
  const equipo = useSelector((state) => state.teamReducer);
  const map = equipo.equipo.map((item) => {
    return <Pokecardequipo pokemon={item}></Pokecardequipo>;
  });
  return <div className="container-fluid text-center d-flex">{map}</div>;
};

export default Equipo;

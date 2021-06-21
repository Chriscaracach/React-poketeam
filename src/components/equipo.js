import React from "react";
//Importamos componentes
import Pokecardequipo from "./pokecardequipo";
//Importamos useSelector para acceder a los datos de la Store
import { useSelector } from "react-redux";

const Equipo = () => {
  //Guardamos el useSelector en una variable, para mayor legibilidad
  const equipo = useSelector((state) => state.teamReducer);
  //Mapeamos los elementos de la store
  const map = equipo.equipo.map((item) => {
    return <Pokecardequipo pokemon={item}></Pokecardequipo>;
  });

  //Componente
  return (
    <>
      <div className="container text-center">
        <h1 className="my-3">Equipo</h1>
      </div>
      <div className="container-fluid d-flex overflow-auto">{map}</div>
    </>
  );
};

export default Equipo;

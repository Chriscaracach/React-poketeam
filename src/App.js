import React, { useEffect, useState } from "react";
//Importamos Dispatch de Redux, para mandar datos a la Store
import { useDispatch } from "react-redux";
//Importamos componentes y estilos
import Pokemons from "./components/pokemons";
import Equipo from "./components/equipo";
import Spinner from "./components/spinner";
import "./styles.css";

const App = () => {
  //Usamos un estado para mostrar pantalla de loading
  const [isLoading, setIsLoading] = useState(true);
  //El Dispatch en una variable para mayor legibilidad
  const dispatch = useDispatch();
  //Con Fetch llamamos a la PokeAPI
  const obtenerPokemons = async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((res) => {
        return res.json(); //Se convierte la respuesta en un archivo con formato JSON
      })
      .then((res) => {
        const data = res.results;
        data.forEach(async (element) => {
          //Por cada dirección que nos trae el Fetch de la PokeAPI, volvemos a hacer un fetch para acceder a más datos de cada pokemon
          await fetch(element.url)
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              dispatch({ type: "AGREGAR_POKEMON", res });
              //Con éste Dispatch se envía todo a la Store,
              //ese objeto que se usa como parámetro, puede ser traído desde un archivo externo que suele llamarse "actions"
            });
        });
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((e) => console.log(e));
  };

  //Usando el hook useEffect (similar a componentDidMount) hacemos la llamada a la API y la enviamos a la Store
  useEffect(() => {
    obtenerPokemons();
  }, []);

  //Componente
  //No es necesario pasar datos por props, porque estamos usando Redux

  return (
    <div className="App">
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <>
          <Pokemons></Pokemons>
          <Equipo></Equipo>
        </>
      )}
    </div>
  );
};

export default App;

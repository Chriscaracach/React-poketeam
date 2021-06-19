import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { agregar_pokemon } from "./actions/actions";

const App = () => {
  //Funcion Fetch
  const obtenerPokemons = async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then((res) => {
        return res.json(); //Se convierte la respuesta en un archivo con formato JSON
      })
      .then((res) => {
        const data = res.results;
        data.forEach(async (element) => {
          await fetch(element.url)
            .then((res) => {
              return res.json();
            })
            .then((res) => {
              // setPokemons((pokemonsViejos) => [...pokemonsViejos, res]);
              dispatch(agregar_pokemon(res));
            });
        });
      })
      .catch((e) => console.log(e)); //Capturamos el error
  };
  //Dispatch
  const dispatch = useDispatch();
  //El Fetch se hace cuando el componente se renderiza por primera vez
  useEffect(() => {
    obtenerPokemons();
  }, []);
  //componente
  return <div className="App"></div>;
};

export default App;

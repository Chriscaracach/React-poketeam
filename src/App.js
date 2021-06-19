import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { agregar_pokemon } from "./actions/actions";
//Componentes
import Pokemons from "./components/pokemons";
import Equipo from "./components/equipo";

const App = () => {
  //Dispatch
  const dispatch = useDispatch();
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
              dispatch({ type: "AGREGAR_POKEMON", res }); //dispatch para mandar todo a la store, no se usa el action, se manda el type y aprovechamos para mandar la info de la res
            });
        });
      })
      .catch((e) => console.log(e)); //Capturamos el error
  };

  //El Fetch se hace cuando el componente se renderiza por primera vez
  useEffect(() => {
    obtenerPokemons();
  }, []);

  //componente
  return (
    <div className="App">
      <Pokemons></Pokemons>
      <Equipo></Equipo>
    </div>
  );
};

export default App;

//Reducer de redux

//Declaramos un estado inicial de nuestra Store, en éste caso, dos arrays que van a contener los elementos para ser mostrados
const initialState = {
  pokemons: [],
  equipo: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    //Ésta action se usa cuando hacemos el fetch al principio.
    case "AGREGAR_POKEMON":
      return {
        ...state,
        pokemons: [...state.pokemons, action.res],
      };
    //Si la action es AGREGAR_AL_EQUIPO, devuelve el estado,
    //y en la key "equipo", devuelve lo que había más lo que le enviamos,
    //además, con un filter quita el elemento de "pokemons"
    case "AGREGAR_AL_EQUIPO":
      return {
        ...state,
        equipo: [
          ...state.equipo,
          state.pokemons.filter((p) => p.id === action.id)[0],
        ],
        pokemons: state.pokemons.filter((p) => p.id !== action.id),
      };
    //Si la action es QUITAR_DEL_EQUIPO, devuelve el estado,
    //y en la key "pokemons", devuelve lo que había más lo que le enviamos,
    //además, con un filter quita el elemento de "equipo"
    case "QUITAR_DEL_EQUIPO":
      return {
        // ...state,
        equipo: state.equipo.filter((p) => p.id !== action.pokemon.id),
        pokemons: state.pokemons.concat(action.pokemon),
      };
    default:
      return state;
  }
};

export default teamReducer;

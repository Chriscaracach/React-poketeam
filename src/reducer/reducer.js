const initialState = {
  pokemons: [],
  equipo: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGREGAR_POKEMON":
      return {
        ...state,
        pokemons: [...state.pokemons, action.res],
      };
    case "AGREGAR_AL_EQUIPO":
      return {
        ...state,
        equipo: [
          ...state.equipo,
          state.pokemons.filter((p) => p.id === action.id)[0],
        ],
        pokemons: state.pokemons.filter((p) => p.id !== action.id),
      };
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

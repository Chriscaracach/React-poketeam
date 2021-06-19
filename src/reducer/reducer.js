const initialState = {
  pokemons: [],
  equipo: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AGREGAR_POKEMON":
      return {
        ...state,
        pokemons: [...state.pokemons, action.pokemon],
      };
    default:
      return state;
  }
};

export default teamReducer;

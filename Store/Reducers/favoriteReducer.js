const initialState = { favoritesFilm: ["mon premier film"] }

function toggleFavorite(state = initialState, action) {
    let nextState
    switch (action.type) {
      case 'TOGGLE_FAVORITE':
      return [
        ...state,
        {
            ...state
        }
      ];
    default:
      return state
    }
  }
  
  export default toggleFavorite
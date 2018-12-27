
import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlace: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName
                })
            };
        default:
            return state;
    }
};


export default reducer;

import { createStore, combineReducers } from 'redux';
import toggleFavorite from './reducers/favoriteReducer';
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducer,
    toggleFavorite: toggleFavorite
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import albumsReducer from '../reducers/albums';
import artistsReducer from '../reducers/artists';
import playlistReducer from '../reducers/playlists';


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
    combineReducers({
        albums: albumsReducer,
        artists: artistsReducer,
        playlist: playlistReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
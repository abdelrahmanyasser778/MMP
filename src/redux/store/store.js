import { legacy_createStore as createStore,applyMiddleware} from 'redux'
import { MoviesReducer } from '../reducer/MoviesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


//composeWithDevTools()

export const store = createStore(MoviesReducer,applyMiddleware(thunk));
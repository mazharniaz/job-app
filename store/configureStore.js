import { createStore, combineReducers } from 'redux';
import App, { loginReducer } from '../App';

const rootReducer = combineReducers(
    { 
        loginReducerState: loginReducer || (() => null)
    
     }
);

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;
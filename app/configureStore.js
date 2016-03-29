import { combineReducers, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

export default function configureStore() {
    const reducers = combineReducers({
    });
    const store = createStore(
        reducers,
        applyMiddleware(Thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    return store;
}

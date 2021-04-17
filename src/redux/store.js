import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers/reducers"
import { save as saveToLocalStorage, load as loadFromLocalStorage } from 'redux-localstorage-simple';
import booksMiddleware from "./middleware/books"

const REDUX_STATE_NAMESPACE = 'client_state';
const syncedStates = ['basket'];


/**
 * To initialize the store
 * @returns {Store<unknown, AnyAction> & Store<S, A> & {dispatch: Dispatch<A>}}
 */
export default function configureStore() {
    // define middleware
    const logger = createLogger();

    // create middleware
    const middleware = applyMiddleware(...[
        thunk,
        saveToLocalStorage({ states: syncedStates, namespace: REDUX_STATE_NAMESPACE }),
        booksMiddleware()
    ]);

    // create a new store and return it
    var store = createStore(reducers, loadFromLocalStorage({ states: syncedStates, namespace: REDUX_STATE_NAMESPACE }) , middleware);

    // store.dispatch();
    return store;
}
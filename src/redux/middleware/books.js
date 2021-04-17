import { GetBooksAction, SetBooks } from "../actions/books";

/**
 * Middleware function
 */
export default function booksMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetBooksAction:
                fetch("http://localhost:8080/books").then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetBooks(response))
                )
                break;
            default:
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}
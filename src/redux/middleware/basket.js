import { AddToBasket, RemoveFromBasket, ResetAllBasket } from "../actions/basket";

/**
 * Middleware function
 */
export default function basketMiddleware(bookItems) {
    return store => next => action => {
        switch (action.type) {
            case ConfirmThisOrder:

//                fetch("http://localhost:8080/orders", {
//                        method: 'POST',
//                        headers: {'Content-Type': 'application/json'}/*,
//                        body: JSON.stringify({user: 1, book: bookItems})*/
//                      })


//                fetch("http://localhost:8080/books").then(
//                    response => response.json()
//                ).then(
//                    response => store.dispatch(new SetBooks(response))
//                )
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
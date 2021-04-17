import { AddToBasket, RemoveFromBasket, ResetAllBasket } from "../actions/basket";

/**
 * initial state of the book list
 * @type {{books: []}}
 */
const initialState = {
    books: {},
}

/**
 * The reducer function
 * @param state
 * @param action
 */
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case AddToBasket:
            return {
                ...state,
                books: {
                    ...state.books,
                    [action.payload]: (state.books[action.payload] || 0) + 1
                }
            }
        case RemoveFromBasket:
            return {
                ...state,
                books: {
                    ...state.books,
                    [action.payload]: Math.max((state.books[action.payload] || 0) - 1, 0)
                }
            }
        case ResetAllBasket:
            return {
                ...state,
                books: {}
            }
        default:
            return state;
    }
}



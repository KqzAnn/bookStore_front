import { SetBooksAction } from "../actions/books";

/**
 * initial state of the book list
 * @type {{books: []}}
 */
const initialState = {
    books: [],
    booksById: {}
}

/**
 * The reducer function
 * @param state
 * @param action
 */
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SetBooksAction:
            return {
                ...state,
                books: action.payload,
                booksById: action.payload.reduce((acc, curr) => {
                    acc[curr.id] = curr;
                    return acc;
                }, {})
            }
        default:
            return state;
    }
}



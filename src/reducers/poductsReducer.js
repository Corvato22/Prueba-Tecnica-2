import { types } from "../types/types";


const initialState = {
    products: [],
    search: ''
}

export const poductsReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.list:
            return {
                products: [...action.payload]
            }
        case types.search:
            return {
                products: action.payload
            }

        default:
            return state;
    }
}
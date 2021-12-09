import { types } from "../types/types";


const initialState = {
    products: []
}

export const poductsReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.list:
            return {
                products: [...action.payload]
            }

        default:
            return state;
    }
}
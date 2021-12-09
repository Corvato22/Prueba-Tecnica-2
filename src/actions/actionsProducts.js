import { types } from '../types/types';
import { db } from "../firebase/firebase";
import { addDoc, collection, getDocs, query, where, doc, deleteDoc } from "@firebase/firestore";


export const listProductsAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "products"));
        const productos = [];
        querySnapshot.forEach((doc) => {
            productos.push({
                ...doc.data()
            })
        });
        dispatch(listSync(productos));
        console.log(productos)
    }
}

export const listSync = (product) => {
    return {
        type: types.list,
        payload: product
    }
}
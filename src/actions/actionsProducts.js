import { types } from '../types/types';
import { db } from "../firebase/firebase";
import { collection, getDocs, query, where, } from "@firebase/firestore";


export const searchAsyn = (product) => {

    return async (dispatch) => {

        const productCollection = collection(db, "products");
        const q = query(productCollection, where("name", "==", product))
        const datos = await getDocs(q);
        console.log(datos)
        const producto = [];
        datos.forEach((docu) => {
            producto.push(docu.data())
        })
        console.log(producto)
        dispatch(searchSync(producto))
    }
}


export const searchSync = (product) => {
    return {
        type: types.search,
        payload: product
    }
}

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
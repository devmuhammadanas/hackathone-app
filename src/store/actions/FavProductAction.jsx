import {ADD_FAVOURITE,DELETE_FAVOURITE,GET_FAVOURITE} from "../type/Type";
import { db,  storage } from "../../config/Firebase";

export const addFavProduct = (singleProduct,userId,  setFavLoading)=> async(dispatch)=>{
    try {
        await db.collection("Favourites").add({...singleProduct,favUid:userId});
        dispatch({
            type:ADD_FAVOURITE,
            payload:singleProduct
        })
    } catch (error) {
        
    }
}

export const getFavproduct = () => async (dispatch) => {
try {
    let fav = [];
    // console.log("favrt products",fav);
   
    const resValue = await db.collection("Favourites").get()
    resValue.forEach(doc => {
        fav.push({favDocId:doc.id,...doc.data()})
    });

    dispatch({
        type: GET_FAVOURITE,
        payload:fav
    })
} catch (error) {
    
}
}


export const UnFavProduct =(favDocId)=>async(dispatch)=>{
    try {
        await db.collection("Favourites").doc(favDocId).delete()
        dispatch({
            type:DELETE_FAVOURITE,
            payload:favDocId
        })
    } catch (error) {
        
    }
}
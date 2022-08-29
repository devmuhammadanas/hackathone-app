import React, { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addFavProduct, getFavproduct, UnFavProduct } from "../../store/actions/FavProductAction";
export default function UseFvrt() {
  const userId = useSelector(state=>state.AuthReducer.user?.uid)
  // console.log(userId);
  const dispatch = useDispatch();
  const [favLoading, setFavLoading] = useState(false);
  const favButtonHandler = (singleProduct) => {
  
    dispatch(addFavProduct(singleProduct,userId ,setFavLoading));
  };
 const unFavButtonHandler=(favDocId)=>{
  dispatch(UnFavProduct(favDocId))
 }
  return[{
     favButtonHandler, 
    setFavLoading, unFavButtonHandler
    
   }];
}


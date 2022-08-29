import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../store/actions/ProductAction";
import { getFavproduct } from "../../store/actions/FavProductAction";

export default function UseAllProducts() {
  const getProductsArray = useSelector((state) => state.ProductReducers.fetchArray);
const getFavProductsArray = useSelector(state=>state.FavProductReducer.favProducts)
const userId = useSelector(state=>state.AuthReducer.user?.uid)

// console.log(getFavProductsArray);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
   dispatch(getFavproduct())
  }, []);

  return [
    {
      getProductsArray,getFavProductsArray,userId
    },
  ];
}

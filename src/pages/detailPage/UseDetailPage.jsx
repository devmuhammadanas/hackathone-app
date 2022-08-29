import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../store/actions/ProductAction";
export default function UseDetailPage() {
  const getProductsArray = useSelector(
    (state) => state.ProductReducers.fetchArray
  );
  // console.log("data in detail page", getProductsArray);
  const { id: docId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const productData = getProductsArray.filter((item) => {
    if (item.docId === docId) {
      return item;
    }
  });
  return [
    {
      productData,
    },
  ];
}

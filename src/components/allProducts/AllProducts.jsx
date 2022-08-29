import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../productCard/ProductCard";
import UseAllProducts from "./UseAllProducts";

export default function AllProducts() {
  const [{ getProductsArray,getFavProductsArray ,}] = UseAllProducts();
  return (
    <div>
      <Grid container >
        <Grid  item xs={12} sm={12} lg={12} md={12} >
          <Grid container spacing={2} >
            {getProductsArray.map((singleProduct) => {
              return (
                <ProductCard
                  singleProduct={singleProduct}
                  key={singleProduct.docId}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

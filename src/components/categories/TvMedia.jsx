import React from 'react'
import {
  Container,
    Grid,
} from "@mui/material";
import ProductCard from '../productCard/ProductCard'
import UseAllProducts from '../allProducts/UseAllProducts'
export default function Tablet() {
  const [{ getProductsArray }] = UseAllProducts();
  let tvMedia = getProductsArray.filter((row)=>{
        if(row.category=="Agricultural Properties"){
            return row;
        }
    });
  return (
    <div>
    <Container>
      <h1>Agricultural Properties</h1>
      <Grid item xs={12} sm={12} md={12} lg={12}>

     
      <Grid container spacing={2}>

        {tvMedia.map((singleProduct) => {
          return (
         
             <ProductCard singleProduct={singleProduct} />
          );
        })}
      </Grid>
      </Grid>
    </Container>
  </div>
  )
}

import React from 'react'
import {
  Container,
    Grid,
} from "@mui/material";
import ProductCard from '../productCard/ProductCard'
import UseAllProducts from '../allProducts/UseAllProducts'
export default function Phone() {
  const [{ getProductsArray }] = UseAllProducts();
  let vehiclesCategory = getProductsArray.filter((row)=>{
        if(row.category=="Mixed-Use Properties"){
            return row;
        }
    });
  return (
    <div>
    <Container>
      <h1>Mixed-Use Properties</h1>
      <Grid item xs={12} sm={12} md={12} lg={12}>

     
      <Grid container spacing={2}>

        {vehiclesCategory.map((singleProduct) => {
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

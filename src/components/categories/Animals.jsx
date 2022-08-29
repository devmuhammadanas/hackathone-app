import React from 'react'
import {
  Container,
    Grid,
} from "@mui/material";
import ProductCard from '../productCard/ProductCard'
import UseAllProducts from '../allProducts/UseAllProducts'
export default function Animals() {
  const [{ getProductsArray }] = UseAllProducts();
  let animalsCategory = getProductsArray.filter((row)=>{
        if(row.category=="Buildings"){
            return row;
        }
    });
console.log('animals',animalsCategory);
  return (
    <div>
    <Container>
      <h1>Buildings</h1>
      <Grid item xs={12} sm={12} md={12} lg={12}>

     
      <Grid container spacing={2}>

        {animalsCategory.map((singleProduct) => {
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

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Grid,
} from "@mui/material";
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./ProductCardStyle.css";
import UseFvrt from "../../pages/fvrt/UseFvrt";
import UseAllProducts from "../allProducts/UseAllProducts";

export default function ProductCard({ singleProduct }) {
const user = useSelector(state=>state.AuthReducer.user)
// console.log('user in card', user);
  const [{favButtonHandler, 
    setFavLoading, 
    setUnFavLoading,unFavButtonHandler}]= UseFvrt();
const [{getFavProductsArray,getProductsArray,userId}]= UseAllProducts()


  return (
    <>
      <Card className="cardWrapper">
        <Link to={`/singleProduct/${singleProduct.docId}`}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={singleProduct.image}
          />
        </Link>
        <CardContent>
          <Typography variant="h5" component="div" className="textCard">
            Rs. {singleProduct.price}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="textCard">
            {singleProduct.title}
          </Typography>
        </CardContent>
        <CardActions>
        {
singleProduct.favUid == user?.uid?

<button className="unfvrtBtn" onClick={()=>unFavButtonHandler(singleProduct.favDocId)} >
<FavoriteBorderIcon fontSize="30" /> &nbsp; UnFavourite
</button>
:
<button className="fvrtBtn" onClick={()=>favButtonHandler(singleProduct)} >
<FavoriteBorderIcon fontSize="30" /> &nbsp; Favourite
</button>
        }  
        </CardActions>
      </Card>
    </>
  );
}

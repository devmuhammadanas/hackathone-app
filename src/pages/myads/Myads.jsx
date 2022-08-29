import {
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Grid,
  Button,
  modalUnstyledClasses,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import "./MyadsStyle.css";
import { Link } from "react-router-dom";
import UseMyds from "./UseMyds";
import { useSelector } from "react-redux";
import UseAllProducts from "../../components/allProducts/UseAllProducts";
export default function Myads() {
  const [{ ctaDeleteHandler }] = UseMyds();
  const user = useSelector((state) => state.AuthReducer.user);
  const [{ getProductsArray }] = UseAllProducts();
  const { id: docId } = useParams();
  const myads = getProductsArray?.filter((row) => {
    if (row?.userId === user?.uid) {
      return row;
    }
  });
  console.log("data in My ads page", myads);

  return (
    <div>
      <Container>
        <h1>My Ads</h1>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={2}>
            {myads.map((myad) => {
              return (
                <Card className="cardWrapper">
                  <Link to={`/detail/${myad.docId}`}>
                 
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={myad.image}
                  />
 </Link>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      className="textEllips"
                    >
                      Rs. {myad.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="textEllips"
                    >
                      {myad.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <button
                      className="dltBtn"
                      onClick={() => ctaDeleteHandler(myad.docId)}
                    >
                      Delete
                    </button>
                    <Link to={`/edit/${myad.docId}`}>
                      <button color="inherit" className="editBtn">
                        Edit
                      </button>
                    </Link>
                  </CardActions>
                </Card>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

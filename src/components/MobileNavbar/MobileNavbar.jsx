import React from 'react'
import { Grid, Hidden } from '@mui/material'
import {Link} from 'react-router-dom';
export default function MobileNavbar() {
    const categories = [
        {
            // image : <img src="https://img.icons8.com/color/48/000000/carpool.png" />,
          title: "Tiny Home",
          link: "/Tiny Home",
        },
        {
            // image : <img src="https://img.icons8.com/color/48/000000/android.png" />,
          title: "Hous",
          link: "/Hous",
        },
        {
            // image : <img src="https://img.icons8.com/color/48/000000/motorcycle.png"  />,
          title: "Mixed-Use Properties",
          link: "/Mixed-Use Properties",
        },
        {
            // image : <img src="https://img.icons8.com/color/48/000000/appliances.png" />,
          title: "Agricultural",
          link: "/Agricultural",
        },
        {
            // image : <img src="https://img.icons8.com/color/48/000000/land-sales.png" />,
          title: "Industrial Properties",
          link: "/Industrial Properties",
        },
        {
            // image : <img src="https://img.icons8.com/color/48/000000/group-of-animals.png" />,
          title: "Rods",
          link: "/Rods",
        },
        {
            // image : <img src="https://img.icons8.com/color/48/000000/android-tablet.png" />,
          title: "Buildings",
          link: "/Buildings",
        },
        {
            // image : <img src="https://images.app.goo.gl/YxmoVo2sUW9U9Jwa8" />,
          title: "Aptaments",
          link: "/Aptaments",
        },
        {
            //  image : <img src="https://img.icons8.com/color/48/000000/android.png" />,
          title: "Industrial Properties",
          link: "/IndustrialProperties",
        },
      ];
    


  return (
    <div>
        <Hidden mdUp>
<div className='MblNavWrapper'>
<Grid container spacing={2}>
<Grid item xs={6} sm={4}>
<h4 style={{textAlign:'center'}}>Browse Categories</h4>
</Grid>
<Grid item xs={6} sm={8}>
                            </Grid>

{
    categories.map((item)=>{
        return (
            <Grid item xs={4}>
                 <Link className='link' to={item.link}>
                                        <div className='items'>
                                            {item.image}
                                            <h5>{item.title}</h5>
                                        </div>
                                        </Link>
                </Grid>
        )
    })
}


</Grid>
</div>
        </Hidden>
    </div>
  )
}

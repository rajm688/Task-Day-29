import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react"
export function Cards({ name, power, weakness, img, description,deletebutton }) {
 const [style,setStyle] = useState(" ")
 const changecolor = {color:style}
  return (
    <div>
      <Card className="card">
        <CardMedia component="img" image={img} alt="green iguana" />
        <CardContent>
          <div className="basics">
          <Typography variant="h6" gutterBottom component="div">
      {name}
      </Typography>
            <IconButton size="small" onClick={()=>{setStyle(style==="red"? "black":"red")}} style={changecolor}  aria-label="like">
        <FavoriteIcon  />
      </IconButton>
            <Chip color="success" label={power} />
            <Chip color="warning" label={weakness} />
            {deletebutton}

          </div>

          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

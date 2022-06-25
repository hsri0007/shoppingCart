import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useShoppingCart } from '../context/ShoppingCartContext';

type storeitemProps = {
       id: number;
       name: string;
       price: number;
       imgUrl: string;
}

type propsmain = {
  storeitem : storeitemProps
}

export default function CardComponent({storeitem}:propsmain) {

  const {
    gt,
    inc,
    dec,
    rm
} = useShoppingCart()

const qt = gt(storeitem.id)

  return (
    <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={storeitem.imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {storeitem.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {qt}
        </Typography>
      </CardContent>
      {qt>0?<CardActions>
        <Button variant='outlined' size="small" onClick={()=>dec(storeitem.id)} >-</Button>
        <Button variant='outlined' size="small" onClick={()=>inc(storeitem.id)}  >+</Button>
      </CardActions>:
      <CardActions>
        <Button variant='outlined' size="small" onClick={()=>inc(storeitem.id)} >Add to Cart</Button>
      </CardActions>}
    </Card>
  );
}

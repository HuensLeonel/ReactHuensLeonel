import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

export default function CartWidget({items}) {
  const {getItemQty} = useContext(CartContext);
  return (
    <>
      <ShoppingCartIcon/>
      {getItemQty() !== 0 ? getItemQty() : 0 }
    </>
  )
}

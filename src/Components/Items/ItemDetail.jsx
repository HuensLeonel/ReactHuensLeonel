import React, { useContext } from 'react'
import ItemCount from './ItemCount';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

export default function ItemDetail({objeto}) {
  
  let [estItemCount, setItemCount] =  useState(1)

  const {isInCart, addItem} = useContext(CartContext);

  const onAdd = (cantidad) => {
    if(cantidad > 0){
      //alert(`se agregaron ${cantidad} productos`)
      setItemCount(0)
      isInCart(objeto.id)
      addItem(objeto, cantidad)
    }else{
      alert(`Debe agregar al menos 1 productos`)
    }
}
  return (
    <>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={objeto.imagen} style={{height: "80%" , width : "80%"}} alt=""/>
        </div>
        <div className="col-md-6">
        <h3>{objeto.descripcion}</h3>
        <h3>${objeto.precio}</h3>
        {estItemCount > 0 ? 
        <ItemCount stock={objeto.stock} inicio={0} onAdd={onAdd}/>
        : <Link to="/cart">Ir al carrito</Link>}
        </div>
      </div>
    </div>
    </>
  )
}

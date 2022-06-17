import React from 'react'
import ItemCount from './ItemCount';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export default function ItemDetail({objeto}) {
  let [estItemCount, setItemCount] =  useState(1)
  const onAdd = (cantidad) => {
    if(cantidad > 0){
      alert(`se agregaron ${cantidad} productos`)
      setItemCount(0)
    }else{
      alert(`Debe agregar al menos 1 productos`)
    }
}
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Imagen</h1>
        </div>
        <div className="col-md-6">
        <h3>{objeto.title}</h3>
        <h3>${objeto.price}</h3>
        {estItemCount > 0 ? 
        <ItemCount stock={15} inicio={0} onAdd={onAdd}/>
        : <Link to="/cart">Ir al carrito</Link>}
        </div>
      </div>
    </div>
    
    </>
  )
}

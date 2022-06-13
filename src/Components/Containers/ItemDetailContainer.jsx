import React from 'react'
import ItemDetail from '../Items/ItemDetail'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {

    const {id} =  useParams();
    const [Objeto,setObjeto] = useState({});
   
    useEffect(() => {
      setTimeout(() => {
          fetch('https://api.mercadolibre.com/items?ids='+id)
          .then(res => res.json())
          .then(res => (setObjeto(res[0].body)))
          .catch(res => console.error("Error",res.error))
        }, 1000);
    },[id])
    
  return (
    <>
      {Object.keys(Objeto).length > 0 ? <ItemDetail objeto={Objeto} /> : <h3>LOADING...</h3> }
    </>
  )
}

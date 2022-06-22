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
      {Object.keys(Objeto).length > 0 ? <ItemDetail objeto={Objeto} /> : 
      <div class="d-flex justify-content-center">
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      }
    </>
  )
}

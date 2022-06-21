import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../Items/ItemList'

function ItemListContainer({greeting}) {
  
  const {id} =  useParams();
  const [Objetos,setObjetos] = useState([]);

  useEffect(() => {
    //console.log('https://api.mercadolibre.com/sites/MLA/search?q='+id+'%27&limit=8')
    if (id !== undefined){
    setTimeout(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q='+id+'%27&limit=8')
        .then(res => res.json())
        .then(res => (setObjetos(res.results)))
        .catch(res => console.error("Error",res.error))
      }, 1000);
    }else{
    setTimeout(() => {
      fetch('https://api.mercadolibre.com/sites/MLA/search?q=computacion%27&limit=8')
      .then(res => res.json())
      .then(res => (setObjetos(res.results)))
      .catch(res => console.error("Error",res.error))
    }, 2000);
  }
  },[id])
  return (
      <>
       <h1>{greeting}</h1>
       <ItemList objetos={Objetos}></ItemList>    
      </>
  )
}

export default ItemListContainer
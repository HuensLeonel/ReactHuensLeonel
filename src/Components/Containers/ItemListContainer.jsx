import React, { useEffect, useState } from 'react'
import ItemList from '../Items/ItemList'

function ItemListContainer({greeting}) {

  const [Objetos,setObjetos] = useState([]);
  
  useEffect(() => {
    setTimeout(() => {
      fetch('https://api.mercadolibre.com/sites/MLA/search?q=computadora%27&limit=8')
      .then(res => res.json())
      .then(res => (setObjetos(res.results)))
      .catch(res => console.error("Error",res.error))
    }, 2000);
  }, [])

  console.log(Objetos)
  
  return (
      <>
       <h1>{greeting}</h1>
       <ItemList objetos={Objetos}></ItemList>    
      </>
  )
}

export default ItemListContainer
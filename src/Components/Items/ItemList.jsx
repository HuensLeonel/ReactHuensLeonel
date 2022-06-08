import React from 'react'
import Item from './Item'

function ItemList({objetos}) {
  return (
    <>
    <div className="container">
      <div className="row">
          {objetos.map(obj => <Item key={obj.id} objeto={obj}/>)}
      </div>
    </div>  
    </>
  )
}

export default ItemList
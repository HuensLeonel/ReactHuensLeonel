import React from 'react'
import ItemCount from './ItemCount';

export default function ItemDetail({objeto}) {
  const onAdd = (cantidad) => {
    if(cantidad > 0){
      alert(`se agregaron ${cantidad} productos`)
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
        <ItemCount stock={15} inicio={0} onAdd={onAdd}/>
        </div>
      </div>
    </div>
    
    </>
  )
}

import * as React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';

export default function Item({key,objeto}) {
  return (
    <>
    <div className="col-sm-3 col-md-4 col-lg-3">
      <div className="contenedor_cart">
        <div className="card" style={{ width: "18rem" }}>
          <img src={objeto.imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">${objeto.precio}</h3>
              <p className="card-text">{(objeto.descripcion.substr(0,90) + '...')}</p>
              <Link to={`/producto/`+objeto.id}><boton>Detalle</boton></Link>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

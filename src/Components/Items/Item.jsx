import * as React from 'react';
import './Item.css'

export default function Item({key,objeto}) {
  return (
    <>
    <div className="col-sm-3 col-md-4 col-lg-3">
      <div className="contenedor_cart">
        <div id={key} className="card" style={{ width: "18rem" }}>
          <img src={objeto.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">${objeto.price}</h3>
              <p className="card-text">{(objeto.title.substr(0,90) + '...')}</p>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

import React from 'react'
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataObjectOutlined } from '@mui/icons-material';
export default function Cart() {
    const {cart, getItemPrice,emptyCart ,deleteItem} = useContext(CartContext);

    return (
    <>
    {Object.keys(cart).length > 0 
    ? // true
    <>
    <div className="container mt-3">
    <button type="button" class="btn btn-danger" onClick={emptyCart}>Vaciar</button>
        <div className="row mt-3">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <ul class="list-group list-group">
                    {cart.map((element,item)=> {
                        return (
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div key={item} class="ms-2 me-auto">
                                    <div class="fw-bold">
                                    <span class="badge bg-primary rounded-pill">{element.cantidad}</span>
                                    <img alt="" src={element.imagen} style={{height: "10%" , width : "10%"}}/>
                                    {element.descripcion.substr(0,65) + '...'}
                                    </div>
                                </div>
                                <button type="button" class="btn "><span style={{color: 'green'}}>${element.precio}</span></button>
                                <button type="button" class="btn " onClick={() => {deleteItem(element.id)}}><span style={{color: 'red'}}>Eliminar</span></button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div class="card" style={{width: "18rem"}}>
                    <div class="card-body text-center">
                        <h5 class="card-title">TOTAL</h5>
                        <h6 class="card-subtitle mb-2 text-muted">DE TU COMPRA</h6>
                        <h2> ${getItemPrice().toFixed(2)}</h2>
                        <div className=" mt-4">
                            <button class="btn btn-success" type="button">FINALIZAR LA COMPRA</button>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
    </>
    : // false 
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-4 col-4"></div>
            <div className="col-md-4 col-lg-4 col-sm-4 col-4">
                <h1>Tu carrito esta vacio</h1>           
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 col-4"></div>
        </div>
    </div>
    </> 
    }
    <div className="container">
        <div className="row">
            <div className="col">
             <Link to={`/Home`}><button class="btn btn-success" type="button">Volver</button></Link>
            </div>
        </div>
    </div>
    </>
  )
}

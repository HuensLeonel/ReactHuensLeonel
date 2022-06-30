import React from 'react'
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
export default function Cart() {
    const {cart, getItemPrice,emptyCart ,deleteItem} = useContext(CartContext);

    return (
    <>
    {Object.keys(cart).length > 0 
    ? // true
    <>
    <div className="container mt-3">
    <button type="button" className="btn btn-danger" onClick={emptyCart}>Vaciar</button>
        <div className="row mt-3">
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <ul className="list-group list-group">
                    {cart.map((element,item)=> {
                        return (
                            <li key={item} className="list-group-item d-flex justify-content-between align-items-start">
                                <div  className="ms-2 me-auto">
                                    <div className="fw-bold">
                                    <span className="badge bg-primary rounded-pill">{element.cantidad}</span>
                                    <img alt="" src={element.imagen} style={{height: "10%" , width : "10%"}}/>
                                    {element.descripcion.substr(0,65) + '...'}
                                    </div>
                                </div>
                                <button type="button" className="btn "><span style={{color: 'green'}}>${element.precio}</span></button>
                                <button type="button" className="btn " onClick={() => {deleteItem(element.id)}}><span style={{color: 'red'}}>Eliminar</span></button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-body text-center">
                        <h5 className="card-title">TOTAL</h5>
                        <h6 className="card-subtitle mb-2 text-muted">DE TU COMPRA</h6>
                        <h2> ${getItemPrice().toFixed(2)}</h2>
                        <div className=" mt-4">
                        <Link to={`/checkout`}><button className="btn btn-success" type="button">FINALIZAR LA COMPRA</button></Link>
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
             <Link to={`/Home`}><button className="btn btn-success" type="button">Volver</button></Link>
            </div>
        </div>
    </div>
    </>
  )
}

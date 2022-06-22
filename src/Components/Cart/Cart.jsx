import React from 'react'
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';
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
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <ul class="list-group list-group">
                    {cart.map((element,item)=> {
                        return (
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div key={item} class="ms-2 me-auto">
                                    <div class="fw-bold">
                                    <span class="badge bg-primary rounded-pill">{element.cantidad}</span>
                                    <img src={element.pictures[0].secure_url} alt="" style={{height: "10%" , width : "10%"}}/>
                                    {element.title}
                                    </div>
                                </div>
                                <button type="button" class="btn btn-success">${element.price}</button>
                                <button type="button" class="btn btn-danger" onClick={() => {deleteItem(element.id)}}>Eliminar</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
    <div class="d-grid gap-2 col-6 mx-auto mt-5">
        <button class="btn btn-success" type="button">total: ${getItemPrice()}</button>
    </div>
    </>
    : // false 
    <>
        <h1>Tu carrito esta vacio</h1>
    </> 
    }
    
    </>
  )
}

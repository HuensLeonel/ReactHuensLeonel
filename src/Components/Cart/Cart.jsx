import React from 'react'
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

export default function Cart() {
    const {cart} = useContext(CartContext);

  return (
    <>
    {cart.length > 0 
    ? // true
    cart.map((element,item)=> {
        return (
            <div key={item}>
                <h1>{element.title}</h1>
                <h1>{element.price}</h1>
            </div>
        )
    })
    : // false 
    <div>
        <h1>Tu carrito esta vacio</h1>
    </div> 
    }
    </>
  )
}

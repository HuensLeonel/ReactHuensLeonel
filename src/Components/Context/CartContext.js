import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const {Provider} = CartContext;

export default function MyProvider({children}){

  const [cart,setCart] = useState([]);

  //Esta o no el carrito
  const isInCart = (id) => {
    return cart.some(x => x.id === id)
  }

  //Añadir al carrito, sin pisar a los agregados anteriormente y si esta duplicado sumar cantidad
  const addItem = (item,cantidad) => {
    const newItem = {
      ...item, cantidad
    } 

    if(isInCart(newItem.id)){
      const findProduct = cart.find(x => x.id === newItem.id);
      const porductIndex =  cart.indexOf(findProduct);
      const arrayAux = [...cart];
      arrayAux[porductIndex].cantidad += cantidad;
      setCart(arrayAux);
    }else{
      setCart([...cart], newItem)
    }
  } 

  //Vaciar el carrito
  const emptyCart = () => {
    setCart([])
  }

  //Eliminar item del carrito
  const deleteItem = (id) => {
    return cart.filter(x => x.id !== id)
  }

  //Obtener cantidad total de objetos
  const getItemQty = () => {
    return cart.reduce((total,item) => total += item.cantidad,0)
  }

  //Obtener precio total de todos los objetos
  const getItemPrice = () => {
    return cart.reduce((total,item) => total += item.price * item.cantidad,0)
  }

  return (
    <Provider value={{isInCart,addItem,emptyCart,deleteItem,getItemQty,getItemPrice}}>
    {children}
    </Provider>
  )
}


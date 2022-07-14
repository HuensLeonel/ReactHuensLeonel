import { getFirestore , collection, addDoc} from 'firebase/firestore';
import React, { useContext } from 'react'
import { useState } from 'react';
import { CartContext } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    
    let url = useNavigate()

    const {cart,getItemPrice,getItemQty,emptyCart} = useContext(CartContext);

    let db =  getFirestore()
    let coleccion = collection(db,'compras')
    
    const [name ,setName] = useState('')
    const [mail ,setMail] = useState('')
    const [apellido ,setApellido] = useState('')


    const addPedido = ()=>{
        if(name === '' || apellido === '' || mail ===''){
            alert('Debe ingresar nombre, apellido y mail')
        }else{
            
        const compra = {
            buyer: {name,apellido,mail},
            items: cart,
            cantidad_total_productos: getItemQty(),
            total: getItemPrice()
        }
        
        addDoc(coleccion,compra)
        .then(()=>{
            alert('Gracias por su compra')
            emptyCart()
            setTimeout(() => {
                url('/home')
            }, 1000);
           
        })
        
        }

    }

return (
    <>
    <div className='container'>
        <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input onChange={(e) => setName(e.target.value)} type="text" className="form-control"></input>
        </div>
        <div className="mb-3">
            <label  className="form-label">Apellido</label>
            <input onChange={(e) => setApellido(e.target.value)} type="text" className="form-control" ></input>
        </div>
        <div className="mb-3">
            <label className="form-label">Mail</label>
            <input onChange={(e) => setMail(e.target.value)} type="mail" className="form-control" ></input>
        </div>
        <button onClick={() => {addPedido()}} className="btn btn-primary">Terminar</button>
    </div>
    </>
  )
}

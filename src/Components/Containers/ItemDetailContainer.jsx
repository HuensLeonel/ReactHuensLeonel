import React from 'react'
import ItemDetail from '../Items/ItemDetail'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {  getFirestore , doc , getDoc} from "firebase/firestore";

export default function ItemDetailContainer() {

    const {id} =  useParams();
    const [Objeto,setObjeto] = useState({});
    const db =  getFirestore();

    useEffect(() => {
      const obj = doc(db,'productos',id)
      getDoc(obj)
      .then((res) =>{
        console.log(res.id )
          setObjeto({id: res.id ,...res.data() })
      })
    },[id])
    
  return (
    <>
      {Object.keys(Objeto).length > 0 ?
       <ItemDetail objeto={Objeto} /> 
       : 
      <div class="d-flex justify-content-center">
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-danger" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      }
    </>
  )
}

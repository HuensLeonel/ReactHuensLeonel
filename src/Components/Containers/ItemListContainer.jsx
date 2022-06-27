import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../Items/ItemList'
import { getDocs, getFirestore , collection, query, where} from "firebase/firestore";

function ItemListContainer({greeting}) {
  
  const {id} =  useParams();
  const [Objetos,setObjetos] = useState([]);
  const db =  getFirestore();

  useEffect(() => {
    let coleccion;
    if(id !== undefined){
      coleccion= query(collection(db,'productos'), where("categoria", "==", id))
    }else{
      coleccion = collection(db,'productos')
    }
    getDocs(coleccion)
      .then((res)=>{
        //console.log(res.docs[0].data());
        let arrayAux = []
        for (let index = 0; index < res.size; index++) {
          arrayAux.push({id: res.docs[index].id , ...res.docs[index].data() })
        }
        setObjetos(arrayAux)
      })
  },[id])
  return (
      <>
      {Object.keys(Objetos).length !== 0 ?
       <ItemList objetos={Objetos}></ItemList>    
       :
       <h1>Cargando...</h1>
      }
      </>
  )
}

export default ItemListContainer
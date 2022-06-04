import { useState } from "react";
import './ItemCount.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ItemCount({stock, inicio, onAdd}) {
    const [count , setCount] = useState(inicio);

    const sumar = () =>{
      count < stock ? setCount(count + 1) : alert('no hay mas stock del producto'); 
    }

    const restar = () =>{
      count > inicio ? setCount(count - 1) : alert('No se puede agregar menos');
    }
    
    const reset = () =>{
      setCount(inicio)
    }

    return (
      <>
      <div className="container-form">
        <div className="container-count">
          <h1>{count}</h1>
        </div>
         <div className="container-buttons">
           <div className="btn-sum">
            <a href="#A" onClick={sumar}><KeyboardArrowUpIcon/></a>
           </div>
           <div className="btn-res">
            <a href="#A" onClick={restar}><KeyboardArrowDownIcon/></a>
           </div>
         </div>   
      </div>
      <button onClick={() =>{onAdd(count); reset();}}>Agregar</button>
      </>

  )
}

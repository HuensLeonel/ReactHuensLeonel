import {Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/Containers/ItemListContainer";
import ItemDetailContainer from "./Components/Containers/ItemDetailContainer";

function App() {
  
  return(
    <>
        <Navbar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting={'Hola Comision 31205'}/>}></Route>
            <Route path='/home' element={ <ItemListContainer greeting={'Hola Comision 31205'}/>}></Route>
            <Route path='/home/productos' element={ <ItemListContainer greeting={'Hola Comision 31205'}/>}></Route>
            <Route path='/productos' element={ <ItemListContainer greeting={'Hola Comision 31205'}/>}></Route>
            <Route path='/productos/categoria/:id' element={ <ItemListContainer greeting={'Hola Comision 31205'}/>}></Route>
            <Route path='/producto/:id' element={<ItemDetailContainer/>}></Route>
          </Routes>
    </>
  );
}

export default App;

import {Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/Containers/ItemListContainer";
import ItemDetailContainer from "./Components/Containers/ItemDetailContainer";
import MyProvider from "./Components/Context/CartContext";
import Cart from "./Components/Cart/Cart";
import { initializeApp } from "firebase/app";
import Checkout from "./Components/Cart/Checkout";


function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAhVmQjmWT-GSin872Bk8s-IavnEoydvqM",
    authDomain: "venexcoderhouse.firebaseapp.com",
    projectId: "venexcoderhouse",
    storageBucket: "venexcoderhouse.appspot.com",
    messagingSenderId: "459296664026",
    appId: "1:459296664026:web:2197008f86ecd74a5338e3"
  };
  
  initializeApp(firebaseConfig);
  
  return(
    <>
    <MyProvider>
        <Navbar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting={'Hola Comision 31205'}/>}></Route>
            <Route path='/home' element={ <ItemListContainer greeting={'Hola Comision 31205'}/>}></Route>
            <Route path='/home/productos' element={ <ItemListContainer greeting={'Hola Comision 31205'}/>}></Route>
            <Route path='/productos' element={ <ItemListContainer greeting={'Hola Comision 31205'}/>}></Route>
            <Route path='/productos/categoria/:id' element={ <ItemListContainer greeting={'Hola Comision 31205'}/>}></Route>
            <Route path='/producto/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
    </MyProvider>
    </>
  );
}

export default App;

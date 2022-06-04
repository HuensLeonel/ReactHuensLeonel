import ItemListContainer from "./Components/Containers/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar"
import ItemCount from './Components/Containers/ItemCount'

function App() {

  const onAdd = (cantidad) => {
    if(cantidad > 0){
      alert(`se agregaron ${cantidad} productos`)
    }else{
      alert(`Debe agregar al menos 1 productos`)
    }
  }

  return(
    <>
      <Navbar/>
      <ItemListContainer greeting={'Hola Comision 31205'}/>
      <ItemCount stock={15} inicio={0} onAdd={onAdd}/>
    </>
  );
}

export default App;

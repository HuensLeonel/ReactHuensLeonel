import { Link } from 'react-router-dom';
import CartWidget from '../Cart/CartWidget';
import {CartContext} from '../Context/CartContext';
import {useContext} from 'react';
import './Navbar.css';

function Navbar() {
  const {getItemQty} = useContext(CartContext);

  return (
    <div className='contenedor'>
      <div className='contenedor-nav'>
        <div className="">
          <a href="#Accion">
            <img src="https://www.venex.com.ar/images/trucklogo.png" alt="" />
            <span>Segui tu compra</span>
          </a>
        </div>
        <div className="">
         <a href="#Accion">
            <img src="https://www.venex.com.ar/images/pickuppointlogo.png" alt="" />
            <span>Retira tu compra</span>
          </a>       
        </div>
        <div className="">
          <a href="#Accion">
            <img src="https://www.venex.com.ar/images/auricularescentrodeayuda.png" alt="" />
            <span>Centro de Ayuda</span>
          </a>       
        </div>
      </div>
      <div className='contenedor-bar'>
        <div className="contenedor-bar-logo">
          <a href="#Accion">
            <Link to={`/`}><img src="https://www.venex.com.ar/fil/logo/header_logo_nuevo.png" alt="" /></Link>
          </a>      
        </div>
        <div className="contenedor-bar-form">
          <form action="">
            <input title="" id="" placeholder='Eso que querés.. buscalo acá' className="form-control" />
          </form>
        </div>
        <div className="contenedor-bar-inicio">
          <div className="contenedor-bar-inicio-usu">
            <a className="" href="#Accion">Bienvenida/o Usuario</a>
          </div>
          <div className="contenedor-bar-inicio-carro">
            {getItemQty() === 0 ? <></> : 
              <Link to={`/cart`}> <CartWidget items={4}/></Link>
            }
          </div>
        </div>
      </div>
      <div className="contenedor-menu">
        <div className="contenedor-menu-items">
          <ul>
            <li><Link to={``}>Categorias | </Link></li>
            <li><Link to={`productos/categoria/pc`}>Pc de Escritorio </Link></li>
            <li><Link to={`productos/categoria/notebook`}>Netbooks </Link></li>
            <li><Link to={`productos/categoria/gpu`}>Placas de Video </Link></li>
            <li><Link to={`productos/categoria/monitores`}>Monitores </Link></li>
            <li><Link to={`productos/categoria/procesadores`}>Micros</Link></li>
            <li><Link to={``}>Imperdibles</Link></li>
            <li><Link to={``}>|Arma tu PC|</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
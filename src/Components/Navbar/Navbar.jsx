import CartWidget from './CartWidget';
import './Navbar.css';

function Navbar() {
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
            <img src="https://www.venex.com.ar/fil/logo/header_logo_nuevo.png" alt="" />
          </a>      
        </div>
        <div className="contenedor-bar-form">
          <form action="">
            <input title="" id="" placeholder='Eso que querés.. buscalo acá' autocomplete="off" class="form-control" data-original-title=""/>
          </form>
        </div>
        <div className="contenedor-bar-inicio">
          <div className="contenedor-bar-inicio-usu">
            <a class="" href="#Accion">Bienvenida/o Usuario</a>
          </div>
          <div className="contenedor-bar-inicio-carro">
            <CartWidget items={4}/>
          </div>
        </div>
      </div>
      <div className="contenedor-menu">
        <div className="contenedor-menu-items">
          <ul>
            <li><a href="#accion">Categorias | </a></li>
            <li><a href="#accion">Pc de Escritorio </a></li>
            <li><a href="#accion">Netbooks </a></li>
            <li><a href="#accion">Placas de Video </a></li>
            <li><a href="#accion">Monitores </a></li>
            <li><a href="#accion">Micros</a></li>
            <li><a href="#accion">Imperdibles</a></li>
            <li><a href="#accion">|Arma tu PC|</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
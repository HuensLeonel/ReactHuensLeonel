import './Navbar.css'

function Navbar() {
  return (
    <div className='container'>
      <div className='container-nav'>
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
      <div className='container-bar'>
        <div className="container-bar-logo">
          <a href="#Accion">
            <img src="https://www.venex.com.ar/fil/logo/header_logo_nuevo.png" alt="" />
          </a>      
        </div>
        <div className="container-bar-form">
          <form action="">
            <input title="" id="" placeholder='Eso que querés.. buscalo acá' autocomplete="off" class="form-control" data-original-title=""/>
          </form>
        </div>
        <div className="container-bar-inicio">
          <div className="container-bar-inicio-usu">
            <a class="" href="#Accion">Bienvenida/o Usuario</a>
          </div>
          <div className="container-bar-inicio-carro">
            
          </div>
        </div>
      </div>
      <div className="container-menu">
        <div className="container-menu-items">
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
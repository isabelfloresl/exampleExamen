import { NavLink } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Universidad from '../pages/Universidad'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
           <img src={require ("../image/utslogo.png")} alt="10" width="70" height="34"/> 
            </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="nav navbar-nav navbar-center" >
              <li class="nav-item">
              <NavLink to='/' className="nav-item nav-link">Inicio</NavLink>
              </li>
              <li class="nav-item">
               <NavLink to='/universidad' className="nav-item nav-link">Universidad</NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Estudiantes</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Carreras
                </a>
               
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Navbar
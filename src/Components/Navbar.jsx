import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../routes'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <img src="images/DH.png" style={{width:'150px',height:'30px'}} alt="Doctor" />
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home}><h3>Home</h3></Link>
      <Link to={routes.destacados}><h3>Destacados</h3></Link>
      <Link to={routes.contacto}><h3>Contacto</h3></Link>
      
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar
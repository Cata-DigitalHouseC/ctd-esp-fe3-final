import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../routes'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const navigate = useNavigate()
  const {themeState, themeDispatch} = useContextGlobal()

  const switchTheme = () => {
    if(themeState.theme){
      themeDispatch({type:'SWITCH_DARK'})
    }else{
      themeDispatch({type:'SWITCH_LIGHT'})
    }
  }

  return (
    <nav className="navBar">
      <img src="/images/DH.png" style={{width:'150px',height:'30px'}} alt="Doctor" />
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to={routes.home}><h3 className="h3NavBar">Home</h3></Link>
      <Link to={routes.destacados}><h3 className="h3NavBar">Destacados</h3></Link>
      <Link to={routes.contacto}><h3 className="h3NavBar">Contacto</h3></Link>
      
      <button onClick={switchTheme}>{themeState.theme ? '🌑':'☀️' }</button>
      <button onClick={() => navigate(-1)}>↩</button>
    </nav>
  )
}

export default Navbar;
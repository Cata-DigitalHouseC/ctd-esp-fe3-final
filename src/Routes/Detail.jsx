import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const [dentist, setDentist] = useState({})
  const params = useParams()
  const url = 'https://jsonplaceholder.typicode.com/users/'+params.id


  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setDentist(data))
  }, [])



  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className="dentistDetail">
        <img src="/images/doctor.jpg" style={{width:"300px",height:'400px'}} alt="doctor"/> 
        <label><h3>Nombre:</h3> {dentist.name}</label>
        <h3>Email:</h3> {dentist.email}
        <h3>Telefono:</h3> {dentist.phone}
        <h3>Sitio Web:</h3> {dentist.website}
      </div>

    </>
  )
}

export default Detail
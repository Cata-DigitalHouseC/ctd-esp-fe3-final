import React from "react";
import { Link } from "react-router-dom";
import general from '../css/general.module.css'



const Card = ({ dentist }) => {

  let favs= localStorage.getItem('favs')

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if(favs.includes({id:dentist.id}))
    {
      alert('Ya esta en favoritos')
    } else {
      if(favs){
        let parsedFavs = JSON.parse(favs)
        favs=[...parsedFavs,dentist]
      }else{
        favs=[dentist]
      }
      localStorage.setItem('favs',JSON.stringify(favs))
      alert('Dentista agregado a favoritos')
    }
  }

  return (
    <div className="card" style={{width:"300px",height:'500px'}}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="images/doctor.jpg" style={{width:"200px",height:'700px'}} alt="doctor"/>
        <p style={{fontSize:'15px', color:"#126399", textAlign:"center", fontWeight:"500"}}>{dentist.name} <br/>
        {dentist.username} <br/>
        {dentist.id}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link key={dentist.id} to={'/dentist/'+dentist.id}>
            <h3 style={{color:"blue"}}>Details🔍</h3>
          </Link>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton"> <h3>Add to Favs⭐</h3></button>
    </div>
  );
};

export default Card;

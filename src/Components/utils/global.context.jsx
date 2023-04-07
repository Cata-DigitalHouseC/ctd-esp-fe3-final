import { createContext, useContext, useState, useEffect, useReducer } from "react";


export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);


//Para el theme
const themes = {
  dark:{
    theme:false,
    bgColor:'black',
    color: 'white'
  },
  light:{
    theme:true,
    bgColor:'white',
    color: 'black'
  }
}

const initialThemeState = themes.light
const themeReducer = (state, action) =>{
  switch(action.type){
    case 'SWITCH_DARK':
      return themes.dark
    case 'SWITCH_LIGHT':
      return themes.light
    default:
      throw new Error
  }
}

//Para los favs en el localstorage
const initialFavState= JSON.parse(localStorage.getItem('favs')) || []
const favReducer = (state, action) =>{
  switch(action.type){
    case 'ADD_FAV':
      return [...state,action.payload]
    default:
      throw new Error
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  //Consultar datos de la Api

  const [dentistList, setDentistList] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setDentistList(data))
  }, [])

  //Cambiar el theme

  const[themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)

  //Favs en el localstorage
  const [favState, favDispatch] = useReducer(favReducer,initialFavState)


  useEffect(()=>{
    localStorage.setItem('favs',JSON.stringify(favState))
  },[favState])

  
  return (
    <ContextGlobal.Provider value={{dentistList, setDentistList, themeState, themeDispatch, favState, favDispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);

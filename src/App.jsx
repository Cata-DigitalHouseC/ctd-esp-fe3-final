
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./routes";
import Home from "./Routes/Home.jsx";
import Contact from "./Routes/Contact.jsx";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import './App.css'
import { useContextGlobal } from "./Components/utils/global.context";


function App() {

  const {themeState} = useContextGlobal()

  return (
      <div className={themeState.theme? 'App': 'App-dark'} style={{backgroundColor: themeState.bgColor, color: themeState.color }}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.destacados} element={<Favs/>}/>
            <Route path={routes.contacto} element = {<Contact/>}/>
            <Route path={routes.detalleDentista} element={<Detail/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;

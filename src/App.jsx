import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing";
import Blog from "./Components/Blog"
import Login from "./Components/Login";
import Registro from "./Components/Registro";
import Reservacion from "./Components/Reservacion"
import './index.css'

function App() {

  return (
    <div className="p-5 bg-cremaFondo min-h-screen ">
    <section className="  border-solid border-vino border-2 rounded-lg">
    <Routes>
            <Route index element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />}></Route>
            <Route path="/blog" element={<Blog />} />
            <Route path="/reservacion" element={<Reservacion />} />
      </Routes>
    </section>
    </div>
  )
}

export default App

import Nav from "./Nav";
import React, { useContext, useState } from "react";
import { AuthContext } from "../UseContext/AuthContext";

function Registro() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { register } = useContext(AuthContext);
  const submitLogin = (event) => {
    event.preventDefault();
    register(user, email, password);
  };
  return (
    <>

      <section className=" flex flex-col items-center justify-center font-CinzelDecorative text-vino min-h-screen">
      <Nav />
        <img src="src\assets\logoRostro.png" className="sm:w-[20%] lg:w-[10%]"/>
        <h1 className="text-3xl sm:text-4xl m-10 md:text-5xl ">Registro</h1>

        <form
          className="flex flex-col items-center justify-center text-vino font-BreeSerif text-xl sm:w-[60%] sm:text-2xl mb-32 lg:w-[50%]"
          onSubmit={submitLogin}
        >
          <label className="text-start w-full mt-3 mb-3 sm:text-3xl sm:mt-5">Usuario</label>
          <input
            type="text"
            className="bg-vino rounded-xl p-2 text-white w-full md:text-2xl md:p-3"
            onChange={(e) => setUser(e.target.value.trim())}
          ></input>

          <label className="text-start w-full mt-3 mb-3 sm:text-3xl sm:mt-5">
            Correo Electronico
          </label>
          <input
            type="email"
            className="bg-vino rounded-xl p-2 text-white w-full md:text-2xl md:p-3"
            onChange={(e) => setEmail(e.target.value.trim())}
          ></input>

          <label className="text-start w-full mt-3 mb-3 sm:text-3xl sm:mt-5">Clave</label>
          <input
            type="password"
            className="bg-vino rounded-xl p-2 text-white w-full md:text-2xl md:p-3"
            onChange={(e) => setPassword(e.target.value.trim())}
          ></input>

          <button className="bg-vino rounded-xl text-white m-8 p-3 w-[60%] md:text-3xl md:mt-16">
            Registrarse
          </button>
        </form>
      </section>
    </>
  );
}

export default Registro;

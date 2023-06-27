import Nav from "./Nav";
import React, { useContext, useState } from "react";
import { AuthContext } from "../UseContext/AuthContext";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const submitLogin = (event) => {
    event.preventDefault();
    login(user, password);
  };

  return (
    <>
      <Nav />

      <section className=" flex flex-col items-center justify-center font-CinzelDecorative text-vino min-h-[100vh]">
        <img src="src\assets\logoRostro.png" />
        <h1 className="text-3xl">Administrador</h1>

        <form
          className="flex flex-col items-center justify-center text-vino font-BreeSerif text-xl"
          onSubmit={submitLogin}
        >
          <label className="text-start w-full mt-3 mb-3">Usuario</label>
          <input
            type="text"
            className="bg-vino rounded-xl p-2 text-white"
            onChange={(e) => setUser(e.target.value.trim())}
          ></input>

          <label className="text-start w-full mt-3 mb-3">Clave</label>
          <input
            type="password"
            className="bg-vino rounded-xl p-2 text-white"
            onChange={(e) => setPassword(e.target.value.trim())}
          ></input>

          <button className="bg-vino rounded-xl text-white m-8 p-3 w-[60%]">
            Ingresar
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;

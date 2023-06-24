import Nav from "./Nav";

function Registro(){
    return(
        <>
            <Nav/>

            <section className=" flex flex-col items-center justify-center font-CinzelDecorative text-vino min-h-[100vh]">
            <img src="src\assets\logoRostro.png" />
                <h1 className="text-3xl">Registro</h1>

                <form className="flex flex-col items-center justify-center text-vino font-BreeSerif text-xl">
                    <label className="text-start w-full mt-3 mb-3">Usuario</label>
                    <input type="text" className="bg-vino rounded-xl p-2 text-white"></input>

                    <label className="text-start w-full mt-3 mb-3">Usuario</label>
                    <input type="email" className="bg-vino rounded-xl p-2 text-white"></input>


                    <label className="text-start w-full mt-3 mb-3">Clave</label>
                    <input type="password"  className="bg-vino rounded-xl p-2 text-white"></input>

                    <button className="bg-vino rounded-xl text-white m-8 p-3 w-[60%]">Registrarse</button>
                </form>
            </section>
        </>
    )
}

export default Registro;
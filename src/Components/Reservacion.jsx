import Nav from "./Nav";

function Reservaciones(){
    return(
        <>
            <Nav/>

            <section className=" flex flex-col items-center justify-center font-CinzelDecorative text-vino min-h-[100vh]">
            <img src="src\assets\logoRostro.png" />
                <h1 className="text-3xl">Agenda tu cita</h1>

                <form className="flex flex-col items-center justify-center text-vino font-BreeSerif text-xl">
                    <label className="text-start w-full mt-3 mb-3">Nombre</label>
                    <input type="text" className="bg-vino rounded-xl p-2 text-white"></input>

                    <label className="text-start w-full mt-3 mb-3">Correo Electrónico </label>
                    <input type="email" className="bg-vino rounded-xl p-2 text-white"></input>


                    <label className="text-start w-full mt-3 mb-3">Servicio</label>
                    <select className="bg-vino rounded-xl p-3 text-white text-lg w-full">
                    <option>Selecciona tu servicio</option>
                    <option>Selecciona tu horario</option>
                    <option>Selecciona tu horario</option>
                    <option>Selecciona tu horario</option>
                    </select>

                    <label className="text-start w-full mt-3 mb-3">Horario</label>
                    <select className="bg-vino rounded-xl p-3 text-white text-lg w-full">
                    <option>Selecciona tu horario</option>
                    <option>Selecciona tu horario</option>
                    <option>Selecciona tu horario</option>
                    <option>Selecciona tu servicio</option>
                    </select>

                    <label className="text-start w-full mt-3 mb-3">Telefono</label>
                    <input type="phone" className="bg-vino rounded-xl p-2 text-white"></input>

                    <button className="bg-vino rounded-xl text-white m-8 p-3 w-[60%]">Resevar</button>
                </form>
            </section>
        </>
    )
}

export default Reservaciones;
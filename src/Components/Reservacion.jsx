import { useState } from "react";
import Nav from "./Nav"
import { Toaster, toast } from "react-hot-toast";

function Reservaciones() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [scheduleSelect, setScheduleSelect] = useState("");
  const [serviceSelect, setServiceSelect] = useState("");
  const [phone, setPhone] = useState("");

  fetch("http://localhost:3000/getService", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setService(data);
    })
    .catch((error) => {
      console.error(error);
    });

  fetch("http://localhost:3000/getSchedule", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setSchedule(data);
    })
    .catch((error) => {
      console.error(error);
    });
  const submitReservation = (event) => {
    event.preventDefault();

    if (!name || !email || !serviceSelect || !scheduleSelect || !phone) {
      toast.error("Datos incompletos, rellena todos los campos");
      return;
    } else {
      const dataForm = {
        name: name,
        email: email,
        service: serviceSelect,
        schedule: scheduleSelect,
        phone: phone,
      };
  
      fetch("http://localhost:3000/postReservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          toast.success('Reservacion enviada correctamente! Te enviaremos un correo con todos los detalles')
        })
        .catch((error) => {
          console.error(error);
          toast.error(error)
        });
    }
  };
  return (
    <>
    <Nav/>
    <Toaster />
      <section className=" flex flex-col items-center justify-center font-CinzelDecorative text-vino min-h-[100vh] gap-8">
        <img src="src\assets\logoRostro.png" />
        <h1 className="text-3xl md:text-4xl">Agenda tu cita</h1>

        <form
          className="flex flex-col items-center justify-center text-vino font-BreeSerif text-xl w-[80%] sm:w-[60%] md:text-2xl lg:w-[50%]"
          onSubmit={submitReservation}
        >
          <label className="text-start w-full mt-3 mb-3 ">Nombre</label>
          <input
            type="text"
            className="bg-vino rounded-xl p-2 text-white w-full md:text-2xl lg:p-3"
            onChange={(e) => setName(e.target.value.trim())}
          ></input>

          <label className="text-start w-full mt-3 mb-3">
            Correo Electrónico{" "}
          </label>
          <input
            type="email"
            className="bg-vino rounded-xl p-2 text-white w-full md:text-2xl lg:p-3"
            onChange={(e) => setEmail(e.target.value.trim())}
          ></input>

          <label className="text-start w-full mt-3 mb-3">Servicio</label>
          <select
            onChange={(e) => setServiceSelect(e.target.value.trim())}
            className="bg-vino rounded-xl p-3 text-white text-lg w-full md:text-2xl lg:p-3"
          >
          <option>Selecciona tu servicio</option>
            {service.map((service) => (
              <option key={service._id}>
                <option>{service.service}</option>
              </option>
            ))}
          </select>

          <label className="text-start w-full mt-3 mb-3">Horario</label>

          <select
            onChange={(e) => setScheduleSelect(e.target.value.trim())}
            className="bg-vino rounded-xl p-3 text-white text-lg w-full md:text-2xl lg:p-3"
          >
          <option>Selecciona tu horario</option>
            {schedule.map((schedule) => (
              <option key={schedule._id}>
                <option disabled={true}>{schedule.schedule}</option>
              </option>
            ))}
          </select>

          <label className="text-start w-full mt-3 mb-3 ">Telefono</label>
          <input
            type="number"
            className="bg-vino rounded-xl p-2 text-white w-full md:text-2xl lg:p-3"
            onChange={(e) => setPhone(e.target.value.trim())}
          ></input>

          <button className="bg-vino rounded-xl text-white m-8 p-3 w-[60%] sm:w-[50%] md:text-2xl">
            Resevar
          </button>
        </form>
      </section>
    </>
  );
}

export default Reservaciones;

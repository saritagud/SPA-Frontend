import { useState } from "react";

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
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <section className=" flex flex-col items-center justify-center font-CinzelDecorative text-vino min-h-[100vh]">
        <img src="src\assets\logoRostro.png" />
        <h1 className="text-3xl">Agenda tu cita</h1>

        <form
          className="flex flex-col items-center justify-center text-vino font-BreeSerif text-xl"
          onSubmit={submitReservation}
        >
          <label className="text-start w-full mt-3 mb-3">Nombre</label>
          <input
            type="text"
            className="bg-vino rounded-xl p-2 text-white"
            onChange={(e) => setName(e.target.value.trim())}
          ></input>

          <label className="text-start w-full mt-3 mb-3">
            Correo Electrónico{" "}
          </label>
          <input
            type="email"
            className="bg-vino rounded-xl p-2 text-white"
            onChange={(e) => setEmail(e.target.value.trim())}
          ></input>

          <label className="text-start w-full mt-3 mb-3">Servicio</label>
          <select
            onChange={(e) => setServiceSelect(e.target.value.trim())}
            className="bg-vino rounded-xl p-3 text-white text-lg w-full"
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
            className="bg-vino rounded-xl p-3 text-white text-lg w-full"
          >
          <option>Selecciona tu horario</option>
            {schedule.map((schedule) => (
              <option key={schedule._id}>
                <option disabled={true}>{schedule.schedule}</option>
              </option>
            ))}
          </select>

          <label className="text-start w-full mt-3 mb-3">Telefono</label>
          <input
            type="number"
            className="bg-vino rounded-xl p-2 text-white"
            onChange={(e) => setPhone(e.target.value.trim())}
          ></input>

          <button className="bg-vino rounded-xl text-white m-8 p-3 w-[60%]">
            Resevar
          </button>
        </form>
      </section>
    </>
  );
}

export default Reservaciones;

import { useState } from "react";
import ModalUpdate from "../Admin/Testimonios/ModalUpdateTestimony";
import ModalDelete from "../Admin/Testimonios/ModalDeleteTestimony";

function CardTestimonios() {
  const [testimony, setTestimony] = useState([]);
  fetch("http://localhost:3000/getTestimony", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setTestimony(data);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <>
      {testimony.map((testimony) => (
        <section
          key={testimony._id}
          className="bg-marronOscuro text-marronClaro font-BreeSerif flex flex-col items-center rounded-3xl p-4 w-[80%] m-5 "
        >
        <div className=" flex items-end justify-end end w-full">
          <ModalUpdate testimonyId={testimony._id}/>
          <ModalDelete testimonyId={testimony._id}/>
        </div>

        <div className="sm:flex sm:flex-row sm:justify-around sm:mt-4 sm:items-center w-full  sm:mb-5">

          <img
            src="src\assets\persona2.jpg"
            className="w-[55%] rounded-[80%] h-[20vh] mb-3 sm:w-[35%] "
          />

          <div className="flex flex-col items-center sm:ml-5 sm:flex sm:flex-col ">
            <h1 className="text-2xl text-center">Testimonios</h1>
            <p className="text-justify text-lg break-all">{testimony.testimony}</p>
          </div>
        </div>
        </section>
      ))}

      
    </>
  );
}

export default CardTestimonios;

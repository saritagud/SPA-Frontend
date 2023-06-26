import {  FaTrash } from "react-icons/fa";
import { useState } from "react";

function ModalDelete({testimonyId}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (testimonyId) => {
    fetch("http://localhost:3000/deleteTestimony/" + testimonyId, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
      setIsOpen(!isOpen)
  };
  return (
    <>
      <FaTrash
        className="text-right text-2xl  flex items-end justify-end mr-2 cursor-pointer lg:text-4xl"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <section className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 ">
          <section className="bg-cremaFondo rounded-xl p-5 w-[90%] ">
          <div className="bg-cremaFondo text-vino border-2 border-vino  rounded-xl p-4 font-BreeSerif w-full text-azul flex flex-col justify-center items-center text-sm text-[15px] sm:w-[80%] sm:text-[20px] lg:w-[60%] lg:text-[25px] lg:h-">
          <h1 className="text-[20px] md:text-2xl lg:text-4xl">¿Está seguro/a de eliminar esta poción?</h1>
            <div className="flex">
              <button
                className="bg-vino p-3 rounded-md text-white font-Urbanist font-semibold  flex justify-center mt-10 mr-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                Volver atrás
              </button>
                <button
                  className="bg-vino p-3 rounded-md text-white font-Urbanist font-semibold  flex justify-center mt-10 mr-5"
                  onClick={() => handleDelete(testimonyId)}
                >
                  Eliminar
                </button>
                </div>
          </div>
          </section>
        </section>
      )}
    </>
  );
}

export default ModalDelete;

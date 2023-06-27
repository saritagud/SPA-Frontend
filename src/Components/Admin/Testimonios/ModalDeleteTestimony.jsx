import { FaTrash } from "react-icons/fa";
import { useState } from "react";


function ModalDelete({ testimonyId }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (testimonyId) => {
    fetch("http://localhost:3000/deleteTestimony/" + testimonyId, {
      method: "DELETE",
      headers: {
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsOpen(!isOpen);
  };
  return (
    <>
        <div>
          <FaTrash
            className="text-right text-2xl flex items-end justify-end mr-2 cursor-pointer lg:text-4xl"
            onClick={() => setIsOpen(true)}
          />

          {isOpen && (
            <section className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 ">
              <section className="bg-cremaFondo rounded-xl p-5 w-[90%] sm:w-[70%]">
                <div className="bg-cremaFondo text-vino border-2 border-vino  rounded-xl p-4 font-BreeSerif w-full text-azul flex flex-col justify-center items-center text-sm text-[15px] ">
                  <h1 className="text-[20px] text-center sm:text-2xl md:text-3xl">
                    ¿Está seguro/a de eliminar su testimonio?
                  </h1>
                  <div className="flex">
                    <button
                      className="bg-vino p-3 rounded-md text-white font-Urbanist font-semibold  flex justify-center mt-10 mr-5 sm:text-xl"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Volver atrás
                    </button>
                    <button
                      className="bg-vino p-3 rounded-md text-white font-Urbanist font-semibold  flex justify-center mt-10 mr-5 sm:text-xl"
                      onClick={() => handleDelete(testimonyId)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </section>
            </section>
          )}
        </div>
    
    </>
  );
}

export default ModalDelete;

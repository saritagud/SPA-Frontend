import { FaTrash } from "react-icons/fa";
import { useState, useContext } from "react";
import { AuthContext } from "/src/UseContext/AuthContext";
import { Toaster, toast } from "react-hot-toast";

function ModalDelete({ tipId }) {
  const { isLoggedIn, token } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (tipId) => {
    fetch("http://localhost:3000/deleteTips/" + tipId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success("Se ha eliminado correctamente");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error);
      });
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isLoggedIn && (
        <div>
          <Toaster />
          <FaTrash
            className="text-right text-xl   flex items-end justify-end  cursor-pointer xl:text-3xl"
            onClick={() => setIsOpen(true)}
          />

          {isOpen && (
            <section className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 ">
              <section className="bg-cremaFondo rounded-xl p-5 w-[90%] sm:w-[70%] xl:w-[50%] ">
                <div className="bg-cremaFondo text-vino border-2 border-vino  rounded-xl p-4 font-BreeSerif w-full text-azul flex flex-col justify-center items-center text-sm text-[15px] ">
                  <h1 className="text-[20px] text-center sm:text-2xl lg:text-4xl md:text-3xl ">
                    ¿Está seguro/a de eliminar su consejo?
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
                      onClick={() => handleDelete(tipId)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </section>
            </section>
          )}
        </div>
      )}
    </>
  );
}

export default ModalDelete;

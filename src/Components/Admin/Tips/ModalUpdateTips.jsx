import { FaWindowClose, FaPencilAlt } from "react-icons/fa";
import { useState, useContext } from "react";
import { AuthContext } from "/src/UseContext/AuthContext";
import { Toaster, toast } from "react-hot-toast";

function ModalUpdate({ tipId }) {
  const { isLoggedIn, token } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const [tip, setTip] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const dataForm = {
      tip: tip,
    };

    fetch("http://localhost:3000/putTips/" + tipId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success("Se ha editado correctamente");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error);
      });
  };
  return (
    <>
      {isLoggedIn && (
        <div>
          <Toaster />
          <FaPencilAlt
            className="text-right text-xl flex items-end justify-end mr-2 cursor-pointer xl:text-3xl"
            onClick={() => setIsOpen(true)}
          />

          {isOpen && (
            <form
              className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 "
              onSubmit={submit}
            >
              <section className="bg-cremaFondo rounded-xl p-5 w-[90%] sm:w-[70%]  xl:w-[50%] ">
                <div className="bg-cremaFondo text-vino border-2 border-vino  rounded-xl p-4 font-BreeSerif w-full text-azul flex flex-col justify-start items-center text-sm text-[15px] ">
                  <div className="flex justify-end mb-3 w-full ">
                    <FaWindowClose
                      className=" text-2xl cursor-pointer md:text-3xl "
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  <label className="w-full text-left mb-3 text-xl ">
                    Consejo de belleza
                  </label>
                  {
                    <textarea
                      className="rounded-lg p-3 bg-vino text-white font-normal text-[15px] w-full h-52 sm:text-xl md:text-2xl md:p-3"
                      onChange={(e) => setTip(e.target.value.trim())}
                    />
                  }

                  <button className="bg-vino p-3 rounded-md text-white font-Urbanist font-semibold w-[50%] flex justify-center m-5 sm:text-xl md:text-2xl md:mt-16">
                    Guardar
                  </button>
                </div>
              </section>
            </form>
          )}
        </div>
      )}
    </>
  );
}

export default ModalUpdate;

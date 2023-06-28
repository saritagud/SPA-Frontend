import { FaWindowClose, FaPencilAlt } from "react-icons/fa";
import { useState, useContext } from "react";
import { AuthContext } from "/src/UseContext/AuthContext";
import { Toaster, toast } from "react-hot-toast";

function ModalUpdate({ promotionId }) {
  const { isLoggedIn, token } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const [Promotion, setPromotion] = useState("");
  const [Service, setService] = useState("");

  const submit = (event) => {
    event.preventDefault();

    if (!Promotion || !Service) {
      toast.error("Datos incompletos, rellena todos los campos");
      return;
    } else {
      const dataForm = {
        discount: Promotion,
        service: Service,
      };

      fetch("http://localhost:3000/putPromotion/" + promotionId, {
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
    }
  };
  return (
    <>
      {isLoggedIn && (
        <div>
          <Toaster />
          <FaPencilAlt
            className="text-right text-xl flex items-end justify-end mr-2 cursor-pointer sm:text-2xl "
            onClick={() => setIsOpen(true)}
          />

          {isOpen && (
            <form
              className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 "
              onSubmit={submit}
            >
              <section className="bg-cremaFondo rounded-xl p-5 w-[90%] sm:w-[60%] xl:w-[50%]  ">
                <div className="bg-cremaFondo text-vino border-2 border-vino  rounded-xl p-4 font-BreeSerif w-full text-azul flex flex-col justify-start items-center text-sm text-[15px] ">
                  <div className="flex justify-end mb-3 w-full ">
                    <FaWindowClose
                      className=" text-2xl cursor-pointer md:text-3xl  "
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  <label className="w-full text-left mb-3 text-xl md:text-3xl md:mt-5">
                    Descuento
                  </label>
                  <input
                    className="rounded-lg p-3 bg-vino text-white font-normal text-[15px] w-full  sm:text-lg md:text-2xl md:p-3"
                    onChange={(e) => setPromotion(e.target.value.trim())}
                    type="number"
                  />

                  <label className="w-full text-left mb-3 text-xl mt-3 md:text-3xl md:mt-5">
                    Servicio
                  </label>
                  <input
                    className="rounded-lg p-3 bg-vino text-white font-normal text-[15px] w-full  sm:text-lg md:text-2xl md:p-3"
                    onChange={(e) => setService(e.target.value.trim())}
                    type="text"
                  />

                  <button className="bg-vino p-3 rounded-md text-lg text-white font-BreeSerif font-semibold w-[50%] flex justify-center m-8 md:text-2xl md:mt-16">
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

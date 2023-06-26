import { FaWindowClose } from "react-icons/fa";
import {IoAddCircleSharp} from "react-icons/io5"
import { useState } from "react";

function ModalUpdate() {
  const [isOpen, setIsOpen] = useState(false);

  const [Promotion, setPromotion] = useState("");
  const [Service, setService] = useState("");
  const [Image, setImage] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const dataForm = {
      discount: Promotion,
      service: Service,
      image: Image,
    };

    fetch("http://localhost:3000/putPromotion/", {
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
      <IoAddCircleSharp
        className="text-right text-vino  text-4xl flex items-end justify-end mr-2 cursor-pointer lg:text-4xl"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <form
          className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 "
          onSubmit={submit}
        >
          <section className="bg-cremaFondo rounded-xl p-5 w-[90%] ">
            <div className="bg-cremaFondo text-vino border-2 border-vino  rounded-xl p-4 font-BreeSerif w-full text-azul flex flex-col justify-start items-center text-sm text-[15px] sm:w-[80%] sm:text-[20px] lg:w-[60%] lg:text-[25px] lg:h-">
              <div className="flex justify-end mb-3 w-full ">
                <FaWindowClose
                  className=" text-2xl cursor-pointer lg:text-3xl xl:text-3xl"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <label className="w-full text-left mb-3 text-xl ">
                Descuento
              </label>
              <input
                className="rounded-lg p-3 bg-vino text-white font-normal text-[15px] w-full  "
                onChange={(e) => setPromotion(e.target.value.trim())}
                type="text"
              />

              <label className="w-full text-left mb-3 text-xl mt-3">
                Servicio
              </label>
              <input
                className="rounded-lg p-3 bg-vino text-white font-normal text-[15px] w-full  "
                onChange={(e) => setService(e.target.value.trim())}
                type="text"
              />

              <label className="w-full text-left mb-3 text-xl mt-3">
                Url de tu imagen
              </label>
              <input
                className="rounded-lg p-3 bg-vino text-white font-normal text-[15px] w-full  "
                onChange={(e) => setImage(e.target.value.trim())}
                type="text"
              />

              <button className="bg-vino p-3 rounded-md text-lg text-white font-BreeSerif font-semibold w-[50%] flex justify-center m-8 lg:p-4 lg:w-[30%s]">
                Guardar
              </button>
            </div>
          </section>
        </form>
      )}
    </>
  );
}

export default ModalUpdate;

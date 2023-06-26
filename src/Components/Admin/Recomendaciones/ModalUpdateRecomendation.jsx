import { FaWindowClose, FaPencilAlt } from "react-icons/fa";
import { useState } from "react";

function ModalUpdate({ recommendationId }) {
  const [isOpen, setIsOpen] = useState(false);

  const [Name, setName] = useState("");
  const [Recommendation, setRecommendation] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const dataForm = {
      name: Name,
      recommendation: Recommendation,
    };

    fetch("http://localhost:3000/putRecommendation/" + recommendationId, {
      method: "PUT",
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
      <FaPencilAlt
        className="text-right text-vino text-2xl flex items-end justify-end mr-2 cursor-pointer lg:text-4xl"
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
              <label className="w-full text-left mb-3 text-xl ">Nombre</label>
              <input
                className="rounded-lg p-3 bg-vino text-white font-normal text-[15px] w-full "
                onChange={(e) => setName(e.target.value.trim())}
                type="text"
              />

              <label className="w-full text-left mb-3 text-xl ">Descripcion</label>
              <input
                className="rounded-lg p-3 bg-vino text-white font-normal text-[15px] w-full "
                onChange={(e) => setRecommendation(e.target.value.trim())}
                type="text"
              />

              <button className="bg-vino p-3 rounded-md text-white font-Urbanist font-semibold w-[50%] flex justify-center m-5 lg:p-4 lg:w-[30%s]">
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

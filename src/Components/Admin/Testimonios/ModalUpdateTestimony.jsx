import { FaWindowClose, FaPencilAlt } from "react-icons/fa";
import { useState } from "react";


function ModalUpdate({ testimonyId }) {
  const [isOpen, setIsOpen] = useState(false);

  const [Testimony, setTestimony] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const dataForm = {
      testimony: Testimony,
    };

    fetch("http://localhost:3000/putTestimony/" + testimonyId, {
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
      
        <div>
          <FaPencilAlt
            className="text-right text-2xl flex items-end justify-end mr-2 cursor-pointer lg:text-3xl"
            onClick={() => setIsOpen(true)}
          />

          {isOpen && (
            <form
              className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 "
              onSubmit={submit}
            >
              <section className="bg-cremaFondo rounded-xl p-5 w-[90%] sm:w-[70%] xl:w-[50%] ">
                <div className="bg-cremaFondo text-vino border-2 border-vino  rounded-xl p-4 font-BreeSerif w-full text-azul flex flex-col justify-start items-center text-sm text-[15px] ">
                  <div className="flex justify-end mb-3 w-full ">
                    <FaWindowClose
                      className=" text-2xl cursor-pointer md:text-3xl "
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  <label className="w-full text-left mb-3 text-xl md:text-3xl ">
                    Testimonio
                  </label>
                  <textarea
                    className="rounded-lg p-3 bg-vino text-white font-normal text-[15px] w-full  h-52 sm:text-lg md:text-2xl md:p-3"
                    onChange={(e) => setTestimony(e.target.value.trim())}
                  />

                  <button className="bg-vino p-3 rounded-md text-white font-Urbanist font-semibold w-[50%] flex justify-center m-5  sm:text-xl md:text-2xl md:mt-16">
                    Guardar
                  </button>
                </div>
              </section>
            </form>
          )}
        </div>
      
    </>
  );
}

export default ModalUpdate;

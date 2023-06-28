import { FaWindowClose } from "react-icons/fa";
import { IoAddCircleSharp } from "react-icons/io5";
import { useState, useContext } from "react";
import { AuthContext } from "/src/UseContext/AuthContext";
import { Editor } from "@tinymce/tinymce-react";
function ModalAdd() {
  const { isLoggedIn, token } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const [Name, setName] = useState("");
  const [Recommendation, setRecommendation] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const dataForm = {
      name: Name,
      recommendation: Recommendation,
    };

    fetch("http://localhost:3000/postRecommendation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
      {isLoggedIn && (
        <div>
          <IoAddCircleSharp
            className="text-right text-vino text-4xl flex items-end justify-end mr-2 cursor-pointer md:text-5xl"
            onClick={() => setIsOpen(true)}
          />

          {isOpen && (
            <form
              className="fixed flex justify-center items-center inset-0 backdrop-blur-sm bg-black bg-opacity-30 "
              onSubmit={submit}
            >
              <section className="bg-cremaFondo rounded-xl p-5 w-[90%] sm:w-[70%] xl:w-[50%] xl:h-screen lg:overflow-scroll">
                <div className="bg-cremaFondo text-vino border-2 border-vino  rounded-xl p-4 font-BreeSerif w-full text-azul flex flex-col justify-start items-center text-sm text-[15px] ">
                  <div className="flex justify-end mb-3 w-full ">
                    <FaWindowClose
                      className=" text-2xl cursor-pointer md:text-3xl"
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                  <label className="w-full text-left mb-3 text-xl md:text-3xl md:mt-5">
                    Nombre
                  </label>
                  <input
                    className="rounded-lg p-3 bg-vino text-white font-normal text-[15px] w-full sm:text-lg"
                    onChange={(e) => setName(e.target.value.trim())}
                    type="text"
                  />



                  <label className="w-full text-left mb-3 text-xl md:text-3xl md:mt-5">
                    Descripcion
                  </label>
                  {/* <input
                    className="rounded-lg p-3 bg-vino text-white font-normal text-[15px] w-full "
                    onChange={(e) => setRecommendation(e.target.value.trim())}
                    type="text"
                  />
 */}
                  <Editor
                    textareaName="Recomendacion"
                    initialValue="<p></p>"
                    init={{
                      height: 300,
                      menubar: true,
                      plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                    onEditorChange={(newText) => setRecommendation(newText)}
                  />

                  <button className="bg-vino p-3 rounded-md text-white font-Urbanist font-semibold w-[50%] flex justify-center m-5 lg:p-4 lg:w-[30%s] md:text-2xl  md:mt-14">
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

export default ModalAdd;

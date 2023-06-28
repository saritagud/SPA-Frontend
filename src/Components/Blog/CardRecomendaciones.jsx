import { useState } from "react";
import ModalUpdateRecomendation from "../Admin/Recomendaciones/ModalUpdateRecomendation";
import ModalDeleteRecomendation from "../Admin/Recomendaciones/ModalDeletRecomendation";

function CardRecomendaciones() {
  const [recommendation, setRecommendation] = useState([]);

  fetch("http://localhost:3000/getRecommendation", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setRecommendation(data);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <>
      {recommendation.map((recommendation) => (
        <section
          key={recommendation._id}
          className="flex flex-col items-center w-[80%] justify-center lg:w-[60%]"
        >
          <div className="flex justify-end w-full mt-5">
            <ModalUpdateRecomendation recommendationId={recommendation._id} />
            <ModalDeleteRecomendation recommendationId={recommendation._id} />
          </div>

          <div className="w-full flex flex-col items-center sm:flex-row ">
            <img
              src="src\assets\recomen.jpg"
              className="w-[70%] rounded-[100%] h-[25vh] mt-5 sm:w-[50%] lg:w-[30%]"
            />

            <div className="text-center m-3 font-BreeSerif text-vino">
              <h1 className="text-2xl sm:text-3xl  break-all"  dangerouslySetInnerHTML={{__html: recommendation.name}} />
              <p className="text-justify sm:text-2xl  break-all"   dangerouslySetInnerHTML={{__html: recommendation.recommendation}} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default CardRecomendaciones;

import { useState } from "react";
import ModalUpdateRecomendation from "../Admin/Recomendaciones/ModalUpdateRecomendation";
import ModalDeleteRecomendation from "../Admin/Recomendaciones/ModalDeletRecomendation";

function CardRecomendaciones(){

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
    return(
        <>
        {recommendation.map((recommendation) => (
            <section key={recommendation._id} className="flex flex-col items-center w-[80%]">
            <div className="flex justify-end w-full mt-5">
              <ModalUpdateRecomendation recommendationId={recommendation._id}/>
              <ModalDeleteRecomendation recommendationId={recommendation._id}/>
            </div>
                <img src="src\assets\recomen.jpg" className="w-[70%] rounded-[100%] h-[25vh] mt-5"/>

                <div className="text-center m-3 font-BreeSerif text-vino">
                    <h1 className="text-2xl">{recommendation.name}</h1>
                    <p className="text-justify">{recommendation.recommendation}</p>
                </div>
            </section>
        ))}
        </>
    )
}

export default CardRecomendaciones;
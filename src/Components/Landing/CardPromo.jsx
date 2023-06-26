import { useState } from "react";
import ModalUpdatePromo from "../Admin/Promotions/ModalUpdatePromo";
import ModalDeletePromo from "../Admin/Promotions/ModalDeletePromo";


function CardPromo() {
  const [promotion, setPromotion] = useState([]);

  fetch("http://localhost:3000/getPromotion", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setPromotion(data);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <>
      {promotion.map((promotion) => (
        <section key={promotion._id} className="bg-promoCard2 bg-cover bg-no-repeat rounded-3xl text-white flex flex-col justify-center items-center h-[45vh] mt-5 mb-16 w-[70%]">
            <div className="flex justify-end items-end w-full mt-3">
                <ModalUpdatePromo promotionId={promotion._id} />
                <ModalDeletePromo promotionId={promotion._id}/>
            </div>
          <img
            src={promotion.image }   
            className="w-[55%] rounded-[80%] h-[18vh] -mt-28"
          /> 


          <div
            key={promotion._id}
            className="h-full flex flex-col justify-between items-center p-3 text-center"
          >
            <h1 key={promotion._id} className="font-bold text-3xl pl-4 pr-4">
              {promotion.discount}%
            </h1>
            <p className="font-BreeSerif text-2xl mb-20">{promotion.service}</p>
          </div>
        </section>
      ))}
    </>
  );
}

export default CardPromo;

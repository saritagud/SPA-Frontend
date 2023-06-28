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
    <div className="w-full flex flex-col items-center lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-10">
      {promotion.map((promotion) => (
        <section
          key={promotion._id}
          className="bg-promoCard2 bg-cover bg-no-repeat rounded-3xl text-white flex flex-col justify-center items-center h-[45vh] mt-5 mb-16 w-[70%] sm:w-[60%] sm:h-[60vh] sm:mt-16  lg:w-[30%]  "
        >
          <div className="flex justify-end items-end w-full mt-3">
            <ModalUpdatePromo promotionId={promotion._id} />
            <ModalDeletePromo promotionId={promotion._id} />
          </div>
          <img 
            src= {promotion.image ? promotion.image : "src/assets/467c390b81e20752e42ad245269ffc71.jpg"} 
            className="w-[55%] rounded-[80%] h-[18vh] -mt-28 sm:h-[25vh] sm:-mt-32"
          />

          <div
            key={promotion._id}
            className="h-full flex flex-col justify-between items-center p-3 text-center"
          >
            <h1 key={promotion._id} className="font-bold text-3xl pl-4 pr-4 sm:text-5xl  break-all">
              {promotion.discount}%
            </h1>
            <p className="font-BreeSerif text-2xl mb-20 sm:text-4xl sm:mb-32  break-all">{promotion.service}</p>
          </div>
        </section>
      ))}
        
    </div>
  );
}

export default CardPromo;

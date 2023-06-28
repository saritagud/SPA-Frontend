import { useState } from "react";
import ModalUpdateTips from "../Admin/Tips/ModalUpdateTips";
import ModalDeleteTips from "../Admin/Tips/ModalDeleteTips";

function CardConsejos() {
  const [tips, setTips] = useState([]);

  fetch("http://localhost:3000/getTips", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setTips(data);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <div className="w-full lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-10">
      {tips.map((tips) => (
        <section
          key={tips._id}
          className="bg-vino m-5 text-marronClaro p-5 rounded-3xl font-BreeSerif w-[80%] sm:w-[60%] sm:text-2xl lg:w-[30%] xl:w-[]"
        >
          <div className="border-solid border-2 border-marronClaro rounded-3xl min-h-[50vh] p-3 flex flex-col items-center xl:h-[60vh]">
            <div className="flex justify-end items-end w-full ">
              <ModalUpdateTips tipId={tips._id}/>
              <ModalDeleteTips tipId={tips._id}/>
            </div>
            
            <p className=" m-2 text-center  break-all" dangerouslySetInnerHTML={{__html: tips.tip}} />
            
          </div>
        </section>
      ))}
    </div>
  );
}

export default CardConsejos;

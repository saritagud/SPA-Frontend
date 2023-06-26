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
    <>
      {tips.map((tips) => (
        <section
          key={tips._id}
          className="bg-vino  m-5 text-marronClaro p-5 rounded-3xl font-BreeSerif w-[80%]"
        >
          <div className="border-solid border-2 border-marronClaro rounded-3xl min-h-[50vh]  p-3 flex flex-col items-center">
            <div className="flex justify-end items-end w-full ">
              <ModalUpdateTips tipId={tips._id}/>
              <ModalDeleteTips tipId={tips._id}/>
            </div>
            <p className=" m-2 text-center ">
              {tips.tip}
            </p>
          </div>
        </section>
      ))}
    </>
  );
}

export default CardConsejos;

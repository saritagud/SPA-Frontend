import { useState } from "react";

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

    {tips.map((tips ) =>(
      <section key={tips._id} className="bg-vino m-5 text-marronClaro p-5 rounded-3xl font-BreeSerif w-[80%]">
        <div>
          <p className="border-solid border-2 border-marronClaro h-[40vh] rounded-3xl p-5 flex flex-col justify-around items-center text-center ">
            {tips.tip}
          </p>
        </div>
      </section>
    ))}
      
    </>
  );
}

export default CardConsejos;

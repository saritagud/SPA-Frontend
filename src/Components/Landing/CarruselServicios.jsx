import { useState } from "react";

import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carrusel() {
  const [service, setService] = useState([]);
  fetch("http://localhost:3000/getService", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setService(data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <ResponsiveCarousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showThumbs={false}
      showStatus={false}
      className="w-[80%]"
    >

    {service.map((service) => (
      <div key={service._id} className=" rounded-xl">
        <img
          src="src\assets\carrusel.jpg"
          alt="Image"
          className=" rounded-t-xl h-[50vh]"
        />
        <div className="bg-vino rounded-b-xl text-white font-BreeSerif p-4 mb-8 text-start">
          <p>{service.service}</p>
          <p>{service.price}</p>
        </div>
      </div>
    ))}
      

      
      
    </ResponsiveCarousel>
  );
}

export default Carrusel;

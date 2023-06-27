import { useState } from "react";
import ModalUpdateService from "../Admin/Servicios/ModalUpdateService";
import ModalDeleteService from "../Admin/Servicios/ModalDeleteService";

import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carrusel() {
  const [selectedService, setSelectedService] = useState(null);
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
    <>
    <section className="flex justify-end w-full mr-20 mb-3 text-vino sm:mr-52">
          <ModalUpdateService
            serviceId={selectedService}
            onActionComplete={() => setSelectedService(null)}
          />
          <ModalDeleteService
            serviceId={selectedService}
            onActionComplete={() => setSelectedService(null)}
          />
        </section>
      <ResponsiveCarousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        className="w-[80%] sm:w-[65%]"
      >
        {service.map((service) => (
          <div
            key={service._id}
            className=" rounded-xl z-10"
            onClick={() => setSelectedService(service._id)}
          >
            <img
              src="src\assets\carrusel.jpg"
              alt="Image"
              className=" rounded-t-xl h-[50vh] sm:h-[65vh]"
            />
            <div className="bg-vino rounded-b-xl text-white font-BreeSerif p-4 mb-8 text-start sm:text-2xl  break-all">
              <p>{service.service}</p>
              <p>{service.price}</p>

            </div>
          </div>
        ))}
      </ResponsiveCarousel>
      
        
    </>
  );
}

export default Carrusel;

import CardPromo from "./Landing/CardPromo";
import CardHorario from "./Landing/CardHorario";
import CardTestimonios from "./Landing/CardTestimonios";
import Footer from "./Footer";
import Carrusel from "./Landing/CarruselServicios";
import Nav from "./Nav";
import ModalAddTestimony from "./Admin/Testimonios/ModalAddTestimony";
import ModalAddPromo from "./Admin/Promotions/ModalAddPromo";
import ModalAddService from "./Admin/Servicios/ModalAddService";

function Landing() {
  return (
    <>
      <Nav />
      <section className="m-5 -mt-6 min-h-screen text-vino flex flex-col items-center gap-5 md:mt-7 lg:flex-row lg:items-start">

        <div className="w-full lg:flex lg:flex-col lg:items-center lg:gap-8">
        <h1 className="font-CinzelDecorative text-vino text-3xl  mt-10 font-bold sm:text-4xl md:text-5xl lg:mt-0 ">
          Donde la relajación y la belleza se unen en armonía
        </h1>
          <p className="mt-3 mb-3 font-BreeSerif text-lg sm:text-2xl md:text-3xl">
            Adéntrate en un refugio de tranquilidad y descubre un mundo donde la
            serenidad y la belleza se entrelazan en perfecta armonía. Nuestro
            spa te invita a sumergirte en un oasis de calma, un santuario
            dedicado a nutrir tu cuerpo, revitalizar tu mente y realzar tu
            belleza interior y exterior.
          </p>

          <button className="bg-vino p-3 text-marronClaro rounded-xl font-CinzelDecorative text-xl m-5  sm:w-[40%] sm:text-3xl  lg:w-[50%]">
            <a href="/reservacion">Reserva ahora</a>
          </button>
        </div>

        <img
          src="src\assets\sectionLANDING.jpg"
          className="rounded-xl h-[50vh] sm:h-[70vh] lg:w-[50%] lg:h-screen lg:object-cover"
        />
      </section>

      <section>
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className="flex flex-col justify-center items-center gap-8 ">
        <div className="flex justify-end items-end w-full mr-5">
          <ModalAddPromo />
        </div>
        <h1 className="font-CinzelDecorative text-3xl text-vino mb-16 sm:text-4xl md:text-5xl">
          Promociones
        </h1>
        
        <CardPromo />
      </section>

      <section className="-mt-10">
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14 "></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className="flex flex-col justify-center items-center ">
        <div className="flex justify-end items-end w-full mr-5">
          <ModalAddService />
        </div>

        <h1 className="font-CinzelDecorative text-3xl text-vino mb-8 sm:text-4xl md:text-5xl">
          Servicios
        </h1>

        <Carrusel />
      </section>

      <section>
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className="flex flex-col justify-center items-center ">
        <h1 className="font-CinzelDecorative text-3xl text-vino  sm:text-4xl md:text-5xl">
          Horario
        </h1>
        <CardHorario />
      </section>

      <section>
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className="flex flex-col justify-center items-center gap-8">
        <div className="flex justify-end items-end w-full mr-5">
          <ModalAddTestimony />
        </div>
        <h1 className="font-CinzelDecorative text-3xl text-center text-vino sm:text-4xl md:text-5xl">
          Testimonios
        </h1>
        <CardTestimonios />
      </section>

      <Footer />
    </>
  );
}

export default Landing;

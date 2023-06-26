import CardPromo from './Landing/CardPromo'
import CardHorario from './Landing/CardHorario'
import CardTestimonios from './Landing/CardTestimonios'
import Footer from './Footer';
import Carrusel from './Landing/CarruselServicios'
import Nav from './Nav';
import ModalAdd from './Admin/Testimonios/ModalAddTestimony';

function Landing() {
  return (
    <>
    <Nav/>
      <section className="m-5 -mt-6 min-h-screen text-vino flex flex-col items-center">
        <h1 className='font-CinzelDecorative text-vino text-3xl  mt-10 font-bold'>Donde la relajación y la belleza se unen en armonía</h1>
        <p className='mt-3 mb-3 font-BreeSerif text-lg'>
          Adéntrate en un refugio de tranquilidad y descubre un mundo donde la
          serenidad y la belleza se entrelazan en perfecta armonía. Nuestro spa
          te invita a sumergirte en un oasis de calma, un santuario dedicado a
          nutrir tu cuerpo, revitalizar tu mente y realzar tu belleza interior y
          exterior.
        </p>

        <button  className='bg-vino p-3 text-marronClaro rounded-xl font-CinzelDecorative text-xl m-5 w-1/2'><a  href="/reservacion">Reserva ahora</a></button>

        <img src="src\assets\sectionLANDING.jpg" className='rounded-xl h-[50vh]'/>
      </section>

      <section>
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className='flex flex-col justify-center items-center '>
        <h1 className='font-CinzelDecorative text-3xl text-vino mb-16'>Promociones</h1>

        <CardPromo/>
        
      </section>

      <section className='-mt-10'>
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className='flex flex-col justify-center items-center '>
          <h1 className='font-CinzelDecorative text-3xl text-vino mb-8'>Servicios</h1>

          <Carrusel/>
      </section>

      <section >
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className='flex flex-col justify-center items-center '>
          <h1 className='font-CinzelDecorative text-3xl text-vino '>Horario</h1>
          <CardHorario/>
      </section>

      <section>
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className='flex flex-col justify-center items-center'>
          <ModalAdd/>
          <h1 className='font-CinzelDecorative text-3xl text-vino '>Testimonios</h1>
          <CardTestimonios/>
      </section>

      

    <Footer/>
    </>
  );
}

export default Landing;

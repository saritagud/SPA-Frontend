import Footer from "./Footer";
import CardRecomendaciones from "./Blog/CardRecomendaciones"
import CardConsejos from "./Blog/CardConsejos";
import Nav from "./Nav";
import ModalAddTips from "./Admin/Tips/ModalAddTips";
import ModalAddRecomendation from "./Admin/Recomendaciones/ModalAddRecomendation";


function Blog() {
  return (
    <>
    <Nav/>
      <section className="p-8 min-h-screen text-vino flex flex-col gap-8 lg:flex-row lg:items-start">

      <div className="w-full lg:flex lg:flex-col lg:items-center lg:gap-8">

        <h1 className="font-CinzelDecorative text-vino text-3xl font-bold sm:text-5xl lg:text-left w-full">
          Salud y Belleza
        </h1>
        <p className=" font-BreeSerif text-lg sm:text-2xl">
          Adéntrate en un refugio de tranquilidad y descubre un mundo donde la
          serenidad y la belleza se entrelazan en perfecta armonía. Nuestro spa
          te invita a sumergirte en un oasis de calma, un santuario dedicado a
          nutrir tu cuerpo, revitalizar tu mente y realzar tu belleza interior y
          exterior.
        </p>
      </div>

        <img
          src="src\assets\sectionBLOG.jpg"
          className="rounded-xl h-[60vh] w-[100%] sm:h-[80vh]"
        />
      </section>

      <section>
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className="flex flex-col justify-center items-center gap-8">
      <div className="flex justify-end w-full">
        <ModalAddRecomendation/>
      </div>
        <h1 className="font-CinzelDecorative text-3xl text-center text-vino w-[80%] sm:text-4xl">
          ¿Cuales son los mejores alimentos para tu piel?
        </h1>

        <CardRecomendaciones/>
      </section>

      <section>
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className="flex flex-col justify-center items-center gap-8">
      <div className="flex justify-end w-full">
        <ModalAddTips/>
      </div>
        <h1 className="font-CinzelDecorative text-3xl text-vino sm:text-4xl">
          Consejos de belleza
        </h1>

        <CardConsejos/>
        
      </section>

      <Footer />
    </>
  );
}

export default Blog;

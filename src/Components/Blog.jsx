import Footer from "./Footer";
import CardRecomendaciones from "./Blog/CardRecomendaciones"
import CardConsejos from "./Blog/CardConsejos";
import Nav from "./Nav";


function Blog() {
  return (
    <>
    <Nav/>
      <section className="m-5 min-h-[100vh] text-vino">
        <h1 className="font-CinzelDecorative text-vino text-3xl  mt-10 font-bold">
          Salud y Belleza
        </h1>
        <p className="mt-3 mb-3 font-BreeSerif text-lg">
          Adéntrate en un refugio de tranquilidad y descubre un mundo donde la
          serenidad y la belleza se entrelazan en perfecta armonía. Nuestro spa
          te invita a sumergirte en un oasis de calma, un santuario dedicado a
          nutrir tu cuerpo, revitalizar tu mente y realzar tu belleza interior y
          exterior.
        </p>

        <img
          src="src\assets\sectionBLOG.jpg"
          className="rounded-xl h-[60vh] w-[100%]"
        />
      </section>

      <section>
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className="flex flex-col justify-center items-center">
        <h1 className="font-CinzelDecorative text-3xl text-center text-vino ">
          Cuales son los mejores alimentos para tu piel?
        </h1>

        <CardRecomendaciones/>
        <CardRecomendaciones/>
      </section>

      <section>
        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>

        <div className="border-t border-vino m-4 lg:mr-14 lg:ml-14"></div>
      </section>

      <section className="flex flex-col justify-center items-center ">
        <h1 className="font-CinzelDecorative text-3xl text-vino ">
          Consejos de belleza
        </h1>

        <CardConsejos/>
        <CardConsejos/>
      </section>

      <Footer />
    </>
  );
}

export default Blog;

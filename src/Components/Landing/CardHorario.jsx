function CardHorario() {
  return (
    <>
      <section className="bg-vino m-5 text-marronClaro p-5 rounded-3xl font-BreeSerif sm:w-[55%] lg:w-[40%]">
        <div className="border-solid border-2 border-marronClaro h-[50vh] rounded-3xl p-5 flex flex-col justify-around items-center text-center text-xl sm:text-2xl lg:h-[70vh] lg:text-3xl">
          <p>Lunes a Viernes: De 10am a 7pm</p>
          <p>Sábados y Domingos: De 10am a 8pm</p>
          <p>Valera, estado Trujillo</p>
        </div>
      </section>
    </>
  );
}

export default CardHorario;

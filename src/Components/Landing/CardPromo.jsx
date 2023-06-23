function CardPromo(){
    return(
        <>
            <section className="bg-promoCard2 bg-cover bg-no-repeat rounded-3xl text-white flex flex-col justify-center items-center h-[40vh] mt-5 mb-16">

            
                <img src="src\assets\masajes.jpg" className="w-[55%] rounded-[80%] h-[18vh] -mt-16"/>

                <div className="h-full flex flex-col justify-between items-center p-3 text-center">
                    <h1 className="font-bold text-xl pl-4 pr-4">30% de descuento</h1>

                    <p className="font-BreeSerif text-xl mb-20">Masajes Relajantes</p>
                </div>
            </section>
        </>
    )
}

export default CardPromo;
function CardRecomendaciones(){
    return(
        <>
            <section className="flex flex-col items-center w-[80%]">
                <img src="src\assets\recomen.jpg" className="w-[70%] rounded-[100%] h-[25vh] mt-5"/>

                <div className="text-center m-3 font-BreeSerif text-vino">
                    <h1 className="text-2xl">Aguacate</h1>
                    <p className="text-justify">Rico en grasas saludables y vitamina E, el aguacate ayuda a hidratar y nutrir la piel desde dentro. Además, contiene antioxidantes que pueden ayudar a reducir la inflamación y promover una apariencia radiante.</p>
                </div>
            </section>
        </>
    )
}

export default CardRecomendaciones;
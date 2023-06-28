function Footer(){
    return(
        <>
            <footer className="flex flex-col items-center justify-between text-vino text-2xl font-CinzelDecorative m-5 mt-20 sm:text-3xl lg:flex-row lg:mr-0 lg:gap-10">
                <a>Contacto</a>
                <a>Ubicación</a>
                <img src="src\assets\logo.png" className="w-[40%] sm:w-[50%] lg:w-[30%]"/>
                <a className="text-center">Desarrollado por Sara Gudino</a>
            </footer>
        </>
    )
}

export default Footer;
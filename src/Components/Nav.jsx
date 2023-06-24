import { useState } from 'react';
import { FaBars } from "react-icons/fa";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

  
  return (
    <header className="bg-bgColor h-14 flex items-center justify-end px-5 w-full md:h-24 lg:h-20 2xl:h-24 border-primaryColor border-[0.5px]">
            <nav>
                <FaBars className="text-2xl h-full w-full cursor-pointer text-vino  md:text-4xl lg:hidden" onClick={() => setIsOpen(!isOpen)} />

                {isOpen && (
                    <ul className="origin-center absolute right-5 w-[90%] mt-2  h-screen rounded-md shadow-lg bg-marronClaro text-right font-CinzelDecorative text-vino border-solid border-2 border-vino flex flex-col items-center">

                        { 
                          <>
                            <p  className="block px-4 py-3 text-2xl font-Urbanist">
                            <li className=" text-textColor cursor-pointer">Blog</li>
                          </p>
                          <img src='src\assets\logo.png' className='w-[70%]'/>
                          <p  className="text-2xl block px-4 py-3 font-Urbanist">
                              <li className=" text-textColor cursor-pointer ">Temperatura</li>
                          </p>
                          </>
                        }
                        
                    </ul>
                )}

                

                    <div className="p:hidden sm:hidden md:hidden lg:block">
                    <ul className="flex justify-between w-full ur:h-24 ">
                        { 
                            // Mostrar la pagina chat y personalizacion unicamente cuando el usuario este logueado
                          <>
                            <p  className="block px-4 py-3  rounded-2xl text-2xl font-Urbanist 2xl:text-3xl ur:text-4xl ur:m-4">
                            <li className="text-textColor cursor-pointer font-bold">MomoyBOT</li>
                          </p>
                          <p  className="block px-4 py-3  rounded-2xl text-2xl font-Urbanist 2xl:text-3xl  ur:text-4xl ur:m-4">
                              <li className="text-textColor font-bold cursor-pointer">Personalización</li>
                          </p>
                          </>
                        }
                        {
                          !  // Mostrar la pagina login y registro unicamente cunado el usuario no tenga una cuenta o haya iniciado sesion
                          <>
                            <p  className="block px-4 py-3  rounded-2xl text-2xl font-Urbanist ur:text-4xl ur:m-4">
                            <li className="text-textColor cursor-pointer font-bold">Iniciar Sesión</li>
                            </p>
                            <p  className="block px-4 py-3  rounded-2xl text-2xl font-Urbanist ur:text-4xl ur:m-4">
                                <li className="text-textColor cursor-pointer font-bold">Registrarse</li>
                            </p>
                          </>
                        }
                        
                    </ul>
                  </div>
            </nav>
        </header>
  );
};

export default Nav;

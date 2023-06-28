import { useState, useEffect, useContext } from "react";
import { AuthContext } from "/src/UseContext/AuthContext";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function Example() {
  const { logout, isLoggedIn } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);
  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col items-center gap-2  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-between w-full lg:text-xl text-vino font-CinzelDecorative text-xl xl:gap-24 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-2xl sm:text-3xl lg:text-4xl"
      >
        <a href="/blog" className="flex items-center">
          Blog
        </a>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 ">
        <a href="#" className="flex items-center justify-center">
          <img src="src\assets\logo.png" className="w-[80%] sm:w-[50%]" />
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-2xl sm:text-3xl lg:text-4xl"
      >
        <a href="/" className="flex items-center">
          Inicio
        </a>
      </Typography>

      {isLoggedIn && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 text-2xl lg:text-4xl "
        >
          <button
            className="flex items-center bg-vino p-3 text-marronClaro rounded-xl text-lg sm:text-2xl lg:p-4 lg:ml-12 xl:ml-9"
            onClick={handleLogout}
          >
            Cerrar sesion
          </button>
        </Typography>
      )}
    </ul>
  );

  return (
    <Navbar className="mx-auto  max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container  mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="hidden  lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto mt-5 h-5 w-5 text-vino hover:bg-transparent focus:bg-transparent active:bg-transparent sm:mr-8 lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}

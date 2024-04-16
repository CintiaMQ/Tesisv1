import React, { useState } from "react";
import { Link} from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
{/*import tecvoc from '../assets/tecvoc.png'*/}


const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Informacion",
      link: "/informacion",
    },
    {
      name: "Acerca de nosotros",
      link: "/acerca",
    },
    {
      name: "Contactame",
      link: "/contactame",
    },
  ];

  return (
    <>
      <nav className="custom-nav">

        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* Logo section */}
              <Link to="/" className="logo-text">
  {/*<img src={tecvoc} alt="Logo" className="w-12 h-auto mr-2" /> {/* Aquí agregamos el logo */}
 TECVOC {/* Este es el texto alternativo en caso de que la imagen no se cargue */}
</Link>
              {/* Toggle button section  (we will do it later) */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes className="text-gray-400 cursor-pointer" size={24} />
                  ) : (
                    <FaBars className="text-gray-400 cursor-pointer" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Navbar menu items section */}
          <div className={`flex justify-between items-center md:block ${navbar ? "block" : "hidden"}`}>
            <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
              {Navbar.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="text-gray-400 text-[1.15rem] font-medium tracking-wider hover:text-gray-200 ease-out duration-700">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
              <Link to="/registro"><button className="custom-button">Registrar</button></Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

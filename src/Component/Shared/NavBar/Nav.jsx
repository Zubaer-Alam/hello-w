import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../../assets/logo.png";
import { useEffect, useState, useRef } from "react";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center uppercase font-bold text-white hover:text-blue-500 transition-colors"
        >
          home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center uppercase font-bold text-white hover:text-blue-500 transition-colors"
        >
          Telegram
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center uppercase font-bold text-white hover:text-blue-500 transition-colors"
        >
          Log in
        </a>
      </Typography>
    </ul>
  );
}

export function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const navRef = useRef(null);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  const handleDocumentClick = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <Navbar
      ref={navRef} // Ref for the navigation bar element
      className="mx-auto fixed lg:relative z-10 border-none max-w-screen-xl px-6 py-3 bg-[#124063] rounded-none"
    >
      <div className="flex items-center justify-between  text-white">
        <Typography href="#" className="mr-4 cursor-pointer py-1.5">
          <img className="h-5" src={logo} alt="" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="flex relative lg:hidden">
          {openNav ? (
            <XMarkIcon className="h-6  w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6  w-6" strokeWidth={2} />
          )}
          <IconButton
            className="ml-auto absolute bg-transparent  h-6 w-6 text-inherit"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          ></IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartDrawer from "../../CartDrawer";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false); 

  const baseClasses =
    "text-[18px] font-robotoMono rounded-md p-2 transition-colors duration-200";
  const activeClasses = "bg-[#1A1A1A] text-[#B3B3B2]";
  const inactiveClasses =
    "text-[#B3B3B2] border-1 border-dashed border-[#404040] hover:bg-[#1A1A1A] hover:text-[#B3B3B2]";

  return (
    <>
      <header className="bg-black w-full z-50">
        <div className="container py-[20px] relative border-b-2 border-b-[#404040] border-dashed">

          {/* ========== Desktop Nav ========== */}
          <nav className="hidden md:flex items-center justify-between relative">
            {/* Home + Products */}
            <div className="flex items-center gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/Products"
                className={({ isActive }) =>
                  `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
                }
              >
                Products
              </NavLink>
            </div>

            {/* Logo Center */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <img
                className="h-[28px]"
                src="/imgs/Navbarimgs/logobrand.png"
                alt="logo"
              />
            </Link>

            {/* Cart + Contact */}
            <div className="flex items-center gap-2">
              <button onClick={() => setCartOpen(true)}>
                <img
                  className="h-[40px]"
                  src="/imgs/Navbarimgs/CartButton.png"
                  alt="cart"
                />
              </button>

              <NavLink
                to="/contact"
                className="text-lg font-medium font-robotoMono text-[#0F0F0F] bg-[#AE9B84] py-2 px-4 rounded-md"
              >
                Contact
              </NavLink>
            </div>
          </nav>

          {/* ========== Mobile Nav ========== */}
          <nav className="md:hidden">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/">
                <img
                  className="h-[28px]"
                  src="/imgs/Navbarimgs/logobrand.png"
                  alt="logo"
                />
              </Link>

              {/* Toggle menu */}
              <button
                className="text-[#B3B3B2] focus:outline-none"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="Toggle menu"
              >
                <img src="imgs/Navbarimgs/MenuButton.svg" />
              </button>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="flex flex-col gap-2 ps-0">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `${baseClasses} w-full ${isActive ? activeClasses : inactiveClasses} block`
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/products"
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `${baseClasses} w-full ${isActive ? activeClasses : inactiveClasses} block`
                    }
                  >
                    Products
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium font-robotoMono text-[#0F0F0F]  hover:bg-[#9c876f] transition-colors duration-300 bg-[#AE9B84] py-2 px-4 rounded-md w-full text-center block"
                  >
                    Contact
                  </NavLink>
                </li>

                {/* زر الكارت في الموبايل */}
                <li className="flex justify-center">
                  <button
                    onClick={() => {
                      setOpen(false);
                      setCartOpen(true);
                    }}
                    className="flex items-center justify-center w-full bg-[#242424] hover:bg-[#9c876f] transition-colors duration-300 rounded-md"
                  >
                    <img
                      className="h-[45px]"
                      src="/imgs/Navbarimgs/CartButton.png"
                      alt="cart"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* ✅ Cart Drawer من Headless UI */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default Navbar;

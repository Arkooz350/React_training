import { is } from "date-fns/locale";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavbarCustum({ isOpen, setIsOpen }) {
  const [sideBarData, setsideBarData] = useState([
    { icon: "Home", label: "dashboard", path: "/dashbord" },
    { icon: "User", label: "Profile", path: "/profile" },
    { icon: "Abonnement", label: "Abonnement", path: "/abonnement" },
    { icon: "Aide", label: "Aide", path: "/aide" },
    { icon: "Service", label: "Service", path: "/service" },
    { icon: "Profile", label: "Profile", path: "/profile" },
    { icon: "Se déconnecter", label: "Se déconnecter", path: "/logout" },
  ]);

  return (
    <>
      {isOpen && (
        <aside
          className={`${isOpen ? "w-64" : "w-40"} bg-gray-600 rounded-2xl shadow-lg text-white transition-discrete ease-in-out duration-300 `}
        >
          <nav className="p-4">
            {sideBarData.map((item, index) => (
              <NavLink
                key={item.icon}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-lg ${isActive ? "bg-gray-800" : "hover:bg-gray-700"}`
                }
              >
                {item.icon}
              </NavLink>
            ))}
          </nav>
        </aside>
      )}
    </>
  );
}

export default NavbarCustum;

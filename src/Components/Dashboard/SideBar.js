import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faPlus, faUsers, faCartShopping, faTruck } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import "./bars.css";
import { Menu } from '../../context/MenuContext';
import { WindowSize } from '../../context/WindowContext';
import { useContext, useEffect, useState } from 'react';
import { Axios } from "../../Api/axios";
import { USER } from "../../Api/Api";

function SideBar() {
    const menu = useContext(Menu);
    const { windowsSize } = useContext(WindowSize);
    const isOpen = menu.isOpen;
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        Axios(`${USER}`)
            .then((data) => setUser(data.data))
            .catch(() => navigate("/login", { replace: true }));
    }, []); 

    return (
        <>
            <div className='' style={{
                position: "fixed",
                top: "70px",
                left: "0px",
                width: "100%",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.2)",
                display: windowsSize < 768 && isOpen ? "block" : "none"
            }}>
            </div>

            <div
                className="SideBar z-1 pt-3"
                style={{
                    width: isOpen ? "240px" : "fit-content",
                    left: windowsSize < 768 ? (isOpen ? "0" : "-100%") : 0,
                    position: windowsSize < 768 ? "fixed" : "sticky"
                }}
            >
{user.role === "1995" && (
  <>
    <NavLink to={"users"} className="d-flex align-items-center gap-2 mb-1 sidebar-link">
      <FontAwesomeIcon
        style={{
          padding: isOpen ? "10px 8px 10px 15px" : "10px 15px",
        }}
        icon={faUsers}
      />
      <p style={{ display: isOpen ? "block" : "none" }} className="m-0">
        Users
      </p>
    </NavLink>

    <NavLink to={"users/AddUser"} className="d-flex align-items-center gap-2 sidebar-link">
      <FontAwesomeIcon
        style={{
          padding: isOpen ? "10px 8px 10px 15px" : "10px 15px",
        }}
        icon={faPlus}
      />
      <p style={{ display: isOpen ? "block" : "none" }} className="m-0">
        Add Users
      </p>
    </NavLink>
  </>
)}

{(user.role === "1995" || user.role === "1996" || user.role === "1999") && (
  <NavLink to={"/Dashboard/writer"} className="d-flex align-items-center gap-2 sidebar-link">
    <FontAwesomeIcon
      style={{
        padding: isOpen ? "10px 8px 10px 15px" : "10px 15px",
      }}
      icon={faKeyboard}
    />
    <p style={{ display: isOpen ? "block" : "none" }} className="m-0">
      writer
    </p>
  </NavLink>
)}
{(user.role === "1995" || user.role === "1996" || user.role === "1999") && (
  <NavLink to={"/Dashboard/Categories"} className="d-flex align-items-center gap-2 sidebar-link">
    <FontAwesomeIcon
      style={{
        padding: isOpen ? "10px 8px 10px 15px" : "10px 15px",
      }}
      icon={faCartShopping}
    />
    <p style={{ display: isOpen ? "block" : "none" }} className="m-0">
      Categories
    </p>
  </NavLink>
)}
{(user.role === "1995" || user.role === "1996" || user.role === "1999") && (
  <NavLink to={"/Dashboard/Categories/Add"} className="d-flex align-items-center gap-2 sidebar-link">
    <FontAwesomeIcon
      style={{
        padding: isOpen ? "10px 8px 10px 15px" : "10px 15px",
      }}
      icon={faPlus}
    />
    <p style={{ display: isOpen ? "block" : "none" }} className="m-0">
      Add Category
    </p>
  </NavLink>
)}
{(user.role === "1995" || user.role === "1996" || user.role === "1999") && (
  <NavLink to={"/Dashboard/Products"} className="d-flex align-items-center gap-2 sidebar-link">
    <FontAwesomeIcon
      style={{
        padding: isOpen ? "10px 8px 10px 15px" : "10px 15px",
      }}
      icon={faTruck}
    />
    <p style={{ display: isOpen ? "block" : "none" }} className="m-0">
      Products
    </p>
  </NavLink>
)}
{(user.role === "1995" || user.role === "1996" || user.role === "1999") && (
  <NavLink to={"/Dashboard/Products/Add"} className="d-flex align-items-center gap-2 sidebar-link">
    <FontAwesomeIcon
      style={{
        padding: isOpen ? "10px 8px 10px 15px" : "10px 15px",
      }}
      icon={faPlus}
    />
    <p style={{ display: isOpen ? "block" : "none" }} className="m-0">
      Add Products
    </p>
  </NavLink>
)}
            </div>
        </>
    );
}

export default SideBar;

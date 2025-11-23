import "./bars.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../../context/MenuContext';
import { useContext, useEffect, useState } from "react";
import { Axios } from "../../Api/axios";
import { USER, LOGOUT } from "../../Api/Api";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const menu = useContext(Menu);
  const setIsOpen = menu.setIsOpen;
  const [user, setuser] = useState();
  const cookie = Cookie();
    const navigate =useNavigate()
  useEffect(() => {
    Axios
      .get(`${USER}`)
      .then((res) => setuser(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleLogout() {
    Axios
      .get(`${LOGOUT}`).then(() => {cookie.remove("e-commerce"); navigate('/login') })
      .catch((err) => console.log(err));
  }

  return (
    <div className="NavBar position-fixed d-flex align-items-center justify-content-between w-100 px-4 py-2 bg-light shadow">
      <div className="d-flex align-items-center gap-4">
        <h3 className="mb-0">E-Commerce</h3>
        <FontAwesomeIcon
          onClick={() => setIsOpen((prev) => !prev)}
          cursor={'pointer'}
          icon={faBars}
          size="lg"
        />
      </div>

      <div className="dropdown ms-auto">
        <button
          className="btn btn-secondary dropdown-toggle z-2"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {user?.name || "Loading..."}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" onClick={handleLogout} href="#">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

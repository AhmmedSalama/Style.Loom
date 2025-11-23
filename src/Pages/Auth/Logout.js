import { baseURL, LOGOUT } from "../../Api/Api";
import axios from "axios";
import Cookie from "cookie-universal";

function Logout() {
    const cookie = Cookie();
    async function handleLogout() {
        try {
            const response = await axios.get(`${baseURL}/${LOGOUT}`, {
                headers: {
                    Authorization: "Bearer " + cookie.get("e-commerce"),
                },
            });
            cookie.remove("e-commerce");
        } catch (err) {
            console.error("Logout error:", err);
        }
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;

import axios from "axios";
import { useEffect } from "react";
import { baseURL, GOOGLE_CALL_BACK } from "../../Api/Api";
import { useLocation } from "react-router-dom";
import Cookie from "cookie-universal"
function GoogleCallback() {
    const location = useLocation(); // ✅ صححناها هنا
    const cookie = Cookie();
    useEffect(() => {
        async function GoogleCall() {
            try {
                const res = await axios.get(`${baseURL}/${GOOGLE_CALL_BACK}${location.search}`);
                const token = res.data.access_token
                cookie.set("e-commerce",token)
            } catch (err) {
                console.log(err);
            }
        }
        GoogleCall();
    }, []);

    return (
        <h1>Google Call back</h1>
    );
}

export default GoogleCallback;

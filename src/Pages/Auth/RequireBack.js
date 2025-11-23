import Cookie from "cookie-universal";
import { Outlet, useNavigate } from "react-router-dom";
function RequireBack(){
const cookie = Cookie()
const token =  cookie.get("e-commerce");
const navigate = useNavigate();
return token ? window.history.back() : <Outlet/>
}

export default RequireBack
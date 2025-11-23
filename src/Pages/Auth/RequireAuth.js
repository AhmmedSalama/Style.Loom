import { Navigate, Outlet, replace } from "react-router-dom"
import Cookie from "cookie-universal"
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL ,USER } from "../../Api/Api";
import LoadingSpinner from "../../Components/LoadingSpinner";
import {useNavigate} from "react-router-dom";
import Err403 from "./Err403";
function RequireAuth({allowerole}){
    const cookie = Cookie();
    const token = cookie.get("e-commerce");
    const [user,setuser]= useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`${baseURL}/${USER}`,{
            headers:{
                Authorization: `Bearer ${token}`
            },

        }).then((res)=> setuser(res.data) ).catch(()=>navigate("/login" , { replace: true }))
    },[])
    return token ? (
        user ==="" ?(
            <LoadingSpinner/>
        ) :allowerole.includes(user.role ) ?(
            <Outlet/>
        ):(
            <Err403 role={user.role}/>
        )
        
    ): (
        <Navigate to={"/login"} replace={true}/>
    )
}

export default RequireAuth
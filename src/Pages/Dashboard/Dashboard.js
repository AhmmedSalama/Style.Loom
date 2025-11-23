import { Outlet } from "react-router-dom"
import NavBar from "../../Components/Dashboard/NavBar"
import SideBar from "../../Components/Dashboard/SideBar"
function Dashboard(){
    return(
        <div className="position-relative">
            <NavBar/>
           <div className="Dashboard d-flex gap-1" style={{marginTop:"70px"}}>
            <SideBar/>
            <Outlet/>
           </div>
        </div>

    )
}

export default Dashboard
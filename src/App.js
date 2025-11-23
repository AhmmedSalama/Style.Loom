import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import Users from "../src/Pages/Dashboard/Users"
import GoogleCallback from "./Pages/Auth/GoogleCallback"
import Dashboard from "./Pages/Dashboard/Dashboard"
import './App.css';
import { Route, Routes,} from "react-router-dom";
import RequireAuth from "./Pages/Auth/RequireAuth"
import EditUser from "./Pages/Dashboard/EditUser"
import AddUser from "./Pages/Dashboard/AddUser.js"
import Writer from "./Pages/Dashboard/Writer.js"
import NotFound from "./Pages/Auth/NotFound.js"
import RequireBack from "./Pages/Auth/RequireBack.js"
import AddCategories from "./Pages/Dashboard/AddCategories.js"
import Categories from "./Pages/Dashboard/Categories.js"
import EditCategory from "./Pages/Dashboard/EditCategory.js"
import Products from "./Pages/Dashboard/Products.js"
import AddProducts from "./Pages/Dashboard/AddProducts.js"
import EditProducts from "./Pages/Dashboard/EditProducts.js"
import HomePage from "./Components/Website/HomePage/HomePage.js"
import AboutUs from "./Components/Website/AboutUs/AboutUs.js"
import Website from "./Components/Website/Website.js"
import WebsiteProducts from "./Components/Website/HomePage/WebsiteProducts.js"
import WebsiteProductsD from "./Components/Website/HomePage/WebsiteProductsD.js"
import Contact from "./Components/Website/contact/Contact.js"

function App() {
  return (
    <div className="App bg-black">
      <Routes>
        <Route element={<Website/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Products" element={<WebsiteProducts />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/ProductDetails/:id" element={<WebsiteProductsD />}/>
        </Route>

        <Route element={<RequireBack/>}>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        </Route>
        <Route path="/users" element={<Users/>}/>
        <Route path="/auth/google/callback" element={<GoogleCallback/>}/>
        <Route path="*" element={<NotFound />} />
        {/* Protceted Routes */}
        <Route element={<RequireAuth allowerole={["1995",'1996',"1999"]}/>}>
        <Route path="/Dashboard" element={<Dashboard />}>
        <Route element={<RequireAuth allowerole={"1995"} />}>
        <Route path="users" element={<Users />} />
        <Route path="users/AddUser" element={<AddUser/>} />
        <Route path="users/:id" element={<EditUser/>} />
        </Route>

        <Route element={<RequireAuth allowerole={["1995",'1996',"1999"]} />}>
        <Route path="writer" element={<Writer/>} />
        <Route path="Categories" element={<Categories/>}/> 
        <Route path="Categories/Add" element={<AddCategories/>} />
        <Route path="Categories/:id" element={<EditCategory/>} />
        <Route path="Products" element={<Products/>}/> 
        <Route path="Products/Add" element={<AddProducts/>} />
        <Route path="Products/Edit/:id" element={<EditProducts/>} />
        </Route>

        </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

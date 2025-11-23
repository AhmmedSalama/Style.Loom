import { useState } from "react";
import axios from "axios";
import { register, baseURL } from "../../Api/Api";
import { Link } from "react-router-dom";
import './Register.css';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import LoadingSpinner from '../../Components/LoadingSpinner';
import Cookie from "cookie-universal"

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err,seterr]=useState("");
  const [loading, setLoading] = useState(false);
  const cookie = Cookie()
  const navigate = useNavigate();

  function HanldeChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function HanldeSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/${register}`, form);
      const token = res.data.token;
      cookie.set("e-commerce",token)
      setLoading(false)
      Swal.fire({
        icon: 'success',
        title: 'Registered successfully!',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        position: 'center', 
      });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      console.log(error)
      setLoading(false)
      if (error.response.status=== 422) {
        seterr("The email has already been taken.")
      }else{
        seterr("Error")
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {loading && <LoadingSpinner/>}
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Welcome Section */}
          <div className="bg-gradient-to-br from-[rgb(174,155,132)] via-[rgb(164,145,122)] to-[rgb(154,135,112)] p-12 flex flex-col justify-content-center items-center text-white">
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white">Welcome Back!</h1>
              <p className="text-white/90 text-lg leading-relaxed">
                Stay connected with us. Please login with your personal info.
              </p>
<Link 
  to="/login" 
  className="inline-block px-8 py-3 border-2 border-white !text-white font-semibold rounded-full hover:!bg-white hover:!text-[rgb(174,155,132)] transition-all duration-300 transform hover:scale-105"
>
  Login
</Link>

            </div>
          </div>

          {/* Form Section */}
          <div className="p-12 flex flex-col justify-center bg-white">
            <form className="space-y-6" onSubmit={HanldeSubmit}>
              <h1 className="text-4xl font-bold text-[rgb(174,155,132)] mb-8">Register</h1>
              
              <div className="space-y-2">
                <label 
                  className="block text-sm font-semibold text-gray-700" 
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(174,155,132)] focus:ring-4 focus:ring-[rgb(174,155,132)]/20 transition-all duration-200 outline-none text-gray-700"
                  value={form.name}
                  onChange={HanldeChange}
                  placeholder="Enter Your Name"
                  minLength={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <label 
                  className="block text-sm font-semibold text-gray-700" 
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(174,155,132)] focus:ring-4 focus:ring-[rgb(174,155,132)]/20 transition-all duration-200 outline-none text-gray-700"
                  value={form.email}
                  onChange={HanldeChange}
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label 
                  className="block text-sm font-semibold text-gray-700" 
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(174,155,132)] focus:ring-4 focus:ring-[rgb(174,155,132)]/20 transition-all duration-200 outline-none text-gray-700"
                  value={form.password}
                  onChange={HanldeChange}
                  placeholder="Enter Your Password"
                  required
                  minLength={6}
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[rgb(174,155,132)] to-[rgb(154,135,112)] hover:from-[rgb(164,145,122)] hover:to-[rgb(144,125,102)] text-white font-bold py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Register
              </button>
              
              {err !== "" && (
                <p className="text-red-600 text-sm font-medium text-center bg-red-50 py-2 rounded-lg">
                  {err}
                </p>
              )}

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">أو</span>
                </div>
              </div>

              <a href="http://localhost:8000/login-google" className="block">
                <button 
                  type="button" 
                  className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold py-3.5 rounded-full hover:bg-gray-50 hover:border-[rgb(174,155,132)] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <img 
                    src="../imgs/Google_Chrome_icon.svg" 
                    alt="Google" 
                    width="20" 
                    className="w-5 h-5"
                  />
                  <span>تسجيل الدخول باستخدام جوجل</span>
                </button>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

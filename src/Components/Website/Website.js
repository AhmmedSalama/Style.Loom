import { Outlet, useLocation } from "react-router-dom" // 💡 تم إضافة useLocation
import Navbar from "./navbar/Navbar"
import CategoriesMarquee from "./HomePage/CategoriesMarquee"
import Footer from "./Footer/Footer"
import ReviewsCard from "./HomePage/ReviewsCard"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../Api/axios"
import { prods } from "../../Api/Api"

function Website(){
    // 💡 Hook لجلب المسار الحالي
    const location = useLocation();

    // 💡 useEffect لتنفيذ التمرير إلى أعلى الصفحة عند تغيير المسار
    useEffect(() => {
        // عند تغيير المسار (pathname)، يتم تنفيذ التمرير
        window.scrollTo(0, 0); 
    }, [location.pathname]); // يتم إعادة تشغيله عند تغيير الـ pathname فقط

    const [active, setActive] = useState("Womens");
    const activeClass = "bg-[#C2B4A3] text-black border-none rounded-md ";
    const classul =
        "rounded-md p-2 font-robotoMono text-[#B3B3B2] border-1 border-dashed border-[#404040] hover:bg-[#C2B4A3] hover:text-black";

    return(
        <>
        <Navbar/>
        
       <div className="container">
           
           <Outlet/>
        <div className="TheStyleLoom mt-5">
            <div className="container p-0">
              <div className="heading overflow-hidden rounded-t-xl relative p-[16px] md:p-[63px] border-dashed border-1 border-[#404040] ">
                <h1 className="font-robotoMono text-4xl font-medium text-white uppercase">
                  The StyleLoom Testimonial Collection.
                </h1>
                <p className="font-robotoMono text-base text-[#676665] text-left">
                  At StyleLoom, our customers are the heartbeat of our brand.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <ReviewsCard
                  name="Sarah Thompson"
                  imgurl="/imgs/landingpage/icons/iconsrev/Image(11).png"
                  addres="New York, USA"
                  comment="StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!"
                  starscount={5}
                />
                <ReviewsCard
                  name="Rajesh Patel"
                  imgurl="imgs/landingpage/icons/iconsrev/Image(10).png"
                  addres="Mumbai, India"
                  comment="Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!"
                  starscount={5}
                />
                <ReviewsCard
                  name="Emily Walker"
                  imgurl="imgs/landingpage/icons/iconsrev/Image(9).png"
                  addres="London, UK"
                  comment="Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom, for dressing our little fashionista."
                  starscount={5}
                />
                <ReviewsCard
                  name="Alejandro Martinez"
                  imgurl="imgs/landingpage/icons/iconsrev/Image(8).png"
                  addres="Barcelona, Spain"
                  comment="Impressed by the quality and style. These shoes turned heads at every event. StyleLoom, you've gained a loyal customer!"
                  starscount={5}
                />
                <ReviewsCard
                  name="Priya Sharma"
                  imgurl="imgs/landingpage/icons/iconsrev/Image(7).png"
                  addres="Delhi, India"
                  comment="Perfect fit and exceptional quality. These jeans have become my go-to for casual and chic outings."
                  starscount={5}
                />
                <ReviewsCard
                  name="Maria Rodriguez"
                  imgurl="imgs/landingpage/icons/iconsrev/Image(6).png"
                  addres="Mexico City, Mexico"
                  comment="Stylish sneakers that don't compromise on comfort. StyleLoom knows how to balance fashion and functionality."
                  starscount={5}
                />
              </div>
            </div>
        </div>

        <div className="HaveQuestions  mt-5">
            <div className="container p-0">
              <div className="p-[16px] md:p-[63px] heading rounded-t-xl relative border-1 border-dashed border-[#404040]">
                <h1 className="font-robotoMono text-4xl font-medium text-white uppercase">
                  Have Questions? We Have Answers.
                </h1>

                <p className="font-robotoMono text-base text-[#676665] text-left">
                  Ease into the world of StyleLoom with clarity. Our FAQs cover
                  a spectrum of topics.
                </p>

                <ul className="flex gap-2 p-0 mt-4 justify-center md:justify-start flex flex-wrap">
                  <li>
                    <button
                      onClick={() => setActive("All")}
                      className={`${classul} ${
                        active === "All" ? activeClass : ""
                      }`}
                    >
                      All
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => setActive("Ordering")}
                      className={`${classul} ${
                        active === "Ordering" ? activeClass : ""
                      }`}
                    >
                      Ordering
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => setActive("Shipping")}
                      className={`${classul} ${
                        active === "Shipping" ? activeClass : ""
                      }`}
                    >
                      Shipping
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => setActive("Returns")}
                      className={`${classul} ${
                        active === "Returns" ? activeClass : ""
                      }`}
                    >
                      Returns
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => setActive("Support")}
                      className={`${classul} ${
                        active === "Support" ? activeClass : ""
                      }`}
                    >
                      Support
                    </button>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="border-1 border-dashed border-[#404040] p-5">
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    How can I place an order on StyleLoom?
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Ordering is easy! Simply browse our website, add items to
                    your cart, and proceed to checkout. Follow the prompts to
                    enter your details and complete your purchase.
                  </p>
                </div>

                <div className="border-1 border-dashed border-[#404040] p-5">
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    Can I modify or cancel my order after placing it?
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Unfortunately, once an order is confirmed, modifications or
                    cancellations may not be possible. Please review your order
                    carefully before completing the purchase.
                  </p>
                </div>

                <div className="border-1 border-dashed border-[#404040] p-5">
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    What payment methods do you accept?
                  </h2>
                  <p className="text-base text-[#81807E]">
                    We accept a variety of payment methods, including
                    credit/debit cards, net banking, and select digital wallets.
                    Choose the option that suits you best during checkout.
                  </p>
                </div>

                <div className="border-1 border-dashed border-[#404040] p-5">
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    How do I initiate a return?
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Visit our Returns page and follow the provided instructions.
                    Ensure your item meets our return criteria, and our team
                    will guide you through the process.
                  </p>
                </div>

                <div className="border-1 rounded-none lg:rounded-bl-xl border-dashed border-[#404040] p-5">
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    How can I track my order?
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Once your order is dispatched, you'll receive a tracking
                    number via email. Use this number to track your package in
                    real-time on our website.
                  </p>
                </div>

                <div className="border-1 rounded-b-xl lg:rounded-br-xl lg:rounded-bl-none border-dashed border-[#404040] p-5">
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    Do you offer exchanges for products?
                  </h2>
                  <p className="text-base text-[#81807E]">
                    At this time, we don't offer direct product exchanges. If
                    you'd like a different item, please initiate a return and
                    place a new order.
                  </p>
                </div>
              </div>
            </div>
            
        </div>
        <div className="elevateyourwardrobe relative overflow-hidden rounded-xl bg-[#C2B4A3] mt-5">
      {/* الحاوية الداخلية */}
      <div className="
        p-4 md:p-[63px]
        flex flex-col md:flex-row
        items-center justify-center
        md:text-left
        gap-6 md:gap-12
        min-h-[300px]
      ">
        {/* النص */}
        <div className="max-w-[750px] z-10">
          <h1 className="text-[#0F0F0F] text-3xl md:text-5xl uppercase font-medium font-robotoMono mb-3">
            ELEVATE YOUR WARDROBE
          </h1>
          <p className="text-[#1F1F1F] text-base font-robotoMono">
            Don&apos;t miss out – experience the epitome of fashion by clicking
            &apos;Buy Now&apos; and embrace a world of chic elegance delivered to
            your doorstep. Your style journey begins here.
          </p>
        </div>

        {/* الزر */}
        <Link
          to="/Products"
          className="w-full md:w-auto text-center bg-[#1F1F1F] text-white font-robotoMono
                      text-sm rounded-md hover:bg-[#2A2A2A] transition-all
                      py-3 px-4 md:py-[18px] md:px-[24px] z-10"
        >
          Shop Now ↗
        </Link>
      </div>
        </div>
        </div>
        <CategoriesMarquee/>
        <Footer/>
        </>
    )
}

export default Website
// src/Pages/Website/LandingPage.jsx
import Card from "./Card";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { prods } from "../../../Api/Api";
import { useEffect, useState } from "react";
import { Axios } from "../../../Api/axios";

function LandingPage() {
  const [active, setActive] = useState("Womens");
  const activeClass = "bg-[#C2B4A3] text-black border-none rounded-md ";
  const classul =
    "rounded-md p-2 font-robotoMono text-[#B3B3B2] border-1 border-dashed border-[#404040] hover:bg-[#C2B4A3] hover:text-black";

  const [products, setproducts] = useState([]);

  useEffect(() => {
    Axios.get(`${prods}`)
      .then((res) => {
        // الريسبونس عندك عبارة عن Array على المستوى الأعلى
        setproducts(res.data || []);
      })
      .catch((e) => console.log(e));
  }, []);

  const getFirstImage = (p) => {
    // الريسبونس بيدي image كرابط كامل داخل p.images[0].image
    if (Array.isArray(p?.images) && p.images.length > 0 && p.images[0]?.image) {
      return p.images[0].image; // رابط كامل زي http://127.0.0.1:8000/images/...
    }
    return "/imgs/placeholder.png"; // في حالة مفيش صور
  };

  return (
    <>
      <div className="container rounded-t-xl mt-5">
        <div className="hero relative ">
          {/* صورة الديسكتوب */}
          <img
            src="/imgs/landingpage/DsImage.png"
            alt="landing"
            className="hidden md:block mx-auto rounded-t-xl"
          />

          {/* صورة الموبايل */}
          <img
            src="/imgs/landingpage/mbImage.png"
            alt="landing"
            className="block md:hidden mx-auto rounded-t-xl"
          />

          {/* زرار Shop Now */}
<Link
  to="/Products"
  className="
    ShopNowbtn 
    flex items-center gap-2 
    text-white text-sm font-robotoMono
    bg-[#1A1A1A] 
    border-1 border-dashed border-[#AE9B84] 
    rounded-xl px-3 py-2
    hover:bg-[#2A2A2A] transition-colors duration-300
  "
>
  Shop Now
  <span className="text-xl">↗</span>
</Link>    
        </div>
        <div>
          <div className="rounded-b-xl grid grid-cols-1 md:grid-cols-2 border-x border-b border-dashed border-[#404040]  p-0">
            {/* العمود الأول */}
            <div className="border-b md:border-b-0 md:border-r border-dashed border-[#404040] p-4">
              <ul className="flex gap-2 p-0 mt-4 mb-4 justify-center md:justify-start">
                <li className={classul}>All</li>
                <li className={classul}>Mens</li>
                <li className={classul}>Womens</li>
                <li className={classul}>Kids</li>
              </ul>

              <h1 className="text-white font-robotoMono font-medium text-[28px] md:text-[34px] leading-tight mb-3">
                ELEVATE YOUR STYLE WITH STYLELOOM
              </h1>

              <p className="text-[#676665] text-sm md:text-base max-w-[52ch]">
                Explore a world of fashion at StyleLoom, where trends meet
                affordability. Immerse yourself in the latest styles and seize
                exclusive promotions.
              </p>
            </div>

            {/* العمود الثاني */}
            <div className="grid grid-cols-2">
              {/* أعلى يمين */}
              <div className="flex flex-col items-start justify-center border-r border-b border-dashed border-[#404040] p-[30px]">
                <h3 className="text-white font-robotoMono font-medium text-[28px] m-0">
                  1,500 +
                </h3>
                <p className="text-[#676665] text-sm mt-1">Fashion Products</p>
              </div>

              <div className="flex flex-col items-start justify-center border-b border-dashed border-[#404040] p-[30px]">
                <h3 className="text-white font-robotoMono font-medium text-[28px] m-0">
                  50 +
                </h3>
                <p className="text-[#676665] text-sm mt-1">
                  New arrivals every month.
                </p>
              </div>

              {/* تحت يسار */}
              <div className="flex flex-col items-start justify-center border-r border-dashed border-[#404040] p-[30px]">
                <h3 className="text-white font-robotoMono font-medium text-[28px] m-0">
                  30%
                </h3>
                <p className="text-[#676665] text-sm mt-1">
                  OFF on select items.
                </p>
              </div>

              {/* تحت يمين */}
              <div className="flex flex-col items-start justify-center p-[30px]">
                <h3 className="text-white font-robotoMono font-medium text-[28px] m-0">
                  95%
                </h3>
                <p className="text-[#676665] text-sm mt-1">
                  Customer Satisfaction Rate
                </p>
              </div>
            </div>
          </div>

          <div className="CraftingTrends rounded-xl border-1 border-dashed border-[#404040] mt-5">
            <div className="container p-0">
              <div className="heading p-4">
                <h1 className="font-robotoMono text-[28px] md:text-[38px] lg:text-[48px] font-medium text-white">
                  Crafting Trends, Inspiring Confidence
                </h1>
                <p className="font-robotoMono text-base text-[#676665] text-left">
                  Explore a world of fashion at StyleLoom, where trends meet
                  affordability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 ">
                <div className="item relative border-1 border-dashed border-[#404040] p-5">
                  <img
                    className="mb-7"
                    src="/imgs/landingpage/icons/iconsBg/IconContainer(7).png"
                    alt="icon"
                  />
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    Passionate Craftsmanship
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Every garment at StyleLoom is crafted with passion,
                    reflecting our commitment to quality and innovation.
                  </p>
                </div>

                <div className="item relative border-1 border-dashed border-[#404040] p-5">
                  <img
                    className="mb-7"
                    src="/imgs/landingpage/icons/iconsBg/IconContainer(6).png"
                    alt="dd"
                  />
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    Passionate Craftsmanship
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Every garment at StyleLoom is crafted with passion,
                    reflecting our commitment to quality and innovation.
                  </p>
                </div>

                <div className="item relative border-1 border-dashed border-[#404040] p-5">
                  <img
                    className="mb-7"
                    src="/imgs/landingpage/icons/iconsBg/IconContainer(5).png"
                    alt="dd"
                  />
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    Passionate Craftsmanship
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Every garment at StyleLoom is crafted with passion,
                    reflecting our commitment to quality and innovation.
                  </p>
                </div>

                <div className="item relative border-1 border-dashed border-[#404040] p-5">
                  <img
                    className="mb-7"
                    src="/imgs/landingpage/icons/iconsBg/IconContainer(4).png"
                    alt="dd"
                  />
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    Passionate Craftsmanship
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Every garment at StyleLoom is crafted with passion,
                    reflecting our commitment to quality and innovation.
                  </p>
                </div>

                <div className="item relative border-1 border-dashed border-[#404040] p-5">
                  <img
                    className="mb-7"
                    src="/imgs/landingpage/icons/iconsBg/IconContainer(3).png"
                    alt="dd"
                  />
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    Passionate Craftsmanship
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Every garment at StyleLoom is crafted with passion,
                    reflecting our commitment to quality and innovation.
                  </p>
                </div>

                <div className="item relative border-1 border-dashed border-[#404040] p-5">
                  <img
                    className="mb-7"
                    src="/imgs/landingpage/icons/iconsBg/IconContainer(2).png"
                    alt="dd"
                  />
                  <h2 className="font-medium text-white text-xl font-robotoMono ">
                    Passionate Craftsmanship
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Every garment at StyleLoom is crafted with passion,
                    reflecting our commitment to quality and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="NavigatingtheStyleLoom rounded-xl border-1 border-dashed border-[#404040] mt-5">
            <div className="container p-0">
              {/* العنوان */}
              <div className="heading uppercase rounded-t-xl relative p-[16px] md:p-[70px]">
                <h1 className="font-robotoMono text-4xl font-medium text-white">
                  Navigating the StyleLoom Fashion Journey.
                </h1>
                <p className="font-robotoMono text-base text-[#676665] text-left">
                  At StyleLoom, we've designed a straightforward shopping
                  experience to make fashion accessible.
                </p>
              </div>

              {/* الجريد */}
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className=" border-1 border-dashed border-[#404040] p-3">
                  <p className="font-robotoMono text-lg text-[#676665] text-left">
                    Step 01
                  </p>
                  <h2 className="font-medium text-white text-xl font-robotoMono">
                    Discover Trends
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Explore our curated collection of over 1000 styles, spanning
                    global fashion trends.
                  </p>
                </div>

                <div className="border-1 border-dashed border-[#404040] p-3">
                  <p className="font-robotoMono text-lg text-[#676665] text-left">
                    Step 02
                  </p>
                  <h2 className="font-medium text-white text-xl font-robotoMono">
                    Effortless Navigation 
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Intuitive filters and categories help you find the perfect
                    pieces tailored to your style.
                  </p>
                </div>

                <div className="border-1 border-dashed border-[#404040] p-3">
                  <p className="font-robotoMono text-lg text-[#676665] text-left">
                    Step 03
                  </p>
                  <h2 className="font-medium text-white text-xl font-robotoMono">
                    Secure Checkout
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Multiple payment options and encrypted transactions ensure a
                    safe and hassle-free purchase.
                  </p>
                </div>

                <div className=" border-1 border-dashed border-[#404040] p-3">
                  <p className="font-robotoMono text-lg text-[#676665] text-left">
                    Step 04
                  </p>
                  <h2 className="font-medium text-white text-xl font-robotoMono">
                    Unbox Happiness
                  </h2>
                  <p className="text-base text-[#81807E]">
                    Unbox a fashion-forward experience delivered right to your
                    door, ready to elevate your style.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ElevateYourStyle rounded-xl border-1 border-dashed border-[#404040] mt-5">
            <div className="container p-0">
              <div className="heading relative  overflow-hidden rounded-t-xl uppercase sm:p-[16px] md:p-[70px] border-dashed border-1 border-[#404040] ">
                <h1 className="font-robotoMono text-4xl font-medium text-white">
                  Elevate Your Style with Our Latest Collection
                </h1>
                <p className="font-robotoMono text-base text-[#676665] text-left">
                  Each piece is crafted to enhance your fashion statement.
                </p>

                <div className="">
                  <ul className="flex gap-2 p-0 mt-4 justify-center md:justify-start">
                    <li>
                      <button
                        onClick={() => setActive("All")}
                        className={`${active}${classul} ${
                          active === "All" ? activeClass : ""
                        } `}
                      >
                        All
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActive("Mens")}
                        className={`${classul} ${
                          active === "Mens" ? activeClass : ""
                        }`}
                      >
                        Mens
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActive("Womens")}
                        className={`${classul} ${
                          active === "Womens" ? activeClass : ""
                        }`}
                      >
                        Womens
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setActive("Kids")}
                        className={`${classul} ${
                          active === "Kids" ? activeClass : ""
                        }`}
                      >
                        Kids
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {products.map((p) => {
                  const imgSrc = getFirstImage(p);
                  return (
                    <div key={p.id} className=" border-1 border-dashed border-[#404040] p-3">
                      <Card
                        image={imgSrc}
                        category={"Womenswear"}           
                        title={p.title}
                        fit={p.description}
                        price={Number(p.price || 0)}
                        onShop={p.id}                     
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

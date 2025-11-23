import { div, Link } from "react-router-dom";
import "./LandingPage.css";
import Card from "./Card";
import { useState } from "react";

function WebsiteProducts() {
  const [active, setActive] = useState("Womens");

  const activeClass = "bg-[#C2B4A3] text-black border-none rounded-md ";
  const classul =
    "rounded-md p-2 font-robotoMono text-[#B3B3B2] border-1 border-dashed border-[#404040] hover:bg-[#C2B4A3] hover:text-black";

  return (
    <>
      <div className="ExploretheLatest relative rounded-xl border-1 border-dashed border-[#404040] mt-5">
        <div className="container p-0">
          <div className="heading relative overflow-hidden rounded-t-xl uppercase p-[16px] md:p-[70px] border-dashed border-1 border-[#404040]">
            <h1 className="font-robotoMono text-4xl font-medium text-white">
              Explore the Latest Trends and Timeless Classics
            </h1>
            <p className="font-robotoMono text-base text-[#676665] text-left">
              Dive into the world of fashion excellence at StyleLoom. <br /> Our
              curated selection brings together the latest trends and timeless
              classics
            </p>

            <div>
              <ul className="flex gap-2 p-0 mt-4 justify-center md:justify-start">
                <li>
                  <button
                    onClick={() => setActive("All")}
                    className={`${classul} ${active === "All" ? activeClass : ""}`}
                  >
                    All
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActive("Mens")}
                    className={`${classul} ${active === "Mens" ? activeClass : ""}`}
                  >
                    Mens
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActive("Womens")}
                    className={`${classul} ${active === "Womens" ? activeClass : ""}`}
                  >
                    Womens
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => setActive("Kids")}
                    className={`${classul} ${active === "Kids" ? activeClass : ""}`}
                  >
                    Kids
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 1 */}
          <div>
            <div className="flex items-center justify-between flex-wrap p-3">
              <h1 className="text-white font-robotoMono font-medium text-3xl">
                Dress Collection
              </h1>
              <Link
                to=""
                className="flex items-center gap-2 text-white text-sm font-robotoMono bg-[#1A1A1A] border-1 border-dashed border-[#AE9B84] rounded px-3 py-2 hover:bg-[#2A2A2A] transition-colors duration-300"
              >
                View All ↗
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div
                to="/products/timeless-a-line-evening-dress"
                className="border-1 border-dashed border-[#404040] p-3 block"
                aria-label="Timeless A-line Evening Dress details"
              >
                <Card
                  image="/imgs/landingpage/cartimgs/imagecart(5).png"
                  category="Womenswear"
                  title="Timeless A-line Evening Dress"
                  fit="Ankle-length"
                  price={109.99}
                  onShop={() => console.log("go to PDP")}
                />
              </div>

              <div
                to="/products/floral-bloom-maxi-dress"
                className="border-1 border-dashed border-[#404040] p-3 block"
                aria-label="Floral Bloom Maxi Dress details"
              >
                <Card
                  image="/imgs/landingpage/cartimgs/imagecart(3).png"
                  category="Womenswear"
                  title="Floral Bloom Maxi Dress"
                  fit="Slim Fit"
                  price={54.99}
                  onShop={() => console.log("go to PDP")}
                />
              </div>

              <div
                to="/products/elegant-evening-gown"
                className="border-1 border-dashed border-[#404040] p-3 block"
                aria-label="Elegant Evening Gown details"
              >
                <Card
                  image="/imgs/landingpage/cartimgs/imagecart(4).png"
                  category="Womenswear"
                  title="Elegant Evening Gown"
                  fit="Flowing skirt"
                  price={89.99}
                  onShop={() => console.log("go to PDP")}
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <div className="flex items-center justify-between flex-wrap p-3">
              <h1 className="text-white font-robotoMono font-medium text-3xl">
                Accessories
              </h1>
              <Link
                to=""
                className="flex items-center gap-2 text-white text-sm font-robotoMono bg-[#1A1A1A] border-1 border-dashed border-[#AE9B84] rounded px-3 py-2 hover:bg-[#2A2A2A] transition-colors duration-300"
              >
                View All ↗
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div
                
                className="border-1 border-dashed border-[#404040] p-3 block"
                aria-label="Wide-Brim Bucket Hat details"
              >
                <Card
                  image="/imgs/landingpage/cartimgs/imagecart(8).png"
                  category="Accessories"
                  title="Wide-Brim Bucket Hat"
                  fit="Any face shape"
                  price={69.99}
                  onShop={() => console.log("go to PDP")}
                />
              </div>

              <div
                
                className="border-1 border-dashed border-[#404040] p-3 block"
                aria-label="Sophisticate Sun Hat details"
              >
                <Card
                  image="/imgs/landingpage/cartimgs/imagecart(2).png"
                  category="Accessories"
                  title="Sophisticate Sun Hat"
                  fit="One size fits all"
                  price={24.99}
                  onShop={() => console.log("go to PDP")}
                />
              </div>

              <div
                to="/products/timeless-fedora"
                className="border-1 border-dashed border-[#404040] p-3 block"
                aria-label="Timeless Fedora details"
              >
                <Card
                  image="/imgs/landingpage/cartimgs/imagecart(9).png"
                  category="Accessories"
                  title="Timeless Fedora"
                  fit="Any face shape"
                  price={79.99}
                  onShop={() => console.log("go to PDP")}
                />
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <div className="flex items-center justify-between flex-wrap p-3">
              <h1 className="text-white font-robotoMono font-medium text-3xl">
                Bags and HandBags
              </h1>
              <Link
                to=""
                className="flex items-center gap-2 text-white text-sm font-robotoMono bg-[#1A1A1A] border-1 border-dashed border-[#AE9B84] rounded px-3 py-2 hover:bg-[#2A2A2A] transition-colors duration-300"
              >
                View All ↗
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div
                to="/products/bold-backpack"
                className="border-1 border-dashed border-[#404040] p-3 block"
                aria-label="Bold Backpack details"
              >
                <Card
                  image="/imgs/landingpage/cartimgs/imagecart(10).png"
                  category="Hand Bag"
                  title="Bold Backpack"
                  fit="Roomy interior"
                  price={129.99}
                />
              </div>

              <div
                to="/products/night-out-glam"
                className="border-1 border-dashed border-[#404040] p-3 block"
                aria-label="Night Out Glam details"
              >
                <Card
                  image="/imgs/landingpage/cartimgs/imagecart(11).png"
                  category="Hand Bag"
                  title="Night Out Glam"
                  fit="Compact size"
                  price={79.99}
                />
              </div>

              <div
                className="border-1 border-dashed border-[#404040] p-3 block"
                aria-label="Urban Chic Handbag details"
              >
                <Card
                  image="/imgs/landingpage/cartimgs/imagecart(12).png"
                  category="Hand Bag"
                  title="Urban Chic Handbag"
                  fit="Spacious"
                  price={49.99}
                  onShop={122}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebsiteProducts;

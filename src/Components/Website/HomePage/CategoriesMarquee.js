import Marquee from "react-fast-marquee";

export default function CategoriesMarquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full py-4 border-y border-dashed border-[#404040] mt-5">
      <Marquee
        gradient={false}   
        speed={40}          
        pauseOnHover={true}  
        direction="left"    
        className="flex"    
      >
        <div className="text-white items-center flex gap-1 ">
          <img src="imgs/landingpage/icons/iconsBg/Clippathgroup.png" alt="k" />
          <p className="m-0 uppercase text-[#595959] text-xl ">Tank Top</p>
        </div>

        <div className="text-white items-center flex gap-1 ">
          <img src="imgs/landingpage/icons/iconsBg/Clippathgroup.png" alt="k" />
          <p className="m-0 uppercase text-[#595959] text-xl ">T-Shirt</p>
        </div>

        <div className="text-white items-center flex gap-1 ">
          <img src="imgs/landingpage/icons/iconsBg/Clippathgroup.png" alt="k" />
          <p className="m-0 uppercase text-[#595959] text-xl ">Long-Sleeve T-Shir</p>
        </div>

        <div className="text-white items-center flex gap-1 ">
          <img src="imgs/landingpage/icons/iconsBg/Clippathgroup.png" alt="k" />
          <p className="m-0 uppercase text-[#595959] text-xl ">Raglan Sleeve Shirt</p>
        </div>

        <div className="text-white items-center flex gap-1 ">
          <img src="imgs/landingpage/icons/iconsBg/Clippathgroup.png" alt="k" />
          <p className="m-0 uppercase text-[#595959] text-xl ">Crop Top</p>
        </div>

        <div className="text-white items-center flex gap-1 ">
          <img src="imgs/landingpage/icons/iconsBg/Clippathgroup.png" alt="k" />
          <p className="m-0 uppercase text-[#595959] text-xl ">V-Neck Shirt</p>
        </div>

        <div className="text-white items-center flex gap-1 ">
          <img src="imgs/landingpage/icons/iconsBg/Clippathgroup.png" alt="k" />
          <p className="m-0 uppercase text-[#595959] text-xl ">Muscle Shirt</p>
        </div>
      </Marquee>
    </div>
  );
}

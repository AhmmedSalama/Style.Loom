import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return(
    <>
<div className="Footer p-5">
  <div className="container">
    <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
      <div className="w-full sm:w-[500px] sm:mr-12 sm:mb-0 mb-4 shrink-0">
        <img className="w-full h-auto" src="/imgs/FooterImgs/Logo.png" alt="logo" />
      </div>
      <div className="flex gap-3 flex-wrap">
        <a className="w-[46px]" href="">
          <img src="imgs/FooterImgs/icons/Buttonlinkinsta.webp" alt="instgram-link" />
        </a>
        <a className="w-[46px]" href="">
          <img src="imgs/FooterImgs/icons/Buttonlink.webp" alt="link-link" />
        </a>
        <a className="w-[46px]" href="">
          <img src="imgs/FooterImgs/icons/Buttonlinktwitt.webp" alt="twitter-link" />
        </a>
        <a className="w-[46px]" href="">
          <img src="imgs/FooterImgs/icons/Buttonlinkbe.webp" alt="be-link" />
        </a>
      </div>
    </div>

  </div>
</div>
      <div className="home-Footer flex border-t w-full border-dashed border-[#404040] p-4">
      <div className="container">


<div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
  {/* Home */}
  <div>
    <h3 className="text-white font-medium text-base mb-3">Home</h3>
    <ul className="m-0 p-0 flex flex-wrap items-center gap-x-2 gap-y-2">
      <li className="flex items-center">
        <Link className="text-base text-[#676665] font-robotoMono" to="">Why Us</Link>
        <img className="inline ms-[10px]" src="/imgs/FooterImgs/icons/Shape.webp" alt="" />
      </li>
      <li className="flex items-center">
        <Link className="text-base text-[#676665] font-robotoMono" to="">About Us</Link>
        <img className="inline ms-[10px]" src="/imgs/FooterImgs/icons/Shape.webp" alt="" />
      </li>
      <li className="flex items-center">
        <Link className="text-base text-[#676665] font-robotoMono" to="">Testimonials</Link>
        <img className="inline ms-[10px]" src="/imgs/FooterImgs/icons/Shape.webp" alt="" />
      </li>
      <li>
        <Link className="text-base text-[#676665] font-robotoMono" to="">FAQ’s</Link>
      </li>
    </ul>
  </div>

  {/* Products */}
  <div>
    <h3 className="text-white font-medium text-base mb-3">Products</h3>
    <ul className="m-0 p-0 flex flex-wrap items-center gap-x-2 gap-y-2">
      <li className="flex items-center">
        <Link className="text-base text-[#676665] font-robotoMono" to="">Menswear</Link>
        <img className="inline ms-[10px]" src="/imgs/FooterImgs/icons/Shape.webp" alt="" />
      </li>
      <li className="flex items-center">
        <Link className="text-base text-[#676665] font-robotoMono" to="">Womenswear</Link>
        <img className="inline ms-[10px]" src="/imgs/FooterImgs/icons/Shape.webp" alt="" />
      </li>
      <li>
        <Link className="text-base text-[#676665] font-robotoMono" to="">Kidswear</Link>
      </li>
    </ul>
  </div>

  {/* Subscribe */}
  <div className="lg:justify-self-end w-full">
    <h3 className="text-white font-medium text-base mb-3">Subscribe to Newsletter</h3>
    <form className="w-full lg:w-auto">
      <div className="flex items-center rounded-xl bg-[#1A1A1A] px-3 py-2 w-full max-w-sm">
        <input
          type="email"
          placeholder="Your Email"
          className="flex-1 bg-transparent outline-none border-0 text-[#E5E5E5] placeholder-[#676665] caret-[#E5E5E5]"
        />
        <button
          type="submit"
          className="ml-3 inline-flex items-center justify-center w-9 h-9 rounded-xl"
          aria-label="Submit email"
        >
          <img src="imgs/FooterImgs/icons/Iconarrow.webp" alt="" className="w-5 h-5" />
        </button>
      </div>
    </form>
  </div>
</div>

      </div>
    </div>
    <div className="copy-right border-t w-full border-dashed border-[#404040] p-4">
      <div className="container flex justify-between items-center flex-wrap">
        <div>
        <p className="text-center text-[#81807E] text-sm m-0 font-robotoMono">
            &copy; {new Date().getFullYear()} StyleLoom. All rights reserved.
        </p>
        </div>
        <ul className="flex items-center gap-2 p-0 mt-2 sm:mt-0">
          <li className="border-r pr-2 border-[#404040] ">
            <Link className="font-robotoMono text-[#81807E]" to="">Terms & Conditions</Link>
          </li>
            <li>
            <Link className='font-robotoMono text-[#81807E]' to="">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </div>
</>
  )
}

export default Footer;

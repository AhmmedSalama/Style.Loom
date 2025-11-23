import { Link } from "react-router-dom";

export default function Card({
  image, category, title, fit, price, onShop ,
}) {
  return (
    <div className="flex flex-col text-white h-full">
      {/* Image */}
      <div className="overflow-hidden rounded-2xl mb-4 rounded-b-none">
        <img
          src={image}
          alt={title}
          className="w-full h-[280px] object-cover"
        />
      </div>

      {/* Top row: category + Shop (للشاشات الكبيرة فقط) */}
      <div className="hidden md:flex items-center justify-between mb-3">
        <span className="inline-flex items-center rounded-full font-robotoMono bg-[#1A1A1A] border-1 border-dashed border-[#404040] text-[#B3B3B2] px-3 py-1 text-sm">
          {category}
        </span>

        {/* زرار الديسكتوب */}
        <Link
          to={`/ProductDetails/${onShop}`}
          className="inline-flex items-center gap-2 px-4 py-2 
                     rounded-xl border-1 border-dashed border-[#AE9B84]  
                     bg-[#1A1A1A] text-white 
                     hover:bg-[#C2B4A3] hover:text-black 
                     transition-colors"
          aria-label="Shop Now"
        >
          Shop Now ↗
        </Link>
      </div>

      {/* للموبايل: الكاتيجوري فوق بس من غير زرار */}
      <div className="flex md:hidden items-center justify-between mb-3">
        <span className="inline-flex items-center rounded-full font-robotoMono bg-[#1A1A1A] border-1 border-dashed border-[#404040] text-[#B3B3B2] px-3 py-1 text-sm">
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-medium font-robotoMono tracking-wide mb-2">
        {title}
      </h3>

      {/* Meta */}
      <p className="text-sm md:text-base text-[#B9B9B9] mb-4">
        <span className="mr-3 text-[#CCCCCC] font-robotoMono text-sm">
          Fit <span>•</span>{" "}
          <strong className="text-[#CCCCCC] font-robotoMono font-medium text-base">
            {fit}
          </strong>
        </span>
        <span className="text-[#81807E] font-robotoMono text-sm">
          Price <span>•</span>{" "}
          <strong className="text-[#CCCCCC] font-medium font-robotoMono text-base">
            ${price.toFixed(2)}
          </strong>
        </span>
      </p>

      <Link
        to={`/ProductDetails/${onShop}`}
        className="md:hidden w-full mt-auto justify-center items-center gap-2 px-4 py-2 
                   rounded-xl border-1 border-dashed border-[#AE9B84]  
                   bg-[#1A1A1A] text-white 
                   hover:bg-[#C2B4A3] hover:text-black 
                   transition-colors"
        aria-label="Shop Now"
      >
        Shop Now ↗
      </Link>
    </div>
  );
}

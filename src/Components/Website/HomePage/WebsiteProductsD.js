// src/Pages/Website/WebsiteProductsD.jsx
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Axios } from "../../../Api/axios";
import { prod } from "../../../Api/Api"; // لم نعد نستخدم CART

const PLACEHOLDER = "/imgs/placeholder.png";
const STATIC_SIZES = ["S", "M", "L", "XL"];
const STATIC_FEATURES = [
  "Distressed detailing for a rugged look",
  "Buttoned front closure with engraved metal buttons",
  "Two chest pockets with buttoned flaps",
  "Two side pockets for added functionality",
  "Adjustable buttons on cuffs for a personalized fit",
  "Rugged wash texture for comfortable styling",
];
const STATIC_CARE = "Tracing its roots back to ancient Greek draped garments...";
const STATIC_MATERIALS = "Flowing from Grecian folds to glittering silks...";

export default function WebsiteProductsD() {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");
  // 💡 isAvailable تعتمد على نجاح جلب البيانات
  const [isAvailable, setIsAvailable] = useState(false); 
  // حالة التحميل العامة
  const [isLoading, setIsLoading] = useState(true); 
  // حالة التحميل الخاصة بزر الإضافة
  const [isAdding, setIsAdding] = useState(false); 
  const { id } = useParams();

  // -----------------------------------------------------
  // جلب بيانات المنتج وتحديد التوفر بناءً على نجاح الطلب
  // -----------------------------------------------------
  useEffect(() => {
    if (!id) return;
    setIsLoading(true);
    Axios.get(`${prod}/${id}`)
      .then((res) => {
        const p = Array.isArray(res.data) ? res.data[0] : res.data;
        
        // 💡 منطق تحديد التوفر الجديد:
        // نعتبره متوفراً إذا كانت بيانات المنتج موجودة (p !== null/undefined)
        if (p) {
          setProduct(p);
          setIsAvailable(true); // المنتج موجود = In Stock
        } else {
          setProduct(null);
          setIsAvailable(false); // المنتج غير موجود أو البيانات فارغة = Out of Stock
        }
      })
      .catch((err) => {
        setProduct(null);
        setIsAvailable(false); // فشل الطلب بالكامل (404, 500) = Out of Stock
        console.error("Product fetch failed (Out of Stock):", err.response || err);
      })
      .finally(() => {
        setIsLoading(false); 
      });
  }, [id]);

  const images = Array.isArray(product?.images)
    ? product.images.map((im) => im?.image).filter(Boolean)
    : [];
  const mainImg = images[0] || PLACEHOLDER;
  const sideImgs = images.slice(1);

  const priceStr =
    typeof product?.price === "number"
      ? `$${product.price.toFixed(2)}`
      : `$${Number(product?.price || 0).toFixed(2)}`;

  // -----------------------------------------------------
  // دالة إضافة المنتج للسلة (تعتمد على حالة isAvailable الحالية)
  // -----------------------------------------------------
  async function AddtoCart() {
    // التحقق المباشر من التوفر
    if (!product || !isAvailable) { 
      Swal.fire({
        icon: "error",
        title: "غير متوفر!",
        text: "لا يمكن إضافة المنتج، لأنه غير متوفر حالياً.",
        showConfirmButton: false,
        timer: 2000,
        background: '#1A1A1A',
        color: '#B9B9B9',
      });
      return;
    }

    setIsAdding(true); 

    try {
      // 1. منطق الإضافة للسلة (Local Storage)
      const getitems = JSON.parse(localStorage.getItem("product") || "[]");
      const newItem = { ...product, selectedSize, quantity: 1 };
      const existingIndex = getitems.findIndex(
        (p) => p.id === product.id && p.selectedSize === selectedSize
      );

      if (existingIndex !== -1) {
        getitems[existingIndex].quantity =
          (getitems[existingIndex].quantity || 1) + 1;
      } else {
        getitems.push(newItem);
      }

      localStorage.setItem("product", JSON.stringify(getitems));

      // 2. إظهار SweetAlert بنجاح الإضافة
      Swal.fire({
        icon: "success",
        title: "تمت الإضافة بنجاح!",
        text: `${product.title} أُضيف إلى سلة التسوق. الحجم: ${selectedSize}`,
        showConfirmButton: false,
        timer: 2500,
        toast: true,
        position: 'top-end',
        background: '#1A1A1A',
        color: '#B7E3A0',
      });

    } catch (err) {
      // خطأ غير متوقع في منطق الواجهة الأمامية
      Swal.fire({
        icon: "error",
        title: "خطأ غير متوقع!",
        text: "حدث خطأ أثناء إضافة المنتج إلى السلة.",
        showConfirmButton: true,
        confirmButtonText: "حسناً",
        background: '#1A1A1A',
        color: '#B9B9B9',
      });
      console.error("Add to Cart failed:", err);
    } finally {
      setIsAdding(false); 
    }
  }

  // -----------------------------------------------------
  // تحديد شكل وشكل حالة التوفر للعرض
  // -----------------------------------------------------
  const statusElement = isLoading ? (
    <span className="inline-flex items-center rounded-full bg-[#353535] text-[#999999] px-2.5 py-1 text-xs border border-dashed border-[#555555] animate-pulse">
      Loading...
    </span>
  ) : isAvailable ? (
    <span className="inline-flex items-center rounded-full bg-[#243220] text-[#B7E3A0] px-2.5 py-1 text-xs border border-dashed border-[#2F4B2A]">
      In Stock
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full bg-[#3D2020] text-[#FF9999] px-2.5 py-1 text-xs border border-dashed border-[#552A2A]">
      Out of Stock
    </span>
  );

  // -----------------------------------------------------
  // واجهة المستخدم (JSX)
  // -----------------------------------------------------
  return (
    <div className="container my-6">
      <div className="rounded-xl border-1 border-dashed border-[#404040] p-5 text-white">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-robotoMono font-medium">
              {product?.title || (isLoading ? "Loading..." : "Product Not Found")}
            </h1>
            <div className="mt-1 flex items-center gap-3">
              <p className="text-[#B9B9B9] m-0">
                {product?.About || product?.description || "No description available"}
              </p>
              {statusElement}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="#"
              className="px-4 py-2 rounded-xl border-1 border-dashed border-[#AE9B84] bg-[#C2B4A3] text-black hover:opacity-90 transition-opacity"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border-1 border-dashed border-[#404040] bg-[#0F0F0F]">
            <img
              src={mainImg}
              alt={product?.title || "product"}
              className="w-full h-[360px] object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            {sideImgs.map((src, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border-1 border-dashed border-[#404040] bg-[#0F0F0F]"
              >
                <img
                  src={src}
                  alt={`side-${i + 1}`}
                  className="w-full h-[180px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Static Details */}
            <div className="rounded-xl border-1 border-dashed border-[#404040] p-5">
              <h3 className="font-robotoMono text-white mb-3">
                Materials, Care and origin
              </h3>
              <p className="text-[#B9B9B9]">{STATIC_CARE}</p>
              <p className="mt-3 text-[#B9B9B9]">{STATIC_MATERIALS}</p>
            </div>

            <div className="rounded-xl border-1 border-dashed border-[#404040] p-5">
              <h3 className="font-robotoMono text-white mb-3">Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#B9B9B9]">
                {STATIC_FEATURES.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            <div className="rounded-xl border-1 border-dashed border-[#404040] p-5">
              <h3 className="font-robotoMono text-white mb-3">Price</h3>
              <p className="text-3xl text-[#CCCCCC]">{priceStr}</p>
              <p className="text-xs text-[#7E7E7E] mt-1">
                MRP incl. of all taxes
              </p>
              {/* الزر الرئيسي */}
              <button
                onClick={AddtoCart}
                disabled={!isAvailable || isLoading || isAdding}
                className={`mt-4 w-full px-4 py-2 rounded-xl border-1 border-dashed 
                  ${!isAvailable || isLoading || isAdding ? 
                    'border-[#666666] bg-[#333333] text-[#999999] cursor-not-allowed' : 
                    'border-[#AE9B84] bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white'
                  }
                  ${isAdding ? 'flex items-center justify-center' : ''}
                `}
              >
                {/* عرض حالة التحميل/التوفر للزر */}
                {isAdding ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Adding...
                    </>
                ) : isLoading ? "Loading..." : isAvailable ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>

            {/* Available Sizes */}
            <div className="rounded-xl border-1 border-dashed border-[#404040] p-5">
              <h3 className="font-robotoMono text-white mb-3">
                Available Sizes
              </h3>
              <div className="flex flex-wrap gap-2">
                {STATIC_SIZES.map((s) => (
                  <label key={s} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="size"
                      value={s}
                      checked={selectedSize === s}
                      onChange={() => setSelectedSize(s)}
                      className="peer sr-only"
                    />
                    <span
                      className={`
                        px-3 py-1 rounded-md border-1 border-dashed border-[#404040]
                        bg-[#1A1A1A] text-[#CCCCCC]
                        hover:bg-[#2A2A2A] cursor-pointer select-none
                        peer-checked:bg-[#C2B4A3] peer-checked:text-black
                        ${selectedSize === s ? "bg-[#C2B4A3] text-black" : ""}
                      `}
                    >
                      {s}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-6 flex items-center gap-3">
          <button
            onClick={AddtoCart}
            disabled={!isAvailable || isLoading || isAdding}
            className={`flex-1 px-4 py-2 rounded-xl border-1 border-dashed 
              ${!isAvailable || isLoading || isAdding ? 
                'border-[#666666] bg-[#333333] text-[#999999] cursor-not-allowed' : 
                'border-[#AE9B84] bg-[#1A1A1A] text-white'
              }
              ${isAdding ? 'flex items-center justify-center' : ''}
            `}
          >
            {isAdding ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Adding...
                </>
            ) : isLoading ? "Loading..." : isAvailable ? "Add to Cart" : "Out of Stock"}
          </button>
          <Link
            to="#"
            className="flex-1 px-4 py-2 rounded-xl border-1 border-dashed border-[#AE9B84] bg-[#C2B4A3] text-black text-center"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function CartDrawer({ isOpen, onClose }) {
  const [items, setItems] = useState([]);

  // تحميل المنتجات من localStorage
  useEffect(() => {
    if (isOpen) {
      const products = JSON.parse(localStorage.getItem("product") || "[]");
      setItems(products);
    }
  }, [isOpen]);

  // ✅ زيادة الكمية
function handleIncrease(id) {
  let newItems = [];

  for (let i = 0; i < items.length; i++) {
    let product = items[i];

    if (product.id === id) {
      product.quantity = (product.quantity || 1) + 1;
    }

    newItems.push(product);
  }

  setItems(newItems);
  localStorage.setItem("product", JSON.stringify(newItems));
}


  // ✅ تقليل الكمية
function handleDecrease(id) {
  let newItems = [];

  for (let i = 0; i < items.length; i++) {
    let product = items[i];

    if (product.id === id && product.quantity > 1) {
      product.quantity = product.quantity - 1;
    }

    newItems.push(product);
  }

  setItems(newItems);
  localStorage.setItem("product", JSON.stringify(newItems));
}


  // ✅ إزالة منتج
  function handleRemove(id) {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
    localStorage.setItem("product", JSON.stringify(filtered));
  }

  // ✅ حساب التوتال
  function calculateTotal() {
    let total = 0;
    items.forEach((item) => {
      const price = Number(item.price || 0);
      const qty = item.quantity || 1;
      total += price * qty;
    });
    return total.toFixed(2);
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 flex justify-end">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="w-full max-w-md bg-[#0F0F0F] p-5 flex flex-col border-l border-[#404040] border-dashed">
                
                {/* ✅ العنوان */}
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title className="text-white text-xl font-robotoMono">Your Cart</Dialog.Title>
                  <button onClick={onClose} className="text-white text-xl">×</button>
                </div>

                {/* ✅ المحتوى */}
                <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                  {items.length === 0 ? (
                    <p className="text-[#888] text-center mt-10">Your cart is empty.</p>
                  ) : (
                    items.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#1A1A1A] border border-[#404040] border-dashed rounded-lg p-3 gap-3">
                        <img
                          src={item?.images?.[0]?.image || "/imgs/placeholder.png"}
                          alt="product"
                          className="w-14 h-14 object-cover rounded border border-[#404040]"
                        />
                        <div className="flex-1 text-sm">
                          <p className="text-white font-robotoMono">{item?.title}</p>
                          <p className="text-[#B9B9B9]">{item?.description || item?.About}</p>
                          <p className="text-[#C2B4A3] mt-1">${Number(item?.price || 0).toFixed(2)}</p>

                          {/* ✅ الكمية */}
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              className="w-8 h-8 rounded bg-red-500 text-white text-lg"
                              onClick={() => handleDecrease(item.id)}
                            >-</button>
                            <span className="text-white text-sm px-2">{item.quantity || 1}</span>
                            <button
                              className="w-8 h-8 rounded bg-green-600 text-white text-lg"
                              onClick={() => handleIncrease(item.id)}
                            >+</button>
                          </div>
                        </div>

                        {/* ✅ حذف */}
                        <button
                          className="text-red-400 text-xs ml-2 hover:text-red-500"
                          onClick={() => handleRemove(item?.id)}
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* ✅ الفوتر */}
                {items.length > 0 && (
                  <div className="mt-4 border-t border-dashed border-[#404040] pt-4">
                    <div className="flex justify-between text-white mb-3 font-robotoMono">
                      <span>Total:</span>
                      <span className="text-[#C2B4A3]">${calculateTotal()}</span>
                    </div>
                    <button className="w-full bg-[#C2B4A3] text-black py-2 rounded-md font-robotoMono">
                      Checkout
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

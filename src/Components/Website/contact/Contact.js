import { Link } from "react-router-dom";
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="rounded-xl border-1 border-dashed border-[#404040] mt-5 mb-5">
        <div className="container p-0">
          {/* العنوان */}
          <div className="heading uppercase rounded-t-xl relative p-[16px] md:p-[70px]">
            <h1 className="font-robotoMono text-[28px] text-4xl font-medium text-white">
              Your Partner in Every Step of Your Fashion Journey.
            </h1>
            <p className="font-robotoMono text-base text-[#676665] text-left">
              24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction.
            </p>
          </div>

          <div className="p-5 md:p-10 lg:p-20 gap-5 border-1 border-dashed border-[#404040]">
            <h1 className="font-robotoMono text-[24px] md:text-[30px] font-medium uppercase text-white ">
              Contact Information
            </h1>
          </div>

          {/* الجريد */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="contact-item border-1 border-dashed border-[#404040] p-[30px] md:p-[50px] flex flex-col items-center">
              <img src="imgs/contactimgs/IconContaineremail.webp" alt="email" className="" />
              <h3 className="font-robotoMono text-lg md:text-[20px] text-white font-medium mt-4">
                Email
              </h3>
              <div className="contact-item border-1 border-dashed border-[#AE9B84] py-[14px] px-[20px] mt-3 text-center rounded-lg bg-[#1F1F1F]">
                <a href="mailto:support@StyleLoom.com" className="font-robotoMono text-base md:text-lg text-[#FFFFFF]">
                  support@StyleLoom.com
                </a>
              </div>
            </div>
            <div className="contact-item border-1 border-dashed border-[#404040] p-[30px] md:p-[50px] flex flex-col items-center">
              <img src="imgs/contactimgs/IconContaine(1).webp" alt="email" className="" />
              <h3 className="font-robotoMono text-lg md:text-[20px] text-white font-medium mt-4">
                Phone
              </h3>
              <div className="contact-item border-1 border-dashed border-[#AE9B84] py-[14px] px-[20px] mt-3 text-center rounded-lg bg-[#1F1F1F]">
                <a href="tel:+1(555)123-4567" className="font-robotoMono text-base md:text-lg text-[#FFFFFF]">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="contact-item border-1 border-dashed border-[#404040] p-[30px] md:p-[50px] flex flex-col items-center">
              <img src="imgs/contactimgs/iconlocationcontact(2).webp" alt="email" className="" />
              <h3 className="font-robotoMono text-lg md:text-[20px] text-white font-medium mt-4">
                Location
              </h3>
              <div className="contact-item border-1 border-dashed border-[#AE9B84] py-[14px] px-[20px] mt-3 text-center rounded-lg bg-[#1F1F1F]">
                <a href="/" className="font-robotoMono text-base md:text-lg text-[#FFFFFF]">
                  Get Direction
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border-1 border-dashed border-[#404040] mt-5 mb-5">
        <div className="container p-0">
          <div className="p-5 gap-4 md:p-10 lg:p-20 md:text-center border-1 border-dashed border-[#404040] flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-black">
            <h1 className="font-robotoMono text-[24px] md:text-[30px] font-medium uppercase text-white mb-0">
              Return Policy
            </h1>
            <Link
              to=""
              className=" flex items-center gap-2 text-white text-sm font-robotoMono bg-[#1A1A1A] border-1 border-dashed border-[#AE9B84] rounded px-3 py-2 hover:bg-[#2A2A2A] transition-colors duration-300 "
            >
              Read Return Policy ↗
            </Link>
          </div>

          {/* الجريد */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className=" border-1 border-dashed border-[#404040] py-[40px] px-[20px] md:py-[50px] md:px-[30px] lg:py-[60px] lg:px-[40px]  flex gap-3  items-center">
              <img src="imgs/contactimgs/EligibilityIcon.webp" alt="email" className="" />
              <div className="">
                <h3 className="font-robotoMono text-[18px] md:text-[22px] lg:text-[24px] font-medium text-white  ">
                  Eligibility
                </h3>
                <p className="font-robotoMono text-[14px] md:text-[16px] lg:text-[18px] text-[#81807E] font-normal mb-0">
                  Items must be unused, with tags attached, and returned within 30 days of delivery.
                </p>
              </div>
            </div>
            <div className=" border-1 border-dashed border-[#404040] py-[40px] px-[20px] md:py-[50px] md:px-[30px] lg:py-[60px] lg:px-[40px]  flex gap-3  items-center">
              <img src="imgs/contactimgs/ProcessIcon.webp" alt="email" className="" />
              <div className="">
                <h3 className="font-robotoMono text-[18px] md:text-[22px] lg:text-[24px] font-medium text-white">
                  Process
                </h3>
                <p className="font-robotoMono text-[14px] md:text-[16px] lg:text-[18px] text-[#81807E] font-normal mb-0">
                  Initiate returns through our Return Center for a smooth and efficient process.
                </p>
              </div>
            </div>
            <div className=" border-1 border-dashed border-[#404040] py-[40px] px-[20px] md:py-[50px] md:px-[30px] lg:py-[60px] lg:px-[40px]  flex gap-3  items-center">
              <img src="imgs/contactimgs/RefundIcon.webp" alt="email" className="" />
              <div className="">
                <h3 className="font-robotoMono text-[18px] md:text-[22px] lg:text-[24px] font-medium text-white">
                  Refund
                </h3>
                <p className="font-robotoMono text-[14px] md:text-[16px] lg:text-[18px] text-[#81807E] font-normal mb-0">
                  Expect a refund to your original payment method within 7-10 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border-1 border-dashed border-[#404040] mt-5 mb-5">
        <div className="container p-0">
          <div className="p-5 gap-4 md:p-10 lg:p-20 md:text-center border-1 border-dashed border-[#404040] flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-black">
            <h1 className="font-robotoMono text-[24px] md:text-[30px] font-medium uppercase text-white mb-0">
              Cancellation Policy
            </h1>
            <Link
              to=""
              className=" flex items-center gap-2 text-white text-sm font-robotoMono bg-[#1A1A1A] border-1 border-dashed border-[#AE9B84] rounded px-3 py-2 hover:bg-[#2A2A2A] transition-colors duration-300 "
            >
              Read Cancellation Policy ↗
            </Link>
          </div>

          {/* الجريد */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className=" border-1 border-dashed border-[#404040] py-[40px] px-[20px] md:py-[50px] md:px-[30px] lg:py-[60px] lg:px-[40px]  flex gap-3  items-center">
              <img src="imgs/contactimgs/CancellationWindowIcon.webp" alt="email" className="" />
              <div className="">
                <h3 className="font-robotoMono text-[18px] md:text-[22px] lg:text-[24px] font-medium text-white  ">
                  Cancellation Window
                </h3>
                <p className="font-robotoMono text-[14px] md:text-[16px] lg:text-[18px] text-[#81807E] font-normal mb-0">
                  Orders can be canceled within 24 hours of placement for a full refund.
                </p>
              </div>
            </div>
            <div className=" border-1 border-dashed border-[#404040] py-[40px] px-[20px] md:py-[50px] md:px-[30px] lg:py-[60px] lg:px-[40px]  flex gap-3  items-center">
              <img src="imgs/contactimgs/CancellationProcessIcon.webp" alt="email" className="" />
              <div className="">
                <h3 className="font-robotoMono text-[18px] md:text-[22px] lg:text-[24px] font-medium text-white">
                  Cancellation Process
                </h3>
                <p className="font-robotoMono text-[14px] md:text-[16px] lg:text-[18px] text-[#81807E] font-normal mb-0">
                  Visit our Order Management section to cancel your order effortlessly.
                </p>
              </div>
            </div>
            <div className=" border-1 border-dashed border-[#404040] py-[40px] px-[20px] md:py-[50px] md:px-[30px] lg:py-[60px] lg:px-[40px]  flex gap-3  items-center">
              <img src="imgs/contactimgs/RefundTimelineicon.webp" alt="email" className="" />
              <div className="">
                <h3 className="font-robotoMono text-[18px] md:text-[22px] lg:text-[24px] font-medium text-white">
                  Refund Timeline
                </h3>
                <p className="font-robotoMono text-[14px] md:text-[16px] lg:text-[18px] text-[#81807E] font-normal mb-0">
                  Refunds for canceled orders are processed within 5-7 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;

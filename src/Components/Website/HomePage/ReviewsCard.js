function ReviewsCard({name ,imgurl, addres , comment ,starscount}) {
  return (
    <div className="ReviewsCard">
      <div className=" border-1 border-dashed border-[#404040] p-6 h-full ">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img
            className="w-[60px] h-[60px] rounded-full object-cover"
            src={imgurl}
            alt="pers"
          />

          <div>
            <h1 className="font-robotoMono text-white text-lg font-medium m-0">
              {name}
            </h1>
            <p className="text-base font-robotoMono text-[#676665] m-0">
              {addres}
            </p>
          </div>
        </div>

        <img
          className="w-[28px] h-[28px]"
          src="/imgs/landingpage/icons/iconsrev/Capa2.png"
          alt="twitter"
        />
      </div>

      <div className="flex gap-1 mb-4 mt-4">
        {Array.from({ length: starscount }).map((_, i) => (
          <img
            key={i}
            src="/imgs/landingpage/icons/iconsrev/star.png"
            alt="star"
            className="w-5 h-5"
          />
        ))}
      </div>
      <p className="text-[#81807E] text-base font-robotoMono text-base">
        {comment}
      </p>
    </div>
    </div>
  );
}

export default ReviewsCard;

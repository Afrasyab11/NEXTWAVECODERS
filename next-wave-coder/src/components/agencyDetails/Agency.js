

export const AgencyDetails = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-3 bg-custom-gradient   rounded-xl px-5 py-10">
        <div className="flex flex-col justify-center items-center gap-y-1 text-white">
          <span className="text-[50px] font-extrabold">10 +</span>
          <span className="text-lg font-extrabold">Projects</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-1  text-white">
          <span className="text-[50px] font-extrabold">20 +</span>
          <span className="text-lg font-extrabold">Clients</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-1 text-white">
          <span className="text-[50px] font-extrabold">24/7</span>
          <span className="text-lg font-extrabold">Support</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-1 text-white">
          <span className="text-[50px] font-extrabold">5 +</span>
          <span className="text-lg font-extrabold">Reviews</span>
        </div>
      </div>
    </>
  );
};

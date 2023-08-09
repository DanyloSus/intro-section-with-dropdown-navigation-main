const Left = () => {
  return (
    <div className="w-[508px] flex flex-col gap-[52px] items-start">
      <h1 className="text-[77.5599px] leading-[75px] font-bold">
        Make remote work
      </h1>
      <p className="text-lg">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className="bg-almost-black text-almost-white rounded-xl px-8 py-4">
        Learn more
      </button>
      <div className="flex items-center justify-between w-full mt-[56px]">
        <img src="./client-databiz.svg" alt="client databiz" />
        <img src="./client-audiophile.svg" alt="client audiophile" />
        <img src="./client-meet.svg" alt="client meet" />
        <img src="./client-maker.svg" alt="client maker" />
      </div>
    </div>
  );
};

export default Left;

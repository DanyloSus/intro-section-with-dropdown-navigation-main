const Left = () => {
  return (
    <div className="w-[508px] flex flex-col gap-[52px] items-start lg:items-center lg:w-full lg:text-center lg:px-5 lg:gap-7">
      <h1 className="text-[77.5599px] leading-[75px] font-bold lg:text-[35.0999px] lg:leading-[0]">
        Make remote work
      </h1>
      <p className="text-lg lg:text-base">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className="bg-almost-black text-almost-white rounded-xl px-8 py-4 lg:py-3 hover:bg-almost-white hover:text-almost-black border border-almost-black transition-colors">
        Learn more
      </button>
      <div
        className="flex items-center justify-between w-full mt-[56px] lg:mt-5"
        id="clients"
      >
        <img src="./client-databiz.svg" alt="client databiz" />
        <img src="./client-audiophile.svg" alt="client audiophile" />
        <img src="./client-meet.svg" alt="client meet" />
        <img src="./client-maker.svg" alt="client maker" />
      </div>
    </div>
  );
};

export default Left;

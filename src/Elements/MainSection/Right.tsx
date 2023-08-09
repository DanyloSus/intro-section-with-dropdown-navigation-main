const Right = () => {
  return (
    <div className="lg:mb-[67px]">
      <img
        src="./image-hero-desktop.png"
        alt="image hero desktop"
        className="h-[640px] lg:hidden"
      />
      <img
        src="./image-hero-mobile.png"
        alt="image hero mobile"
        className="w-screen lg:block hidden"
      />
    </div>
  );
};

export default Right;

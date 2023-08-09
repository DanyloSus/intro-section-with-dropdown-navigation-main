import Left from "./MainSection/Left";
import Right from "./MainSection/Right";

const MainSection = () => {
  return (
    <section className="flex items-end justify-around max-h-full mt-16 lg:flex-col-reverse lg:mt-[26px]">
      <Left />
      <Right />
    </section>
  );
};

export default MainSection;

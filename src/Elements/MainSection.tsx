import Left from "./MainSection/Left";
import Right from "./MainSection/Right";

const MainSection = () => {
  return (
    <section className="flex items-end justify-around max-h-full mt-16 ">
      <Left />
      <Right />
    </section>
  );
};

export default MainSection;

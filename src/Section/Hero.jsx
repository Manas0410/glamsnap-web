import heroWeb from "../assets/hero-web-2.png";
// import heroWeb from "../assets/banner.png";
import heroMobile from "../assets/hero-mobile-2.png";

const Hero = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-6xl font-bold text-center mb-2 mt-4">
        Create <span className="text-[#6d72c3]">Makeups</span> according to your
        mood
      </h1>
      <h1 className="text-2xl md:text-6xl  font-bold text-center mb-4 md:mb-8">
        with just a <span className="text-[#6d72c3]">Picture</span>
      </h1>
      <img
        src={heroWeb}
        alt="banner"
        className="hidden md:block w-full h-auto"
      />

      <img
        src={heroMobile}
        alt="banner-mobile"
        className="block md:hidden w-full h-auto"
      />
    </div>
  );
};

export default Hero;

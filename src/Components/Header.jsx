import logo from "../assets/logo.svg";
import dowloadAppstore from "../assets/appstore.png";
import dowloadPlaystore from "../assets/playstore.png";

const Header = () => {
  return (
    <header className="sticky top-0 h-20 max-sm:h-28 z-50 w-full  backdrop-blur-md  transition-all">
      <div className="flex items-center h-full justify-between  py-3 layout-padding max-sm:flex-col max-sm:gap-2">
        <div className="flex items-center gap-2 ">
          <img src={logo} alt="Logo" className="md:h-12 md:w-12 h-8 w-8" />
          <a href="#" className="font-bold text-2xl md:text-4xl text-gray-800">
            GlamSnap
          </a>
        </div>
        <div className="flex items-center md:gap-4 gap-2 cursor-pointer">
          <a href="#contact">
            <img
              src={dowloadAppstore}
              alt="Download on the App Store"
              className="md:h-12 h-8"
            />
          </a>
          <a href="#contact">
            <img
              src={dowloadPlaystore}
              alt="Get it on Google Play"
              className="md:h-18 h-12"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

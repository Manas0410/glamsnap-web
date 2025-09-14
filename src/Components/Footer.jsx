const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-gray-100 backdrop-blur-sm border-t border-gray-200 py-4 ">
      <div className=" mx-auto layout-padding  flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
        <span>
          &copy; {new Date().getFullYear()} GlamSnap. All rights reserved.
        </span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-[#6d72c3]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#6d72c3]">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

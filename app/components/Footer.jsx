import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200   w-[100%]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Footer Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          {/* Logo and Language Selector */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0">
            {/* <img src={logo} alt="Errands" className="h-8 mb-4 lg:mb-0" /> */}
            <Link
              href="/"
              className=" text-[#87e64b] font-extrabold text-xl md:text-2xl"
            >
              Reka
            </Link>
            <div className="flex items-center space-x-2">
              {/* <img src={flag} alt="Flag" className="h-6" /> */}
              <span className="text-sm font-medium">EN</span>
              <span className="text-sm">▼</span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row  md:space-x-16  lg:space-y-0">
            <div>
              <h4 className="font-semibold mb-4">Reka</h4>
              <ul className="space-y-2 text-sm">
                <li>Dashboard</li>
                <li>Package delivery</li>
                <li>Grocery delivery</li>
                <li>Prescription delivery</li>
                <li>Laundry delivery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                Partner with Reka
              </h4>
              <Link href="">Sell on Reka</Link>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Icons Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <FaFacebook className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            <FaTwitter className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            <FaInstagram className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            <FaLinkedin className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            <FaTiktok className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          </div>
          <div className="flex space-x-4">
            <button className="bg-gray-200 py-2 px-4 rounded-full text-sm hover:bg-gray-300">
              Get the Reka app
            </button>
          </div>
        </div>

        {/* Lower Footer Section */}
        <div className="border-t border-gray-200 mt-8 pt-4">
          <p className="text-sm text-gray-500 text-center">
            &copy; 2024 Reka
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Suppliers
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Terms & Conditions
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Cookies
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

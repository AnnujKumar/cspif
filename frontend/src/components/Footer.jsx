import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Footer = () => (
  <footer className="w-full">
    {/* Blue bar at the top */}
    <div className="w-full h-2 bg-[#1761ac]" />
    <div className="bg-[#142938] w-full py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Email Section */}
        <div className="flex items-center">
          <div className="flex items-center border border-white rounded-full bg-[#D14B3A] px-6 py-3">
            <span className="flex items-center justify-center w-12 h-12 rounded-full border border-white mr-4">
              <IoMdMail className="text-white text-3xl" />
            </span>
            <div className="flex flex-col text-white text-sm leading-tight">
              <span className="opacity-80">Please email us at:</span>
              <span className="font-bold text-base">info@CBSICareresource.org</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-white text-center text-sm opacity-90">
          © Copyrights 2025 CFPIC.In All Rights Reserved.
        </div>

        {/* Socials */}
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <FaFacebookF className="text-white text-lg mb-1" />
            <span className="text-white text-xs">FACEBOOK</span>
          </div>
          <div className="flex flex-col items-center"> 
            <FaInstagram className="text-white text-lg mb-1" />
            <span className="text-white text-xs">INSTAGRAM</span>
          </div>
          <div className="flex flex-col items-center">
            <RxCross2 className="text-white text-lg mb-1" />
            <span className="text-white text-xs">TWITTER</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
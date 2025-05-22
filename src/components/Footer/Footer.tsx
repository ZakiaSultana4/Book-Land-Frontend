import { FaXTwitter, FaInstagram, FaPinterestP } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="bg-cover h-[60%] py-3 md:h-[390px] bg-center bg-no-repeat  flex justify-center items-center w-full mx-auto bg-[url('/assets/Footer.png')]">
      <div className="w-[85%] mx-auto text-white flex flex-col gap-10">
        <div className="flex gap-8 justify-between lg:flex-row flex-col items-center md:items-start md:text-start text-center">
          <div>
            <p className="text-2xl font-bold text-red-500/80">BOOK LAND</p>
            <p>1203 Town Center Dr</p>
            <p>Arlington, VA 22201</p>
            <p>+0000 123 456 789</p>
            <p>info@example.com</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Help</p>
            <p>Seach</p>
            <p>Help</p>
            <p>Information</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Support</p>
            <p>Seach Terms</p>
            <p>Advanced Search</p>
            <p>Helps & Faqs</p>
            <p>Store Location</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Information</p>
            <p>Contact</p>
            <p>About</p>
            <p>Careers</p>
            <p>Refund & Returns</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          {/* Social Icons */}
          <FaXTwitter className="text-2xl hover:text-red-500 transition-all duration-300" />
          <FaInstagram className="text-2xl hover:text-red-500 transition-all duration-300" />
          <FaPinterestP className="text-2xl hover:text-red-500 transition-all duration-300" />
          <CiFacebook className="text-2xl hover:text-red-500 transition-all duration-300" />
        </div>

        <div className="text-center flex flex-col gap-3">
          <hr />
          <span className="p-5">All Right Reserved © 2025 Book Bliss</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

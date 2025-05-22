import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Popconfirm, PopconfirmProps, message } from "antd";
import { RiMenu3Line, RiCloseLine, RiShoppingCartLine } from "react-icons/ri";
import { useAppSelector } from "../../Redux/hook";
import { getUser } from "../../Redux/Features/Auth/authSlice";
import { ICart, getCart } from "../../Redux/Features/Orders/cartSlice";
import CustomBtn from "../CustomForm/CustomBtn";
import UserDropdown from "../UserDropdown/UserDropdown";
import bookImage from "/assets/download.png";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useAppSelector(getUser);
  const { items } = useAppSelector(getCart);
  const [menuOpen, setMenuOpen] = useState(false);

  const cancel: PopconfirmProps["onCancel"] = () => {
    message.error("You cancelled the checkout");
  };

  const totalPrice = items.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[90%] mx-auto h-20 flex justify-between items-center">

        {/* Left - Logo */}
        <div
          className="flex items-center cursor-pointer gap-3"
          onClick={() => navigate("/")}
        >
          <img src={bookImage} alt="Logo" className="w-20 h-20 object-contain" />
        </div>

        {/* Center - Desktop Nav */}
        <ul className="hidden md:flex justify-center gap-10">
          {[
            { to: "/", label: "Home" },
            { to: "/all-books", label: "All Books" },
            { to: "/about", label: "About" },
            { to: "/authors", label: "Authors" },
          ].map(({ to, label }) => (
            <li key={to} className="group">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative font-semibold text-[#0A043C] px-3 py-2 rounded-lg transition-all duration-300
                  ${isActive
                    ? "bg-pink-500/30 text-white shadow-md"
                    : "hover:bg-pink-500/20 hover:text-pink-500"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right - User & Cart */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Popconfirm
            title="Your Cart"
            placement="leftBottom"
            description={
              <div className="w-[280px] max-h-[300px] overflow-y-auto p-2">
                {items.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">Your cart is empty.</p>
                ) : (
                  items.map((item, idx) => (
                    <CartModal key={idx} product={item} />
                  ))
                )}
                <div className="w-full mt-4 flex justify-end font-semibold text-lg">
                  Total: ${totalPrice.toFixed(2)}
                </div>
              </div>
            }
            onCancel={cancel}
            onConfirm={() => navigate("/checkout")}
            okText="Checkout"
            cancelText="No"
          >
            <button className="relative p-2 rounded hover:bg-pink-100" aria-label="Cart">
              <RiShoppingCartLine className="text-3xl text-pink-600" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-pink-600 text-white text-xs font-bold shadow-lg animate-pulse">
                  {items.length}
                </span>
              )}
            </button>
          </Popconfirm>

          {/* User or Login */}
          {user ? (
            <UserDropdown />
          ) : (
            <CustomBtn
              ButtonText="Log In"
              onClick={() => navigate("/login")}
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md shadow"
            />
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-pink-600"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FACC15] py-4">
          <ul className="flex flex-col items-center gap-4">
            {[
              { to: "/", label: "Home" },
              { to: "/all-books", label: "All Books" },
              { to: "/about", label: "About" },
              { to: "/authors", label: "Authors" },
            ].map(({ to, label }) => (
              <li key={to} onClick={() => setMenuOpen(false)}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `font-semibold text-lg px-4 py-2 rounded transition-all duration-200
                    ${isActive
                      ? "bg-pink-500 text-white"
                      : "text-[#0A043C] hover:text-pink-600 hover:bg-pink-100"}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// CartModal component remains unchanged
export const CartModal = ({ product }: { product: ICart }) => {
  return (
    <div className="flex items-center gap-3 p-2 rounded-md hover:bg-pink-50 transition">
      <img
        src={"/assets/img1.png"}
        alt={product.title}
        className="w-12 h-12 object-cover rounded-md shadow-md"
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-sm font-semibold text-gray-900">{product.title}</h3>
        <p className="text-xs text-gray-600">
          Quantity: <span className="font-medium">{product.quantity}</span>
        </p>
        <p className="text-xs text-green-600 font-semibold">
          Price: ${product.totalPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

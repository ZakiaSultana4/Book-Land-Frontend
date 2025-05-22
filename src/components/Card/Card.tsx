import img1 from "/assets/img1.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IBook } from "../../Types/global";
import { motion } from "framer-motion";

const Card = ({ book }: { book: IBook }) => {
  const { author, title, price, _id , image} = book;


  return (
    <div className="w-[300px]  bg-white rounded-xl overflow-hidden shadow-md mx-auto transition-all duration-300">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative"
      >
        {/* Image */}
        <div className="relative">
          <motion.img
            src={image?image : img1}
            alt={title}
            className="w-full h-64 object-cover rounded-t-xl"
            whileHover={{ scale: 1.05, opacity: 0.85 }}
            transition={{ duration: 0.4 }}
          />
          {/* Overlay icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-center items-end gap-4 p-4 rounded-t-xl"
          >
            <button
              aria-label="Add to Cart"
              className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition"
            >
              <FaShoppingCart size={22} />
            </button>
            <button
              aria-label="Add to Favorites"
              className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition"
            >
              <GiSelfLove size={22} />
            </button>
            <Link to={`/books/${_id}`} title="View Details">
              <button className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition">
                <FaRegEye size={22} />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Info */}
      <div className="p-5 text-center">
        <h3 className="text-sm text-gray-500 uppercase tracking-wide">{author}</h3>
        <h2 className="text-xl font-semibold text-gray-900 mt-1">{title}</h2>
        <p className="mt-3 text-lg font-bold text-pink-600">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;

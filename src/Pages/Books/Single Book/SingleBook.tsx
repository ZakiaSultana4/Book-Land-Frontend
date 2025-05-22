import { LegacyRef, SetStateAction, useEffect, useRef, useState } from "react";
import img1 from "/assets/img1.png";
import img2 from "/assets/img2.png";
import img3 from "/assets/img3.png";
import img4 from "/assets/img4.png";
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../../Redux/Features/Admin/UserManagementApi/bookManagement.api";
import { addToCart, getCart } from "../../../Redux/Features/Orders/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../Redux/hook";
import { FieldValues, SubmitHandler } from "react-hook-form";
import BookDetailsSkeleton from "../../../components/BookDetailsSkeleton/BookDetailsSkeleton";

const SingleBook = () => {
  const [mainImage, setMainImage] = useState(img1);
  const thumbnails = [img1, img2, img3, img4];
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const cart = useAppSelector(getCart);
  const quantityRef = useRef<HTMLInputElement>(null);
  console.log(cart);
  const { data: Book, isFetching, isLoading } = useGetSingleBookQuery(id);
  const [bookData, setBookData] = useState(Book?.data);

  useEffect(() => {
    if (Book) {
      setBookData(Book?.data);
    }
  }, [Book]);
  const { title, price, description, quantity, author, category } =
    bookData || {};
  // console.log(Book);
  const handleAddToCart: SubmitHandler<FieldValues> = () => {
    // console.log(quantityRef.current.value);
    const quantity = Number(quantityRef.current?.value) || 1;
    const productId = id as string;
    const cartData = {
      quantity: quantity as number,
      productId: productId,
      totalPrice: quantity * price,
      title,
    };
    // console.log(cartData);
    dispatch(addToCart(cartData));
  };
  const changeImage = (src: SetStateAction<string>) => {
    setMainImage(src);
  };

  if (isLoading || isFetching)
    return (
      <>
        <BookDetailsSkeleton />
      </>
    );
  return (
    <section className="w-[80%] mx-auto">
      <div>
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-wrap -mx-4 gap-10">
            {/* Product Images */}
            <div className="w-full md:w-[45%] px-4 mb-8">
              <img
                src={mainImage}
                alt="Product"
                className="w-full rounded-lg h-[600px] object-fill shadow-md mb-4"
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {thumbnails.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => changeImage(src)}
                    className="w-16 sm:w-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{title}</h2>
              <p className="text-gray-600 mb-4">SKU: WH1000XM4</p>
              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">Tk {price}</span>
                <span className="text-gray-500 line-through">
                  Tk {Number(price) + 5}
                </span>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
              </div>
              <p className="text-gray-700 mb-6">{description}</p>

              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  name="quantity"
                  ref={
                    quantityRef as unknown as
                      | LegacyRef<HTMLInputElement>
                      | undefined
                  }
                  min="1"
                  defaultValue={1}
                  className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <span className="font-bold ">
                Only <span className="text-red-500">{quantity}</span> left
              </span>

              <div className="flex space-x-4 mb-6 mt-3">
                <button
                  className={`bg-[#E12503] flex gap-2 items-center text-white px-10 py-2 ${
                    quantity <= 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleAddToCart}
                  disabled={quantity <= 0}
                >
                  Add to Cart
                </button>
                <button className="bg-black flex gap-2 items-center text-white px-10 py-2 hover:bg-[#E12503] ">
                  Wishlist
                </button>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li className="flex items-center gap-1">
                    <span className="font-bold text-black">Author:</span>
                    <span>{author}</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="font-bold text-black">Category:</span>
                    <span>{category}</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <span className="font-bold text-black">Language:</span>
                    <span>English</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBook;

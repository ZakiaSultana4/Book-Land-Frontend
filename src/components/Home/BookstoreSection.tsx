import bookImage from '/assets/download.jpg';

const BookstoreSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-12 bg-gray-50 gap-10">
      {/* Section Title */}
     

      {/* Left Side - Image */}
      <div className="relative w-full lg:w-1/2 flex justify-center pt-16 lg:pt-0">
        <img
          src={bookImage}
          alt="Woman reading book"
          className="rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-[600px]"
        />
        {/* Play Button */}
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="sm:w-7 sm:h-7"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2 px-2 sm:px-4">
        <p className="text-sm font-semibold text-pink-500 mb-2 uppercase tracking-wide">
          Business for Good
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-700 mb-4 leading-snug">
          Book Land is Bangladeshi Online <br className="hidden sm:block" />
          Independent Bookstore
        </h2>
        <p className="text-base sm:text-lg text-pink-600 font-medium mb-4">
          Get behind the scenes with us and explore the re-use revolution.
        </p>
        <hr className="w-16 border-pink-500 mb-4" />
        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
          In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          Vestibulum eu odio. Interdum lacus sit amet orci. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; In ac dui quis mi consectetuer lacinia.
        </p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition text-sm sm:text-base">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default BookstoreSection;

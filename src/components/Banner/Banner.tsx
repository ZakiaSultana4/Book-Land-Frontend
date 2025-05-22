import bookImage from '/assets/girl.png';

const Banner = () => {
  return (
    <div className="bg-[#0A043C] text-white py-12 flex justify-center overflow-hidden h-[90vh] relative">
      <div className="w-[80%] h-full flex flex-col-reverse md:flex-row items-center justify-between relative z-20">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4 mt-10 md:mt-0 text-center md:text-left">
          <p className="tracking-widest text-sm text-purple-300 uppercase">Best Management</p>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Think and Grow Rich
          </h1>
          
          <p className="text-base sm:text-lg text-purple-200">
            Napoleon Hill &nbsp;&nbsp;|&nbsp;&nbsp; Business & Strategy
          </p>
          
          <blockquote className="border-l-4 border-yellow-400 pl-4 text-gray-300 italic text-sm sm:text-base">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
          </blockquote>

          {/* Price */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
            <p className="text-2xl font-bold text-yellow-400">$10.4</p>
            <p className="line-through text-gray-400">$15.25</p>
            <span className="bg-pink-600 text-white text-sm font-semibold px-2 py-1 rounded">33% OFF</span>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300 transition">
              Buy Now
            </button>
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
              See Details
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <img
            src={bookImage}
            alt="Think and Grow Rich"
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[500px] rounded-lg z-30 relative"
          />

          {/* Decorative background blobs behind the image */}
          <div className="absolute top-10 right-0 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-purple-800 rounded-full blur-3xl opacity-30 -z-10" />
          <div className="absolute top-20 right-10 w-[200px] h-[200px] bg-pink-600 rounded-full blur-2xl opacity-20 -z-20" />
          <div className="absolute top-5 right-20 w-[150px] h-[150px] bg-yellow-400 rounded-full blur-xl opacity-15 -z-30" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

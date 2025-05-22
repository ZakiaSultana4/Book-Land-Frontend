import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeavyLiftSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const books = [
    {
      id: 1,
      title: "A Heavy Lift",
      author: "Napoleon Hill",
      category: "Business & Strategy",
      price: 7.5,
      originalPrice: 11.0,
      discount: "20% OFF",
      description:
        "A compelling exploration of business resilience and strategic innovation, 'A Heavy Lift' empowers you to face challenges and create long-term value.",
      coverGradient: "from-gray-800 via-gray-700 to-gray-900",
      isBestseller: true,
    },
    {
      id: 2,
      title: "Digital Success",
      author: "Sarah Johnson",
      category: "Marketing & Sales",
      price: 12.99,
      originalPrice: 16.99,
      discount: "25% OFF",
      description:
        "Master the art of digital marketing with actionable insights and proven strategies to grow your brand in today's competitive online marketplace.",
      coverGradient: "from-blue-800 via-blue-700 to-blue-900",
      isBestseller: false,
    },
    {
      id: 3,
      title: "Leadership Mastery",
      author: "Michael Chen",
      category: "Leadership & Management",
      price: 9.99,
      originalPrice: 14.99,
      discount: "35% OFF",
      description:
        "Unlock powerful leadership techniques from top global executives and transform your team performance with clarity, confidence, and purpose.",
      coverGradient: "from-green-800 via-green-700 to-green-900",
      isBestseller: true,
    },
    {
      id: 4,
      title: "Innovation Mindset",
      author: "Dr. Lisa Wang",
      category: "Creativity & Innovation",
      price: 8.75,
      originalPrice: 12.5,
      discount: "30% OFF",
      description:
        "Fuel your creativity and problem-solving skills by adopting an innovation-first mindset for personal growth and business transformation.",
      coverGradient: "from-purple-800 via-purple-700 to-purple-900",
      isBestseller: false,
    },
  ];

  const currentBook = books[currentIndex];

  const nextBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const prevBook = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-12 xl:px-24">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-2">
        Explore Our Featured Books
      </h1>
 <div className="w-16 h-1 bg-pink-400 mx-auto mb-4"></div>
      {/* Header Text */}
      <div className="text-center my-4">
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
          Handpicked titles to inspire innovation, leadership, and business growth. Discover practical insights and timeless strategies from top thought leaders.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Book Cover */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className={`md:w-[550px] w-[300px] h-96 bg-gradient-to-br ${currentBook.coverGradient} rounded-lg shadow-2xl overflow-hidden`}>
                {/* Escalator Lines */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"
                      style={{ top: `${20 + i * 6}%` }}
                    ></div>
                  ))}
                </div>

                {/* Book Title on Cover */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  <h1 className="text-3xl font-bold text-center mb-4 leading-tight">
                    {currentBook.title.toUpperCase()}
                  </h1>
                  <p className="text-sm text-gray-300 text-center max-w-xs">
                    Your essential guide to mastering modern business practices and personal growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            {currentBook.isBestseller && (
              <div className="text-center lg:text-left">
                <span className="inline-block text-pink-600 font-semibold text-xs tracking-widest uppercase mb-4">
                  Bestseller
                </span>
              </div>
            )}

            <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 text-center lg:text-left">
              {currentBook.title}
            </h2>

            <div className="flex flex-col sm:flex-row gap-2 text-center lg:text-left text-pink-500 font-medium">
              <span>{currentBook.author}</span>
              <span className="hidden sm:inline">|</span>
              <span>{currentBook.category}</span>
            </div>

            <div className="border-l-4 border-pink-200 pl-6 py-2">
              <p className="text-gray-600 leading-relaxed">
                {currentBook.description}
              </p>
            </div>

            {/* Price Section */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-3xl font-bold text-pink-600">${currentBook.price}</span>
              <span className="text-xl text-pink-300 line-through">${currentBook.originalPrice}</span>
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                {currentBook.discount}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg font-medium">
                Buy Now
              </button>
              <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-100 px-6 py-2 rounded-lg font-medium">
                See Details
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Dots & Arrows */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={prevBook}
            className="w-10 h-10 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center shadow"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {books.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-pink-500 scale-125' : 'bg-pink-200 hover:bg-pink-300'
                }`}
              ></button>
            ))}
          </div>

          <button
            onClick={nextBook}
            className="w-10 h-10 bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center justify-center shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

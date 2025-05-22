import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import bookImage1 from "/assets/testimonial1.jpg";
import bookImage2 from "/assets/testimonial2.jpg";
import bookImage3 from "/assets/testimonial3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Miranda Lee",
    role: "Book Lovers",
    text: "Very impressive store. Your book made studying for the ABC certification exams a breeze. Thank you very much",
    rating: 5,
    avatar: bookImage1,
  },
  {
    id: 2,
    name: "Jason Huang",
    role: "Book Lovers",
    text: "Very impressive store. Your book made studying for the ABC certification exams a breeze. Thank you very much",
    rating: 5,
    avatar: bookImage2,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Book Lovers",
    text: "Outstanding quality and excellent customer service. The books arrived quickly and were exactly as described.",
    rating: 5,
    avatar: bookImage3,
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Book Lovers",
    text: "Amazing collection of books at great prices. The website is easy to navigate and the checkout process is seamless.",
    rating: 5,
    avatar: bookImage1,
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Book Lovers",
    text: "I've been a customer for years and they never disappoint. Quality books, fast shipping, and excellent support.",
    rating: 5,
    avatar: bookImage2,
  },
  {
    id: 6,
    name: "David Wilson",
    role: "Book Lovers",
    text: "The best online bookstore I've ever used. Great selection, competitive prices, and excellent condition.",
    rating: 5,
    avatar: bookImage3,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}
      />
    ));
  };

  const Card = ({
    testimonial,
    position,
  }: {
    testimonial: typeof testimonials[0];
    position: "left" | "center" | "right";
  }) => {
    const baseClass =
      "absolute w-[90%] md:w-[30%] p-6 shadow-xl rounded-xl transition-all duration-700 ease-in-out";
    const bgColor = position === "center" ? "bg-pink-100" : "bg-white";
    const positionClass =
      position === "left"
        ? "translate-x-[-120%] scale-90 opacity-50 z-0"
        : position === "right"
        ? "translate-x-[120%] scale-90 opacity-50 z-0"
        : "translate-x-0 scale-100 opacity-100 z-10";

    return (
      <div className={`${baseClass} ${bgColor} ${positionClass}`}>
        <div className="flex gap-1 mb-2">{renderStars(testimonial.rating)}</div>
        <blockquote className="italic text-gray-700 mb-4">"{testimonial.text}"</blockquote>
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">Testimonials</h2>
            <p className="text-gray-600 mt-2 max-w-lg">
              Hear from our happy readers. See what our customers say about our service and quality!
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-pink-400 hover:bg-orange-500 text-white flex items-center justify-center shadow-md transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-pink-400 hover:bg-orange-500 text-white flex items-center justify-center shadow-md transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="relative h-[350px] flex items-center justify-center">
          <Card testimonial={testimonials[prevIndex]} position="left" />
          <Card testimonial={testimonials[currentIndex]} position="center" />
          <Card testimonial={testimonials[nextIndex]} position="right" />
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-pink-500 scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

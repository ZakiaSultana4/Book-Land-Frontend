import { useState, useEffect } from 'react';

export default function SpecialOffersSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Limited Time Literary Treasures
        </h2>
              <div className="w-20 h-1 bg-pink-400 mx-auto mt-4 mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section with Styled Background */}
          <div className="relative w-full h-96 md:h-[500px] bg-gray-100 rounded-lg shadow-2xl overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute inset-0">
              <div className="absolute top-4 left-4 w-16 h-16 bg-purple-300 transform rotate-45 opacity-70" />
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-purple-400 transform rotate-12 opacity-60" />
              <div className="absolute bottom-16 right-16 w-8 h-8 bg-purple-500 transform -rotate-12 opacity-80" />
              <div className="absolute top-20 left-8 w-24 h-2 bg-black transform -rotate-45" />
              <div className="absolute top-24 left-6 w-3 h-16 bg-black transform rotate-12" />
              <div className="absolute top-32 right-12 w-6 h-6 bg-orange-400 rounded-sm transform rotate-45" />
              <div className="absolute top-40 right-16 w-4 h-8 bg-red-400 transform -rotate-12" />
              <div className="absolute bottom-32 left-12 w-8 h-8 bg-teal-300 transform rotate-12" />
              <div className="absolute bottom-28 left-16 w-12 h-2 bg-teal-400" />
              <div className="absolute bottom-20 left-20 w-6 h-12 bg-blue-400 transform rotate-45" />
              <div className="absolute top-16 right-4 w-8 h-8 opacity-60">
                <div className="grid grid-cols-4 gap-px h-full">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="bg-teal-300"></div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-40 right-6 w-6 h-6 opacity-50">
                <div className="grid grid-cols-3 gap-px h-full">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-green-400"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text Info Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center p-6 bg-gradient-to-t from-white via-white/80 to-transparent z-20 text-center">
              <div className="mb-3">
                <h1 className="text-xl font-bold text-black">Oh, Sol</h1>
                <h2 className="text-lg font-semibold text-black">LeWitt</h2>
              </div>
              <div className="text-xs text-gray-600">
                <p>Inspired by</p>
                <p className="font-semibold">Wall Drawing no 373</p>
                <p className="font-semibold">Lines in Four Directions</p>
                <p className="text-[10px] mt-1 opacity-70">GENERATIONSBLUE FOR IPAD</p>
              </div>
              {/* Extra Text Added Here */}
              <div className="mt-6 text-sm text-gray-700 max-w-xs mx-auto">
                <p>
                  Discover the fusion of art and literature in every page. This exclusive collection celebrates creativity, inspired by iconic abstract designs.
                </p>
                <p className="mt-2">
                  Hurry, the offer lasts only for a week — dive into your next great read today!
                </p>
              </div>
            </div>
          </div>

          {/* Right - Offer Content */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-500 text-sm mb-1">Special Offers</p>
              <h3 className="text-3xl font-bold text-gray-900">
                Books 50% Off – Grab Yours Before the Clock Runs Out!
              </h3>
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              You’ll learn to animate shapes like circles, lines, and polygons, and master CSS transitions including color and size changes. Start your journey into creativity and code!
            </p>

            {/* Countdown */}
            <div className="grid grid-cols-4 gap-4 text-center">
              {['Days', 'Hours', 'Mins', 'Secs'].map((label, idx) => {
                const value = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds][idx];
                return (
                  <div key={label}>
                    <div className="text-3xl md:text-4xl font-bold text-gray-800">
                      {formatTime(value)}
                    </div>
                    <div className="text-sm text-gray-500">{label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-medium shadow hover:bg-red-700 transition duration-300">
                Explore More Deals
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

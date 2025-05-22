import bookImage from '/assets/banner1-2.jpg';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaPinterest, FaXTwitter } from 'react-icons/fa6';

export default function BestAuthorSection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">Best Author of The Week</h2>
          <div className="w-20 h-1 bg-pink-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left: Awards */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700">Awards of the Author:</h3>
            <div className="grid grid-cols-3 gap-6">
              {awardTexts.map((texts, index) => (
                <AwardBadge key={index}>
                  {texts.map((text, idx) => (
                    <div key={idx} className="text-white text-xs font-semibold">
                      {text}
                    </div>
                  ))}
                </AwardBadge>
              ))}
            </div>
            <button className="mt-8 bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-md font-medium transition duration-200">
              View Book
            </button>
          </div>

          {/* Center: Author Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-96 rounded-lg shadow-2xl overflow-hidden">
              <img src={bookImage} alt="Marissa Meyer - Best Author" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-4 border-white rounded-lg pointer-events-none"></div>
            </div>
          </div>

          {/* Right: Quote and Socials */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <blockquote className="text-gray-600 italic leading-relaxed">
                "My books are marked down because most of them are marked on the edge by the publisher. Lorem ipsum dolor sit amet, consectetur adipiscing elit non porttitor est."
              </blockquote>
            </div>

            <h3 className="text-2xl font-bold text-gray-800">Marissa Meyer</h3>

            <div className="flex space-x-4">
              <SocialIcon href="#" className="hover:bg-blue-500"><CiFacebook size={18} /></SocialIcon>
              <SocialIcon href="#" className="hover:bg-black"><FaPinterest size={18} /></SocialIcon>
              <SocialIcon href="#" className="hover:bg-pink-500"><FaInstagram size={18} /></SocialIcon>
              <SocialIcon href="#" className="hover:bg-blue-600"><FaXTwitter size={18} /></SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper component for social icons
function SocialIcon({ href, className, children }: React.PropsWithChildren<{ href: string; className: string }>) {
  return (
    <a href={href} className={`w-10 h-10 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center transition-colors duration-200 ${className}`}>
      {children}
    </a>
  );
}

// Reusable badge component
function AwardBadge({ children }: React.PropsWithChildren<object>) {
  return (
    <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg text-center">
      {children}
      <StarIcon position="-top-2 -left-2" />
      <StarIcon position="-top-2 -right-2" />
    </div>
  );
}

function StarIcon({ position }: { position: string }) {
  return (
    <div className={`absolute ${position} w-6 h-6`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
        <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.4 7.4-6-4.6-6 4.6 2.4-7.4-6-4.6h7.6z" />
      </svg>
    </div>
  );
}

// Awards content
const awardTexts = [
  ['#1', 'BEST', 'SELLER'],
  ['2019', 'Best Author', 'AWARDS'],
  ['BEST', 'OF THE', 'WEEK'],
  ['TOP', 'AUTHOR', '2023'],
  ['EXCELLENCE', 'IN', 'WRITING'],
  ["READERS'", 'CHOICE', 'AWARD'],
];

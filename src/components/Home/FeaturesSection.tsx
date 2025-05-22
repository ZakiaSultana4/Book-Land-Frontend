import { Truck, Calendar, CreditCard, Phone, ShieldCheck, Package } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-gray-600" />,
      title: "Free shipping item",
      description: "For all orders over $500",
    },
    {
      icon: <Calendar className="w-8 h-8 text-gray-600" />,
      title: "Money back guarantee",
      description: "100% money back guarantee",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-gray-600" />,
      title: "Cash on delivery",
      description: "Lorem ipsum dolor consecte",
    },
    {
      icon: <Phone className="w-8 h-8 text-gray-600" />,
      title: "Help & Support",
      description: "Call us : 123.456.789",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-gray-600" />,
      title: "Secure Payment",
      description: "Your info is safe with us",
    },
    {
      icon: <Package className="w-8 h-8 text-gray-600" />,
      title: "Fast Delivery",
      description: "Within 2-3 business days",
    },
  ];

  return (
    <div className="bg-white py-8 overflow-hidden">
      <div className="marquee px-4">
        {[...features, ...features].map((feature, index) => (
          <div
            key={index}
            className="inline-flex items-start gap-4 p-4 bg-white rounded-lg shadow hover:bg-gray-50 min-w-[300px]"
          >
            <div className="flex-shrink-0 mt-1">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-700 mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

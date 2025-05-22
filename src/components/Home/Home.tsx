import Banner from "../Banner/Banner";
import NewArrival from "../New Arrival/NewArrival";
import BestAuthorSection from "./BestAuthorSection";
import BookstoreSection from "./BookstoreSection";
import FeaturesSection from "./FeaturesSection";
import HeavyLiftSection from "./HeavyLiftSection";
import SpecialOffersSection from "./SpecialOffersSection";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <NewArrival />
      <FeaturesSection/>
      <BookstoreSection />
      <SpecialOffersSection/>
      <BestAuthorSection/>
      <HeavyLiftSection/>
 <TestimonialsSection/>
    </div>
  );
};

export default Home;

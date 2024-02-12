

import ChatBot from "@/components/chat/chat";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Banner from "@/components/ui/Banner";
import BestCourier from "@/components/ui/BestCourier";
import CallUs from "@/components/ui/CallUs";
import ContactForm from "@/components/ui/ContactForm";
import OurServices from "@/components/ui/OurServices";
import Parcel from "@/components/ui/Parcel";
import ProductDelivery from "@/components/ui/ProductDelivery";
import Stat from "@/components/ui/Stat";
import WorldMap from "@/components/ui/WorldMap";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Parcel />
      <ChatBot />
      <OurServices />
      <ProductDelivery />
      <BestCourier />
      <CallUs></CallUs>
      {/* <FeaturesSection></FeaturesSection> */}
      <Stat></Stat>
      <WorldMap />
      <ContactForm />
      <Footer></Footer>
    </>
  );
};

export default HomePage;

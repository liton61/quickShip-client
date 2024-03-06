
import ChatBot from "../components/chat/chat";
import Banner from "../components/ui/Banner";
import Parcel from "../components/ui/Parcel";
import OurServices from "../components/ui/OurServices";
import ProductDelivery from "../components/ui/ProductDelivery";
import BestCourier from "../components/ui/BestCourier";
import CallUs from "../components/ui/CallUs";
import Stat from "../components/ui/Stat";
import WorldMap from "../components/ui/WorldMap";
// import ContactForm from "../components/ui/ContactForm";
import Footer from "../components/shared/Footer";
import { Providers } from "./providers/NextUIProviders";
import Area from "./coverageArea/Area/Area";
import FaqSection from "../components/ui/FaqSection";
// import Testimonials from "../components/ui/Testimonials";
import Navbar from "@/components/shared/Navbar/Navbar";
import ScrollUp from "@/components/shared/Scroll/ScrollUp";
import NewService from "@/components/ui/NewService/NewService";

import OurTeams from "@/components/ui/OurTeams/OurTeams";
import ContactUs from "@/components/ui/ContactUs";
import Testimonial from "./(mainLayout)/about/Testimonial";
import Posts from "@/components/ui/Posts/Posts";
import ContactForm from "@/components/ui/ContactForm";
import Info from "@/components/ui/Info";
import Testimonials from "@/components/ui/Testimonials";


const MainHome = () => {

  return (
    <Providers>
      <Navbar />
      <Banner />
      <Parcel />
      <OurServices/>
      {/* <NewService /> */}
      <CallUs />
      <ChatBot />
      {/* <BestCourier /> */}
      {/* <ProductDelivery /> */}
      <Info />
      <FaqSection />
      <Area />
      <Stat />
      <Posts />
      {/* <WorldMap /> */}
      <ScrollUp />
      <OurTeams></OurTeams>
      <Testimonials />
      <ContactForm />
      {/* <ContactUs /> */}
      <ScrollUp />
      <Footer />
    </Providers>
  );
};

export default MainHome;

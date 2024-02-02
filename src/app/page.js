"use client";

import Banner from "@/components/ui/Banner";
import BestCourier from "@/components/ui/BestCourier";
import CallUs from "@/components/ui/CallUs";
import ContactForm from "@/components/ui/ContactForm";
import FeaturesSection from "@/components/ui/FeaturesSection";
// import OurServices from "@/components/ui/OurServices";
import Parcel from "@/components/ui/Parcel";
import ProductDelivery from "@/components/ui/ProductDelivery";
import Stat from "@/components/ui/Stat";
import WorldMap from "@/components/ui/WorldMap";
import { Chat } from "@mui/icons-material";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <Parcel />
      <FeaturesSection />
      {/* <OurServices /> */}
      <ProductDelivery />
      <BestCourier />
      <CallUs />
      <Stat />
      <WorldMap />
      <Chat/>
      <ContactForm />
    </>
  );
};

export default page;

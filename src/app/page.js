"use client"


import Banner from "@/components/ui/Banner";
import BestCourier from "@/components/ui/BestCourier";
import CallUs from "@/components/ui/CallUs";
import DeliveryCalculator from "@/components/ui/DeliveryCalculator/DeliveryCalculator";
import FeaturesSection from "@/components/ui/FeaturesSection";
import OurServices from "@/components/ui/OurServices";
import Parcel from "@/components/ui/Parcel";
import ProductDelivery from "@/components/ui/ProductDelivery";
import Stat from "@/components/ui/Stat";
import WorldMap from "@/components/ui/WorldMap";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <Parcel />
      <OurServices />
      <ProductDelivery />
      <BestCourier></BestCourier>
      <DeliveryCalculator></DeliveryCalculator>
      <CallUs></CallUs>
      <FeaturesSection></FeaturesSection>
      <Stat></Stat>
      <WorldMap />
    </>
  );
};

export default page;

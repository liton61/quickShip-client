import { getPrice } from "@/components/utils/getAllPricing";
import React from "react";

const PricingId = async ({ params }) => {
  const { pricingId } = params;
  const price = await getPrice(pricingId);
  console.log(price);
  console.log(params);
  return (
    <div>
      <h3>pricing id{pricingId}</h3>
      <h4>thsi is {price.price_name}</h4>
    </div>
  );
};

export default PricingId;

import Area from "@/app/coverageArea/Area/Area";
import Calculator from "./Calculator";
import DeliveryCharge from "./DeliveryCharge";


const DeliveryCalculator = () => {
  return (
    <div className="py-24 xl:py-44">
      <div className="text-center">
        <h2 className="text-3xl font-bold py-5">Delivery Calculator</h2>
        <p className="text-md text-gray-400">
          Know your delivery charges in advance to facilitate your shipment
        </p>
      </div>
      <div>
        <Calculator></Calculator>
        <DeliveryCharge></DeliveryCharge>
        <div className="mt-7">
        </div>
      </div>
    </div>
  );
};

export default DeliveryCalculator;

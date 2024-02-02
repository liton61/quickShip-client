import Calculator from "./Calculator";

const DeliveryCalculator = () => {
    return (
        <div className = "bg-[#0E0D21] text-white p-5 py-44" >
            <div className="text-center">
                <h2 className="text-3xl font-bold py-5">Delivery Calculator</h2>
                <p className="text-md text-gray-400">Know your delivery charges in advance to facilitate your shipment</p>
            </div>
            <div>
                <Calculator></Calculator>
            </div>
        </div>
    );
};

export default DeliveryCalculator;
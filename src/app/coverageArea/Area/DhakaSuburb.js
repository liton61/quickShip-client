const DhakaSuburb = ({ suburbDhaka }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className="text-white">
                    <tr className="bg-[#0D0D21] " >
                        <th>No</th>
                        <th>District</th>
                        <th>Area</th>
                        <th>Post Code</th>
                        <th>Home Delivery</th>
                        <th>LockDown</th>
                        <th>Charge(1kg)</th>
                        <th>Charge(2kg)</th>
                        <th>Charge(3kg)</th>
                        <th>COD Charge</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {suburbDhaka?.map((item, index) => (
                        <tr key={item?._id} className="border-b-gray-800 hover:bg-[#0D0D21]" >
                            <th>{index + 1}</th>
                            <td>{item?.district}</td>
                            <td>{item?.area}</td>
                            <td>{item?.postCode}</td>
                            <td>{item?.homeDelivery}</td>
                            <td>{item?.lockDown}</td>
                            <td>{item?.charge1kg}</td>
                            <td>{item?.charge2kg}</td>
                            <td>{item?.charge3kg}</td>
                            <td>{item?.codCharge}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DhakaSuburb;
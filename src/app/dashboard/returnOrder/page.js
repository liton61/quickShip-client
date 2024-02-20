"use client"

import useReturn from "../../../components/hooks/useReturn";
import SectionTitle from "../../../components/shared/SectionTitle";

const ReturnOrder = () => {
  const [returnProduct] = useReturn()
  // console.log(returnProduct);
  return (
    <div>
      <div className="py-8 px-5 ">
        <SectionTitle
          header={"Return Products"}
          miniHeader={"All Return history here"}
        ></SectionTitle>
        <div>
          <div className="overflow-x-auto ">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="text-black bg-gray-300 z-20 text-md">
                  <th>No</th>
                  <th>User name</th>
                  <th>User email</th>
                  <th>Price</th>
                  <th>Reason</th>
                  <th>Comments</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody className="text-sm">
                {returnProduct?.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item?.name}</td>
                    <td>{item?.email}</td>
                    <td>${item?.productPrice}</td>
                    <td>{item?.productReason}</td>
                    <td>{item?.productComment}</td>
                    <td>Pending</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnOrder;
"use client"
import { FaSackDollar } from "react-icons/fa6";
import useOrder from "@/components/hooks/useOrder";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";

const MyOrder = () => {
    const [order] = useOrder()
    // console.log(payment);
  return (
    <div>
      <div className="py-8 px-5 ">
        <SectionTitle
          header={"Order history"}
          miniHeader={"All My Order history here"}
        ></SectionTitle>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="text-black bg-gray-300">
                  <th>No</th>
                  <th>User name</th>
                  <th>Phone Number</th>
                  <th>Product Price</th>
                  <th>Delivery Date</th>
                  <th>Delivery Area</th>
                  <th>Payment here</th>
                </tr>
              </thead>
              <tbody>
                {order?.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item?.name}</td>
                    <td>{item?.phone}</td>
                    <td>{item?.productPrice}</td>
                    <td>{item?.deliveryDate}</td>
                    <td>{item?.area}</td>
                    <td>
                        <Link href = {
                            `/dashboard/myOrder/${item?._id}`
                        }
                          className = "btn rounded-full bg-[#1c1c4b] hover:bg-purple-900 text-white btn-sm"
                        >
                          <span className="text-xs"><FaSackDollar></FaSackDollar></span>
                        </Link>
                    </td>
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

export default MyOrder;
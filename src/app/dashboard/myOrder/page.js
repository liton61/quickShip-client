"use client";
import { FaSackDollar } from "react-icons/fa6";
import useOrder from "../../../components/hooks/useOrder";
import SectionTitle from "../../../components/shared/SectionTitle";
import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import usePublicAxios from "../../../components/hooks/usePublicAxios";
import { TbTruckReturn } from "react-icons/tb";

const MyOrder = () => {
  const [order, refetch] = useOrder();
  const publicAxios = usePublicAxios()

  const handleDelete = async (id) => {
    const res = await publicAxios.delete(`/order/${id}`)
    if (res.data.deletedCount > 0) {
      toast.success("Product Delete Successfully")
      refetch()
    }
  };

  return (
    <div className="bg-[#010313] text-white h-screen" >
      <div className="py-8 px-5 ">
        <SectionTitle
          header={"Order history"}
          miniHeader={"All My Order history here"}
        ></SectionTitle>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-white" >
                <tr className="bg-[#0D0D21]" >
                  <th>No</th>
                  <th>User name</th>
                  <th> Price</th>
                  <th>Delivery Date</th>
                  <th>Weight</th>
                  <th>Payment</th>
                  <th>Update</th>
                  <th>Return</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {
                order ?.length === 0 ? <div class="flex w-full justify-center items-center h-screen">
                <h2 class="text-2xl font-bold">No Order Here</h2>
              </div>
              : <tbody>
                {order?.map((item, index) => (
                  <tr className="border-b-gray-800 hover:bg-[#0D0D21]"
                    key={
                      item._id
                    } >
                    <th>{index + 1}</th>
                    <td>{item?.name}</td>
                    <td className="text-center">${item?.productPrice}</td>
                    <td>{item?.deliveryDate}</td>
                    <td className="text-center">{item?.productWeight}</td>
                    <td className="text-center">
                      <Link
                        href={`/dashboard/myOrder/${item?._id}`}
                        className="btn border-none rounded-full bg-[#1c1c4b] hover:bg-purple-900 text-white btn-sm"
                      >
                        <span className="text-xs">
                          <FaSackDollar></FaSackDollar>
                        </span>
                      </Link>
                    </td>

                    <td className="text-center">
                      <Link href = {
                                `/dashboard/myOrder/update/${item?._id}`
                              } >
                                <button  className = "text-green-600 btn border-none rounded-full bg-[#1c1c4b] hover:bg-purple-900 btn-sm" >
                                  <FaEdit />
                                </button>
                              </Link>
                    </td>

                    <td className="text-center">
                      <Link href={`/dashboard/myOrder/return/${item?._id}`}>
                                <button  className = "text-blue-200 btn border-none rounded-full bg-[#1c1c4b] hover:bg-purple-900 btn-sm" >
                                  <TbTruckReturn />
                                </button>
                              </Link>
                    </td>

                    <td className="text-center">
                      <button
                                onClick={() => handleDelete(item?._id)}
                                className="text-red-600 btn border-none rounded-full bg-[#1c1c4b] hover:bg-purple-900 btn-sm"
                              >
                                <FaTrashAlt />
                              </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;

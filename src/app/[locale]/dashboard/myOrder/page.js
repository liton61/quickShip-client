"use client";
import { FaSackDollar } from "react-icons/fa6";
import useOrder from "../../components/hooks/useOrder";
import SectionTitle from "../../components/shared/SectionTitle";
import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import usePublicAxios from "../../components/hooks/usePublicAxios";
import { HiDotsVertical } from "react-icons/hi";
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
                  <th>Phone Number</th>
                  <th> Price</th>
                  <th>Delivery Date</th>
                  <th>Weight</th>
                  <th>Payment</th>
                  <th>Product Modify</th>
                </tr>
              </thead>
              <tbody>
                {order?.map((item, index) => (
                  <tr className="border-b-gray-800 hover:bg-[#0D0D21]"
                    key={
                      item._id
                    } >
                    <th>{index + 1}</th>
                    <td>{item?.name}</td>
                    <td>{item?.phone}</td>
                    <td className="text-center">${item?.productPrice}</td>
                    <td>{item?.deliveryDate}</td>
                    <td className="text-center">{item?.productWeight}</td>
                    <td className="text-center">
                      <Link
                        href={`/dashboard/myOrder/${item?._id}`}
                        className="btn rounded-full bg-[#1c1c4b] hover:bg-purple-900 text-white btn-sm"
                      >
                        <span className="text-xs">
                          <FaSackDollar></FaSackDollar>
                        </span>
                      </Link>
                    </td>
                    <td td className="text-center" >

                      {/* Open the modal using document.getElementById('ID').showModal() method */}
                      <button className="text-xl font-bold" onClick={() => document.getElementById('my_modal_2').showModal()}><HiDotsVertical /></button>
                      <dialog id="my_modal_2" className="modal">
                        <div className="modal-box bg-black border-[2px] border-white">
                          <h2 className="text-2xl text-center font-bold text-white">Product Modify</h2>
                          <p className="text-xs pt-3 pb-7 text-gray-400 text-center">Here you can update product, delete product, return product</p>
                          <div className="flex gap-4 justify-center items-center">
                            <div>
                              <Link href={`/dashboard/myOrder/update/${item?._id}`}>
                                <button button className="text-green-600 font-bold py-3 px-8 rounded border border-purple-700  hover:bg-purple-700" >
                                  <FaEdit />
                                </button>
                              </Link>
                            </div>

                            <div>
                              <button
                                onClick={() => handleDelete(item?._id)}
                                className="text-red-600 font-bold py-3 px-8 rounded border border-purple-700  hover:bg-purple-700"
                              >
                                <FaTrashAlt />
                              </button>
                            </div>

                            <div>
                              <Link href={`/dashboard/myOrder/return/${item?._id}`}>
                                <button className="text-blue-200 font-bold py-3 px-8 rounded border border-purple-700  hover:bg-purple-700">
                                  <TbTruckReturn />
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
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

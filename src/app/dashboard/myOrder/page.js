"use client";
import { FaSackDollar } from "react-icons/fa6";
import useOrder from "../../../components/hooks/useOrder";
import SectionTitle from "../../../components/shared/SectionTitle";
import Link from "next/link";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import usePublicAxios from "../../../components/hooks/usePublicAxios";
import { TbTruckReturn } from "react-icons/tb";
import ClipBoard from "@/components/shared/ClipBoard";

const MyOrder = () => {
  const [order, refetch] = useOrder();
  const publicAxios = usePublicAxios()

  const handleDelete = async (id) => {
    const res = await publicAxios.delete(`/order/${id}`)
    if (res.data.deletedCount > 0) {
      toast.success("Product Delete Successfully")
      refetch()
    }
  }

  return (
    <div className="" >
      <div className="py-8 px-5 ">
        <SectionTitle
          header={"Order history"}
          miniHeader={"All my order history here"}
        ></SectionTitle>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-white" >
                <tr className="bg-blue-600" >
                  <th>No</th>
                  <th>User name</th>
                  <th> Price</th>
                  <th>Delivery Date</th>
                  <th>Weight</th>
                  <th>Track Id</th>
                  <th>Payment</th>
                  <th>Update</th>
                  <th>Return</th>
                  <th>Delete</th>

                </tr>
              </thead>
              {
                order?.length === 0 ? <div class="flex w-full justify-center items-center h-screen">
                  <h2 class="text-2xl font-bold">No Order Here</h2>
                </div>
                  : <tbody>
                    {order?.map((item, index) => (
                      <tr className="border-b-gray-800"
                        key={
                          item._id
                        } >
                        <th>{index + 1}</th>
                        <td>{item?.name}</td>
                        <td>${item?.productPrice}</td>
                        <td>{item?.deliveryDate}</td>
                        <td>{item?.productWeight}</td>
                        <td><ClipBoard id={item?._id} text={`text-black`} hover={`hover:bg-blue-200`}/></td>
                        <td >
                          <Link
                            href={`/dashboard/myOrder/${item?._id}`}
                            className="btn border-none rounded-full  hover:bg-blue-200 btn-sm"
                          >
                            <span className="text-2xl">
                              <FaSackDollar></FaSackDollar>
                            </span>
                          </Link>
                        </td>

                        <td>
                          <Link href={
                            `/dashboard/myOrder/update/${item?._id}`
                          } >
                            <button className="text-green-600 text-lg btn border-none rounded-full  hover:bg-blue-200 btn-sm" >
                              <FaEdit />
                            </button>
                          </Link>
                        </td>

                        <td>
                          <Link href={`/dashboard/myOrder/return/${item?._id}`}>
                            <button className="text-2xl btn border-none rounded-full  hover:bg-blue-200 btn-sm" >
                              <TbTruckReturn />
                            </button>
                          </Link>
                        </td>

                        <td>
                          <button
                            onClick={() => handleDelete(item?._id)}
                            className="text-red-600 btn text-lg border-none rounded-full  hover:bg-blue-200 btn-sm"
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

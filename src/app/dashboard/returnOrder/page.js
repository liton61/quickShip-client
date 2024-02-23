"use client"

import usePublicAxios from "@/components/hooks/usePublicAxios";
import useReturn from "../../../components/hooks/useReturn";
import SectionTitle from "../../../components/shared/SectionTitle";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

const ReturnOrder = () => {
  const [returnProduct, refetch] = useReturn()
  // console.log(returnProduct);

  const publicAxios = usePublicAxios()

  const handlePending = async (id) => {
        const success = { status: "Accepted" }
        const res = await publicAxios.patch(`/return/${id}`, success)
        console.log(res.data);
        toast.success("Return Successfully Accepted")
        refetch()
    }

    const handleDelete = async (id) => {
    const res = await publicAxios.delete(`/return/${id}`)
    if (res.data.deletedCount > 0) {
      toast.success("Return Delete Successfully")
      refetch()
    }
  };
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
                  <th>Delete</th>


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
                    <td>
                      {
                        item?.status === "pending" ? <button onClick={() => handlePending(item?._id)} className="badge badge-secondary badge-outline">{item?.status}</button> : <button className="badge badge-success badge-outline">{item?.status}</button>
                      }
                    </td>

                    <td className="text-center">
                      <button
                                onClick={() => handleDelete(item?._id)}
                                className="text-red-600 btn border-none rounded-full hover:bg-purple-900 btn-sm"
                              >
                                <FaTrashAlt />
                              </button>
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

export default ReturnOrder;
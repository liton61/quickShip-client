"use client";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import useReturn from "@/components/hooks/useReturn";
import SectionTitle from "@/components/shared/SectionTitle";

const ManageReturn = () => {
  const [returnProduct, refetch] = useReturn();
  const publicAxios = usePublicAxios()

  const filterReturn = returnProduct?.filter((item) => item?.status === "Accepted")

   const handlePending = async (id) => {
        const success = { status: "Completed" }
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
    <div className="bg-[#010313] text-white h-screen" >
      <div className="py-8 px-5 ">
        <SectionTitle
          header={"Return Management"}
          miniHeader={"All Return management here"}
        ></SectionTitle>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-white" >
                <tr className="bg-[#0D0D21]" >
                  <th>No</th>
                  <th>User name</th>
                  <th>Reason</th>
                  <th>Price</th>
                  <th>Comments</th>
                  <th>Action</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              {
                filterReturn.length === 0 ? <div class="flex w-full mx-auto justify-center items-center h-screen">
                <h2 class="text-2xl font-bold">All Order Completed</h2>
              </div> : <tbody>
                {filterReturn?.map((item, index) => (
                  <tr className="border-b-gray-800 hover:bg-[#0D0D21]"
                    key={
                      item._id
                    } >
                    <th>{index + 1}</th>
                    <td>{item?.name}</td>
                    <td>{item?.productReason}</td>
                    <td>${item?.productPrice}</td>
                    <td>{item?.productComment}</td>

                    <td>
                      {
                        item?.status === "Accepted" ? <button onClick={() => handlePending(item?._id)} className="badge badge-secondary badge-outline">{item?.status}</button> : ''
                      }
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

export default ManageReturn;

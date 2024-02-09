"use client";
import { FaSackDollar } from "react-icons/fa6";
import useOrder from "@/components/hooks/useOrder";
import SectionTitle from "@/components/shared/SectionTitle";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const [order] = useOrder();
  // console.log(payment);
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/order/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your order has been deleted.",
                icon: "success",
              }).then((delet) => {
                if (delet.isConfirmed) {
                  window.location.reload();
                }
              });
            }
          });

        console.log("delete confirm");
      }
    });
  };

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
                  <th> Price</th>

                  <th>Delivery Date</th>

                  <th>Update</th>
                  <th>Delete</th>
                  <th>Payment </th>
                </tr>
              </thead>
              <tbody>
                {order?.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>{item?.name}</td>
                    <td>{item?.phone}</td>
                    <td>${item?.productPrice}</td>
                    <td>{item?.deliveryDate}</td>
                    <td>
                      <Link href={`/dashboard/myOrder/update/${item?._id}`}>
                        <button className="btn bg-[#18ad50] text-white">
                          <FaEdit />
                        </button>
                      </Link>
                    </td>
                    <td>
                      <td>
                        <button
                          onClick={() => handleDelete(item?._id)}
                          className="btn bg-[#ad181d] text-white"
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </td>
                    <td>
                      <Link
                        href={`/dashboard/myOrder/${item?._id}`}
                        className="btn rounded-full bg-[#1c1c4b] hover:bg-purple-900 text-white btn-sm"
                      >
                        <span className="text-xs">
                          <FaSackDollar></FaSackDollar>
                        </span>
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

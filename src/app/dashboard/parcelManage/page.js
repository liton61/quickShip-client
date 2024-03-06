"use client"

import useParcel from "../../../components/hooks/useParcel";
import usePublicAxios from "../../../components/hooks/usePublicAxios";
import toast from "react-hot-toast";


const UserTable = () => {
    const [parcel, refetch] = useParcel();
    const publicAxios = usePublicAxios()

    const handlePending = async (id) => {
        const success = { status: "success" }
        const res = await publicAxios.patch(`/order/${id}`, success)
        console.log(res.data);
        toast.success("Order Successfully Complete")
        refetch()
    }

    return (
        <div className = "overflow-x-auto pt-10 px-5" >
                    <table className="table">
                        {/* head */}
                        <thead className = "z-20 rounded-t-3xl bg-blue-600 text-white" >
                            <tr >
                                <th>No</th>
                                {/* <th>Image</th> */}
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Area</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs">
                            {
                                parcel.map((item, index) => <tr key={
                                    item?._id
                                }  className="border-b-gray-800" >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>{item?.name}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.phone}</td>
                                    <td>${item?.productPrice}</td>
                                    <td>{item?.deliveryDate}</td>
                                    {/* <td>{item.productWeight} Kg</td> */}
                                    <td>{item?.area}</td>
                                    <td>
                                        {
                                            item?.status === "pending" ? <button onClick={() => handlePending(item?._id)} className="badge badge-secondary badge-outline">{item?.status}</button> : <button className="badge badge-success badge-outline">{item?.status}</button>
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
    );
};

export default UserTable;

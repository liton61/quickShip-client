"use client"

import useParcel from "@/components/hooks/useParcel";
import usePublicAxios from "@/components/hooks/usePublicAxios";
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
        <div>
            <div>
                <div className="overflow-x-auto mt-10 px-5">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-blue-600 text-white z-20 rounded-t-3xl">
                            <tr>
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
                                } >
                                    <td>
                                        {index + 1}
                                    </td>
                                    {/* <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="rounded-full w-12 h-12">
                                                    <Image src={item.image} alt="Avatar Tailwind CSS Component" width={500} height={500}/>
                                                </div>
                                            </div>
                                        </div>
                                    </td> */}
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
                                    {/* <td>{item.time}</td> */}
                                    {/* <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button><i className="fas fa-edit text-xl text-green-600 mt-3"></i></button>
                                        </Link>
                                    </td> */}
                                    {/* <td>
                                        <button onClick={() => handleDeleteItem(item)}><i className="fa-solid fa-trash-can text-xl text-red-600 mt-3"></i></button>
                                    </td> */}
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserTable;

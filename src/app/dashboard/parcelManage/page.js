"use client"
import useOrder from "@/components/hooks/useOrder";


const UserTable = () => {
    const [parcel, refetch] = useParcel();
    const publicAxios = usePublicAxios()

    const handlePending = async (id) =>{
        const success = {status: "success"}
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
                        <thead className="bg-blue-300 text-white z-20">
                            <tr>
                                <th>#</th>
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
                                parcel.map((item, index) => <tr tr key = {
                                            item?._id
                                        } >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>${item.productPrice}</td>
                                    <td>{item.deliveryDate}</td>
                                    <td>{item.area}</td>
                                    <td className="text-red-600">{item.status}</td>
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

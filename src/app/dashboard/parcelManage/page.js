"use client"
import useOrder from "@/components/hooks/useOrder";
import Image from "next/image";


const UserTable = () => {
    const [order] = useOrder();
    return (
        <div>
            <div>
                <div className="overflow-x-auto mt-10 lg:px-0 px-5">
                    <table className="table lg:w-3/4 mx-auto w-full">
                        {/* head */}
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th>#</th>
                                {/* <th>Image</th> */}
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>weight</th>
                                <th>Area</th>
                                <th>Status</th>
                                {/* <th>Time</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.map((item, index) => <tr key={item._id}>
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
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>${item.productPrice}</td>
                                    <td>{item.deliveryDate}</td>
                                    <td>{item.productWeight} Kg</td>
                                    <td>{item.area}</td>
                                    <td>Confirm</td>
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

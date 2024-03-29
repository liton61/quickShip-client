"use client"
import { useState } from "react";
import usePublicAxios from "../../../components/hooks/usePublicAxios";
import { useQuery } from "@tanstack/react-query";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";

const Page = () => {
    const axiosPublic = usePublicAxios();
    const { data: application = [], refetch } = useQuery({
        queryKey: ['application'],
        queryFn: async () => {
            const res = await axiosPublic.get('/application');
            const filteredData = res.data.filter(item => item.role === 'user');
            return filteredData;
        }
    });

    const [selectedUser, setSelectedUser] = useState(null);
    // State to store the selected user

    const handleAccept = user => {
        axiosPublic.patch(`/application/user/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${user.name} is a delivery boy now!`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

    const handleReject = (application) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/application/${application._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Rejected!",
                                text: "Your file has been rejected.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting application:", error);
                    });
            }
        });
    };


    return (
        <div className="lg:px-20 px-5 pt-14" >
            {application.length > 0 ? (
                <div>
                    <div className="stats shadow flex justify-center text-center my-10">
                        <div className="stat" >
                            <div className="stat-title">Total Application</div>
                            <div className="stat-value text-blue-600">{application.length}</div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* Table headers */}
                            <thead className="bg-blue-600 text-white" >
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Details</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Render application */}
                                {application.map((user, index) => (
                                    <tr className="border-b-gray-800"
                                        key={
                                            user._id
                                        } >
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button className="" onClick={() => setSelectedUser(user)}>
                                                <FaEye />
                                            </button>
                                        </td>
                                        <td className="flex lg:block">
                                            {user.role === 'Delivery Boy' ? '' : <button
                                                onClick={() => handleAccept(user)} className="text-green-500">Accept
                                            </button>}
                                            <button onClick={() => handleReject(user)} className="text-red-600 ml-5">Reject</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <p className="text-3xl font-bold flex justify-center items-center h-screen">No application !</p>
            )}

            {/* Open the modal using dialog element */}
            {selectedUser && (
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-2">Details</h3>
                        <p>Description : {selectedUser.description}</p>
                        <p>Address : {selectedUser.address}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn" onClick={() => setSelectedUser(null)}>Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Page;

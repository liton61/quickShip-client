/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import usePublicAxios from '../../../components/hooks/usePublicAxios';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';


const page = () => {
    const axiosPublic = usePublicAxios();
    const { data: user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get('/application');
            const filteredData = res.data.filter(item => item.role !== 'user');
            return filteredData;
        }
    })

    const handleDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/application/${user._id}`)
                    .then(res => {
                        // console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }

    return (
        <div className = "lg:px-20 px-5 pt-14" >
            <div className="stats shadow-lg flex justify-center text-center">
                <div className = "stat" >
                    <div className="stat-title">Total Delivery Boy</div>
                    <div className="stat-value text-blue-600">{user.length}</div>
                </div>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className = "bg-blue-600 text-white" >
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => <tr className = "border-b-gray-800"
                                    key = {
                                        user._id
                                    } >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <button onClick={() => handleDelete(user)}><FaTrash className="fa-solid fa-trash-can text-lg text-red-600 mt-3"></FaTrash></button>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;
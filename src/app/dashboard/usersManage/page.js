/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import usePublicAxios from '@/components/hooks/usePublicAxios';
import { useQuery } from '@tanstack/react-query';

const page = () => {
    const axiosPublic = usePublicAxios();
    const { data: user = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })
    return (
        <div className="lg:w-3/4 mx-auto lg:px-0 px-5 mt-10">
            <div className="stats shadow flex justify-center text-center">
                <div className="stat">
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">{user.length}</div>
                </div>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* head */}
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Role</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>Delete</td>
                                {/* <td>
                                    {user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeAdmin(user)}>
                                        <i className="fa-solid fa-users text-xl text-green-600"></i>
                                    </button>}
                                </td>
                                <button onClick={() => handleDeleteUser(user)}><i className="fa-solid fa-trash-can text-xl text-red-600 mt-3"></i></button> */}
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;
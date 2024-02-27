"use client"

import { useRouter } from "next/navigation";
/* eslint-disable react-hooks/rules-of-hooks */
import useAuth from "../../../components/hooks/useAuth";
import usePublicAxios from "../../../components/hooks/usePublicAxios";
import Swal from "sweetalert2";


const page = () => {
    const axiosPublic = usePublicAxios();
    const router = useRouter()
    const { user } = useAuth();
    // const navigate = useNavigate();
    const handleApplied = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const age = form.age.value;
        const address = form.address.value;
        const salary = form.salary.value;
        const experience = form.experience.value;
        const description = form.description.value;
        const role = "user";

        const userInfo = { email, age, name, address, salary, experience, description, role, }
        console.log(userInfo);

        // send data to the server
        axiosPublic.post('/application', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "You have successfully applied !",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                   router.push('/')
                    // navigate('/trainer')
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="py-14 bg-gray-100 lg:px-0 px-5 pt-24 xl:py-36">
            <div className="pb-5">
                <h1 className="text-center text-2xl font-bold">Wanna Be a Delivery Boy ?</h1>
                <p className="text-center font-medium text-blue-600">Please fill up the form !</p>
            </div>
            <form onSubmit={handleApplied} className="lg:w-3/4 mx-auto bg-white lg:p-10 p-5 py-5 rounded">
                <div className='lg:flex gap-5 justify-center mb-4'>
                    <div className="form-control lg:w-1/2 w-full">
                        <label className="label">
                            <span className='label-text font-bold'>Full Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Your Full Name" className="input input-bordered focus:outline-none w-full" required />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2 w-full">
                        <label className="label">
                            <span className='label-text font-bold'>Email </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='email' defaultValue={user?.email} className="input input-bordered focus:outline-none w-full" disabled />
                        </label>
                    </div>
                </div>
                <div className='lg:flex gap-5 justify-center mb-4'>
                    <div className="form-control lg:w-1/2 w-full">
                        <label className="label">
                            <span className='label-text font-bold'>Your Age</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='age' placeholder="Your Age" className="input input-bordered focus:outline-none w-full" required />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2 w-full">
                        <label className="label">
                            <span className='label-text font-bold'>Your Address</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='address' placeholder="Your Address" className="input input-bordered focus:outline-none w-full" required />
                        </label>
                    </div>
                </div>
                <div className='lg:flex gap-5 justify-center mb-4'>
                    <div className="form-control lg:w-1/2 w-full">
                        <label className="label">
                            <span className='label-text font-bold'>Years of Experience
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='experience' placeholder="Year of experience" className="input input-bordered focus:outline-none w-full" required />
                        </label>
                    </div>
                    <div className="form-control lg:w-1/2 w-full">
                        <label className="label">
                            <span className='label-text font-bold'>Salary
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='salary' placeholder="Salary" className="input input-bordered focus:outline-none w-full" required />
                        </label>
                    </div>
                </div>
                <div className='mb-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className='label-text font-bold'>Description
                            </span>
                        </label>
                        <textarea className="textarea textarea-bordered focus:outline-none w-full h-40" name='description' placeholder="Description"></textarea>
                    </div>
                </div>
                <div>
                    <button type="submit" className="bg-blue-600 py-3 w-full font-bold text-white rounded">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default page;
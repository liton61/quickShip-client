"use client"
import usePublicAxios from '@/components/hooks/usePublicAxios';
import React from 'react';
import Swal from 'sweetalert2';

const Review = () => {
    const axiosPublic = usePublicAxios();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const details = form.details.value;

        const userReviews = { name, rating, details };
        console.log(userReviews);

        axiosPublic.post('/reviews', userReviews)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job !",
                        text: "Review successfully added !",
                        icon: "success"
                    });
                }
                form.reset();
            })
    }
    return (
        <div>
            <div div className = "py-12 lg:px-0 px-5 bg-[#010313]" >
                <div div className = "lg:w-3/4 mx-auto bg-[#0D0D21] text-white p-10 rounded" >
                    <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="text-gray-200 font-medium">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Your name" className="form-input mt-1 w-full bg-[#010313] rounded-md focus:outline-none p-2" />
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-200 font-medium">Rating</label>
                            <select select id = "rating"
                            name = "rating"
                            className = "form-select bg-[#010313] mt-1 w-full rounded p-2" >
                                <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                                <option value="4">⭐⭐⭐⭐ (Good)</option>
                                <option value="3">⭐⭐⭐ (Average)</option>
                                <option value="2">⭐⭐ (Fair)</option>
                                <option value="1">⭐ (Poor)</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="text-gray-200 font-medium">Your Review</label>
                            <textarea id="detail" name="details" placeholder='Enter Your Review' rows="4" className="form-textarea bg-[#010313] mt-1 w-full rounded focus:outline-none p-2"></textarea>
                        </div>
                        <div>
                            <input
                                type="submit"
                                value={"Submit Review"}
                                className="btn border-none w-full text-white bg-[#2c1e6d] hover:bg-[#140d32]"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;
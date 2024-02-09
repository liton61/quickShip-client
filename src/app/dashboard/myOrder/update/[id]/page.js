"use client";
import { getUpdateOrder } from "@/components/hooks/useUpdate";
import React from "react";
import Swal from "sweetalert2";

const UpdatePage = ({ params }) => {
  // const order = useUpdate();
  // const oldData = getUpdateOrder(params.id);
  console.log(params.id);

  console.log(oldData);

  const handleUpdateOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const weight = form.weight.value;
    const time = form.time.value;

    const updateOrder = {
      name,
      email,
      phone,
      price,
      weight,
      time,
    };
    console.log(updateOrder);

    fetch(`http://localhost:5000/order/${params.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Order updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto mt-10 bg-gray-200 p-10 rounded">
      <h2 className="text-center text-4xl">Update Order</h2>
      <form onSubmit={handleUpdateOrder} className="my-10">
        {/* form name and email row */}

        {/* name and email */}
        <div className="lg:gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 lg:px-5 ">
          <div className="lg:py-2 ">
            <span className="font-bold text-md">Name</span>
            <input
              className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
              type="name"
              required
              placeholder="Enter Your Name"
              name="name"
              defaultValue={oldData?.name}
            />
          </div>
          <div className="lg:py-2 ">
            <span className=" font-bold text-md">Email</span>
            <input
              className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
              type="email"
              required
              placeholder="Enter Your email"
              name="email"
              defaultValue={oldData?.email}
            />
          </div>
        </div>
        {/* phone and price */}
        <div className="lg:gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 lg:px-5 ">
          <div className="lg:py-2 ">
            <span className="font-bold text-md">Phone </span>
            <input
              className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
              type="text"
              required
              name="phone"
              defaultValue={oldData?.phone}
            />
          </div>
          <div className="lg:py-2 ">
            <span className=" font-bold text-md">Price</span>
            <input
              className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
              type="text"
              required
              name="price"
              defaultValue={oldData?.productPrice}
            />
          </div>
        </div>
        {/* Weight and time */}
        <div className="lg:gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-2 lg:px-5 ">
          <div className="lg:py-2 ">
            <span className="font-bold text-md">Product Weight </span>
            <input
              className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
              type="text"
              required
              name="weight"
              defaultValue={oldData?.productWeight}
            />
          </div>
          <div className="lg:py-2 ">
            <span className=" font-bold text-md">Delivary Time</span>
            <input
              className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
              type="text"
              required
              name="time"
              defaultValue={oldData?.time}
            />
          </div>
        </div>

        <div className="md:flex mb-5">
          <div className="form-control w-full ml-4">
            <label className="">
              <input
                type="submit"
                value="Update Order"
                className="btn btn-block mt-4 text-white bg-blue-500"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;

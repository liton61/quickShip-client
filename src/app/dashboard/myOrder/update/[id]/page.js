"use client";
import useAuth from "../../../../../components/hooks/useAuth";
import useOrder from "../../../../../components/hooks/useOrder";
import usePublicAxios from "../../../../../components/hooks/usePublicAxios";
import SectionTitle from "../../../../../components/shared/SectionTitle";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UpdatePage = ({ params }) => {
  const { user } = useAuth();
  const axiosPublic = usePublicAxios();

  const [order] = useOrder()
  const router = useRouter()

  const productUpdate = order?.find((item) => item?._id === params?.id)
  console.log(productUpdate);

  // console.log(params.id);

  const handleUpdateOrder = async (event) => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const price = form.price.value;
    const weight = form.weight.value;
    const time = form.time.value;

    const updateOrder = {
      phone,
      price,
      weight,
      time,
    };
    // console.log(updateOrder);
    const res = await axiosPublic.put(`/order/${params.id}`, updateOrder);
    // console.log(res.data);
    if (res.data.modifiedCount > 0) {
      toast.success("Product Update Successfully")
      router.push("/dashboard/myOrder")
    }
  };

  return (
    <div className="pt-44">
      <SectionTitle header={"Update your parcel"} miniHeader={"Update"} />
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
                defaultValue={user?.displayName}
                disabled
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
                defaultValue={user?.email}
                disabled
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
                defaultValue={productUpdate?.phone}
              />
            </div>
            <div className="lg:py-2 ">
              <span className=" font-bold text-md">Price</span>
              <input
                className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                type="text"
                required
                name="price"
                defaultValue={productUpdate?.productPrice}
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
                defaultValue={productUpdate?.productWeight}
              />
            </div>
            <div className="lg:py-2 ">
              <span className=" font-bold text-md">Delivery Time</span>
              <input
                className="w-full my-2 p-2 border border-blue-500  rounded-lg placeholder:font-light placeholder:text-gray-500"
                type="date"
                required
                name="time"
                defaultValue={productUpdate?.deliveryDate}
              />
            </div>
          </div>

          <div className="md:flex mb-5">
            <div className="form-control w-full ml-4">
              <label>
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
    </div>
  );
};

export default UpdatePage;

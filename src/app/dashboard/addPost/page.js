"use client"
import { useForm } from "react-hook-form";
import SectionTitle from "@/components/shared/SectionTitle";
import usePublicAxios from "@/components/hooks/usePublicAxios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const AddPost = () => {
    const publicAxios = usePublicAxios()
    const router = useRouter()
  
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const postInfo = {
      title: data?.title,
      description: data?.description,
      category: data?.category,
      image: data?.image,
      tag: data.tag
    };

    console.log(postInfo);

    const res = await publicAxios.post("/posts", postInfo)
    console.log(res.data);
    if (res.data.insertedId) {
        toast.success("Successfully Post here")
        router.push("/blog")
    }
  };

  return (
    <div className="py-8 bg-[#010313] overflow-x-auto">
      <SectionTitle
        header={"Add Post"}
        miniHeader={"User any post added here"}
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
            <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Post Title <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Enter your Post Title"
              className="input bg-black text-white input-bordered placeholder:text-xs"
            />
          </div>
          

            <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Post Image <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="url"
              {...register("image", { required: true })}
              placeholder="Enter your Post Image"
              className="input bg-black text-white input-bordered placeholder:text-xs"
            />
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-white">Category*</span>
            </label>
            <select
              defaultValue="default"
              {...register("category", { required: true })}
              className="select bg-black text-white select-bordered w-full"
            >
              <option disabled value="default">
                Select a Tag
              </option>
              <option value="Air Cargo News">Air Cargo News</option>
              <option value="Distribution/Materials">Distribution/Materials</option>
              <option value="Logistics Planner">Logistics Planner</option>
              <option value="Supply Chain Research">Supply Chain Research</option>
              <option value="Transport Digest">Transport Digest</option>
              <option value="Worl Expert Insight">Worl Expert Insight</option>

            </select>
          </div>

          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-white">Tags*</span>
            </label>
            <select
              defaultValue="default"
              {...register("tag", { required: true })}
              className="select bg-black text-white select-bordered w-full"
            >
              <option disabled value="default">
                Select a Tag
              </option>
              <option value="Logistics">Logistics</option>
              <option value="Electric">Electric</option>
              <option value="Heating">Heating</option>
              <option value="Ideas">Ideas</option>
              <option value="Interior">Interior</option>
              <option value="Repair">Repair</option>
            </select>
          </div>

          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Post Description <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="text"
              {...register("description", { required: true })}
              placeholder="Enter your Post Description"
              className="input bg-black text-white input-bordered placeholder:text-xs"
            />
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value={"Add Post"}
              className="btn border-none text-white bg-[#2c1e6d] hover:bg-[#140d32]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
import { BsCartCheckFill } from "react-icons/bs";
import { MdOutlineLocationOn, MdSupportAgent } from "react-icons/md";

const Info = () => {
    return (
        <div>
            <div className="hero h-[100vh] lg:h-[50vh]" style={{backgroundImage: 'url(https://i.ibb.co/J5zD6Xk/architect.png)'}}>

  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
        <p>WHY WE ARE BEST</p>
      <h1 className="mb-5 text-xl lg:text-5xl font-bold">Few Reasons Why You Choose Us Protect Yourself</h1>
      <div className="flex flex-col lg:flex-row ">
     <h1 className="flex justify-center items-center  "><BsCartCheckFill className="text-blue-600 text-6xl p-4 bg-red-100 rounded-full"  /><span>--------------</span></h1>
     <h1 className="flex justify-center items-center"><MdOutlineLocationOn className="text-blue-600 text-6xl p-4 bg-red-100 rounded-full" /><span>--------------</span></h1>
     <h1 className="flex justify-center items-center"><MdSupportAgent  className="text-blue-600 text-6xl p-4 bg-red-100 rounded-full" /></h1>
    
    </div>
    <div className="flex flex-col lg:flex-row justify-between ">
        <h1 className="mr-10  font-bold mt-6">On-Time delivery</h1>
        <h1  className="mr-10  font-bold mt-6">Real Time Tracking</h1>
        <h1  className="lg:mr-10  font-bold mt-6">24/7 Online Support</h1>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Info;
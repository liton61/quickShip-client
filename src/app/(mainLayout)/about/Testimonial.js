"use client"
import SectionTitle from "@/components/shared/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import profileImg from "@/assets/avatar.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '@smastrom/react-rating/style.css'

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from "next/image";
import userReviews from "@/components/hooks/useReviews";
import { Rating } from "@smastrom/react-rating";
const Testimonial = () => {
    const [reviews] = userReviews()
    console.log(reviews);
    return (
        <div div className = "md:px-6 bg-[#F7F6F2] py-10" >
            <SectionTitle SectionTitle header = {
                "Testimonials"
            }
            miniHeader = {
                "OUR CLIENTS SAY"
            }></SectionTitle>

            <div>
                <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         {
            reviews?.map((item) => <SwiperSlide key={item?._id}>
            <div>
                <div className="bg-white rounded-md p-10 text-sm text-gray-700 text-justify">
                    <p className=""> QuickShip, the epitome of efficiency in the realm of international courier services, stands as a beacon
                    for swift and reliable parcel deliveries across borders.</p>
                </div>

                    <div className="flex gap-5 py-5">
                                    <div>
                                        {
                                        item?.userImage ? <Image className='rounded-full border-5 border-white' src={item?.userImage} alt='images' width={50} height={50}></Image> : <Image className='rounded-full border-5 border-white' src={profileImg} alt='images' width={50} height={50}></Image>
                                    }
                                    </div>
                                <div className="space-y-2">
                                    <p className="text-gray-500 font-semibold text-md">{item?.userName}</p>
                                    
                                    <div>
                                        <Rating
                                    style={{ maxWidth: 100 }}
                                    value={item?.rating}
                                    readOnly
                                />
                                        </div>
                                    <p className="text-sm text-justify text-gray-400">Customer</p>
                                </div>
                            </div>
            </div>
        </SwiperSlide>)
            }
      </Swiper>
            </div>

        </div>
    );
};

export default Testimonial;
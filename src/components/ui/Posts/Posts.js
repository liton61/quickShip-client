"use client"
import usePosts from "@/components/hooks/usePosts";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import profileImg from "@/assets/avatar.png"
import Link from "next/link";

const Posts = () => {
    const [posts] = usePosts()
    return (
        <div className="bg-base-200">
            <div className="container mx-auto gap-7 lg:px-20 px-5" >
                <SectionTitle header={"RECENT ARTICLES "} miniHeader={"What News Do We Have Today"}></SectionTitle>
                <div className="-mt-16">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                        autoplay={{ delay: 3000 }}
                        autoHeight={true}
                        breakpoints={{
                            // when window width is >= 640px
                            375: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}

                    >
                        {
                            posts?.map((item) => <SwiperSlide SwiperSlide key={item?._id} >
                                <div key={item?._id} className="card bg-base-100 rounded-sm shadow-xl">
                                    <figure><Image className="rounded-sm w-full h-52" src={item?.image} alt="image" width={300} height={300}></Image></figure>
                                    <div className="card-body">
                                        <div className="flex gap-3 items-center">
                                            <div>
                                                {
                                                    item?.userImg ? <Image className='rounded-full w-12 h-12  hover:bg-opacity-25 transition-opacity duration-300' src={item?.userImg} alt='images' width={100} height={100}></Image> : <Image className='rounded-full w-12 h-12  hover:opacity-35 hover:transition-opacity hover:duration-300' src={profileImg} alt='images' width={100} height={100}></Image>
                                                }
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 text-justify"><span className="hover:text-blue-700">Author</span> <span className="px-1 text-xs">||</span> <span className="hover:text-blue-700">{item?.category}</span></p>
                                                <p className="text-xs text-gray-400 text-justify ">{item?.time}</p>
                                            </div>
                                        </div>
                                        <Link href={`/blog/${item?._id}`} className="card-title w-full h-16 hover:text-blue-700">{item?.title
                                            .split(' ')
                                            .splice(0, 5)
                                            .join(' ')}...</Link>
                                        <hr className="border-dashed border border-gray-300" />
                                        <p className="text-justify text-sm text-gray-600">{item?.description
                                            .split(' ')
                                            .splice(0, 12)
                                            .join(' ')}....</p>
                                        <div className="card-actions justify-start">
                                            <Link href={`/blog/${item?._id}`} className="text-blue-800 hover:text-purple-700 flex items-center  font-bold">Read More <span className="ml-2"><FaArrowRightFromBracket></FaArrowRightFromBracket></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Posts;
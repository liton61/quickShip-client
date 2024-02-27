"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './OurTeams.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import team1 from "@/assets/OurTeams/team-member-opt-1.jpg"
import team2 from "@/assets/OurTeams/team-member-opt-2.jpg"
import team3 from "@/assets/OurTeams/team-member-opt-4.jpg"
import team4 from "@/assets/OurTeams/team-member-opt-6.jpg"
import team5 from "@/assets/OurTeams/team-member-opt-2.jpg"
import team6 from "@/assets/OurTeams/team-member-opt-1.jpg"

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import SectionTitle from '@/components/shared/SectionTitle';

const OurTeams = () => {
    return (
        <div className='my-14'>
            <SectionTitle header={"Our Team"} miniHeader={"Our Experts Team Member Safety and Reliability"}></SectionTitle>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className = "flex flex-col items-center justify-center px-10 pb-5 bg-[#FEF8F8]" >
                            <Image className='rounded-full transition-all hover:border-r-5 -mt-10 hover:border-red-700' src={team1} alt='team1' width={30} height={30}></Image>

                            <div div className = 'space-y-2 flex flex-col items-center justify-center' >
                                <h1 className="mt-3 text-2xl font-bold hover:text-red-800">Liton Mia</h1>

                                <p className="text-red-950 ">Design Director</p>

                                <div className="flex space-x-4 items-center">
                                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                </div>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "flex flex-col items-center justify-center px-10 pb-5 bg-[#FEF8F8]" >
                            <Image className='rounded-full transition-all hover:border-r-5 -mt-10 hover:border-red-700' src={team2} alt='team1' width={30} height={30}></Image>

                            <div div className = 'space-y-2 flex flex-col items-center justify-center' >
                                <h1 className="mt-3 text-2xl font-bold hover:text-red-800">Antar Rani Priya</h1>

                                <p className="text-red-950 ">General Manager</p>

                                <div className="flex space-x-4 items-center">
                                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                </div>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "flex flex-col items-center justify-center px-10 pb-5 bg-[#FEF8F8]" >
                            <Image className='rounded-full transition-all hover:border-r-5 -mt-10 hover:border-red-700' src={team3} alt='team1' width={30} height={30}></Image>

                            <div div className = 'space-y-2 flex flex-col items-center justify-center' >
                                <h1 className="mt-3 text-2xl font-bold hover:text-red-800">Junayed Talukdar</h1>

                                <p className="text-red-950 ">Managing Drector</p>

                                <div className="flex space-x-4 items-center">
                                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                </div>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "flex flex-col items-center justify-center px-10 pb-5 bg-[#FEF8F8]" >
                            <Image className='rounded-full transition-all hover:border-r-5 -mt-10 hover:border-red-700' src={team4} alt='team1' width={30} height={30}></Image>

                            <div div className = 'space-y-2 flex flex-col items-center justify-center' >
                                <h1 className="mt-3 text-2xl font-bold hover:text-red-800">Shah Alam</h1>

                                <p className="text-red-950 ">Hudai guraguri korbe</p>

                                <div className="flex space-x-4 items-center">
                                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                </div>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "flex flex-col items-center justify-center px-10 pb-5 bg-[#FEF8F8]" >
                            <Image className='rounded-full transition-all hover:border-r-5 -mt-10 hover:border-red-700' src={team5} alt='team1' width={30} height={30}></Image>

                            <div div className = 'space-y-2 flex flex-col items-center justify-center' >
                                <h1 className="mt-3 text-2xl font-bold hover:text-red-800">Ayrin Rahat Promi</h1>

                                <p className="text-red-950 ">Delivery Head</p>

                                <div className="flex space-x-4 items-center">
                                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                </div>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className = "flex flex-col items-center justify-center px-10 pb-5 bg-[#FEF8F8]" >
                            <Image className='rounded-full transition-all hover:border-r-5 -mt-10 hover:border-red-700' src={team6} alt='team1' width={30} height={30}></Image>

                            <div div className = 'space-y-2 flex flex-col items-center justify-center' >
                                <h1 className="mt-3 text-2xl font-bold hover:text-red-800">Suhanur Rahman</h1>

                                <p className="text-red-950 ">Employee Head</p>

                                <div className="flex space-x-4 items-center">
                                    <FaFacebook className="text-blue-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaInstagram className="text-pink-600 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                    <FaTwitter className="text-blue-400 text-2xl transform hover:scale-150 transition-transform duration-300" />
                                </div>
                            </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OurTeams;
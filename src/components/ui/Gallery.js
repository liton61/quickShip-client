import Image from 'next/image';
import React from 'react';

const Gallery = () => {
    return (

        <div>
            <div class="-m-1 flex flex-wrap md:-m-2">
                <div class="flex w-1/2 flex-wrap">
                    <div class="w-1/2 p-1 md:p-2">
                        <Image
                            height={200}
                            width={200}
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400 "
                            src="https://i.ibb.co/2PfX4Tb/shutterstock-592656605.jpg" />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                        <Image
                            height={200}
                            width={200}
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
                            src="https://i.ibb.co/6FKZd0K/i-Stock-1170275750-600x400.png" />
                    </div>
                    <div class="w-full p-1 md:p-2">
                        <Image
                            height={200}
                            width={200}
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
                            src="https://i.ibb.co/FBKYNZG/truck-with-container-highway-cargo-transportation-concept-140916-2909.jpg" />
                    </div>
                </div>
                <div class="flex w-1/2 flex-wrap">
                    <div class="w-full p-1 md:p-2">
                        <Image
                            height={200}
                            width={200}
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center shadow-2xl  hover:shadow-orange-400 "
                            src="https://i.ibb.co/Y3tM7LL/sssip.jpg" />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                        <Image
                            height={200}
                            width={200}
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
                            src="https://i.ibb.co/WtW7DjY/stock.jpg" />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                        <Image
                            height={200}
                            width={200}
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center shadow-2xl hover:shadow-orange-400"
                            src="https://i.ibb.co/7z3s0s5/HD-wallpaper-take-off-plane-sunset-view.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
'use client'
import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay,  } from "swiper/modules";

const banner = [ '/SafeCallmed.png', '/WhiteEarPhone.png']

const Index = () => {
    return (
        <div className="relative w-full  border-b-[2px] border-[#e4e4e7]">
            <div className="absolute inset-0 bg-[url('/header-bg.png')] z-[10]"></div>
            <Swiper
                spaceBetween={30}
                // effect={'fade'}
                // navigation={true}
                // pagination={{
                //   clickable: true,
                // }}
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                // spaceBetween={15}
                // centeredSlides={true}
                autoplay={{
                    delay:3000
                }}
                loop={true}
                // tag="ul"
            >
                <SwiperSlide >
                    <div className="header-gradient1 min-h-screen bg-no-repeat bg-bottom bg-cover">
                        <div className="w-full pt-32 z-[20]">
                            <div className="grid grid-cols-2 max-w-7xl mx-auto">
                                <div className="h-full px-3 md:px-10 lg:px-20 flex-col flex items-center pt-[25%] gap-5">
                                    <div className="flex flex-col items-start justify-center gap-5">
                                        <h1 className="font-bold text-[#FFFFFF] text-3xl md:text-5xl">Welcome to the <span className="">Sound Age</span></h1>
                                        {/* <p className="text-[#2563eb] text-lg md:text-4xl">Stay alert. Stay safe.</p> */}
                                        <p className="text-[#FFFFFF] text-xl md:text-3xl">Driving safety starts with focus. The Sound Age introduces innovative solutions that help drivers stay fully aware, eliminating distractions for a safer journey</p>
                                    </div>
                                </div>
                                <Image src={'/SafeCallmed.png'} width={700} height={700} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="header-gradient2 min-h-screen bg-no-repeat bg-bottom bg-cover">
                        <div className="w-full pt-32 z-[20]">
                            <div className="grid grid-cols-2 max-w-7xl mx-auto">
                                <Image src={'/WhiteEarPhone.png'} width={700} height={700} />
                                <div className="h-full px-3 md:px-10 lg:px-20 flex-col flex items-center pt-[25%] gap-5">
                                    <div className="flex flex-col items-start justify-center gap-5">
                                        <h1 className="font-bold text-[#FFFFFF] text-3xl md:text-5xl">Safe Call EarPhone</h1>
                                        {/* <p className="text-[#2563eb] text-lg md:text-4xl">Hands-free. Distraction-free. </p> */}
                                        <p className="text-[#FFFFFF] text-xl md:text-3xl">A revolution in road safety. With crystal-clear sound and intelligent noise filtering, Safe Call EarPhone lets you stay connected without ever taking your eyes off the road</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Index;
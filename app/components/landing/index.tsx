"use client";
import { Tabs } from "flowbite-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
export default function Sections() {
    return (
        <>

            <img src="./img/shadow-circle.png" alt="Podcast Host" className="absolute bottom-0 right-0 rounded-[2rem] shadow-lg lg:block hidden" />

            <section className="container mx-auto lg:py-16 flex flex-col-reverse lg:flex-row  justify-between items-center">
                <div className="p-4">
                    <p className="text-xl">NextGenNorth</p>
                    <h2 className="lg:text-[120px] text-[60px]">BIG IDEAS <br /> — BIGGER IMPACT</h2>
                    <p className="mt-4 text-lg">Northern Territory Stories That Inspire.</p>
                    <button className="mt-6 px-6 py-3 flex items-center border border-[var(--color-orange-custom)] text-white  rounded-lg">
                        Start Listening
                        <img src="./img/angle-circle-right.png" alt="arrow" className="ml-2 -mr-1 w-4 h-4" />
                    </button>
                </div>
                <div className="mt-10 md:mt-0 relative flex justify-center items-start lg:w-[650px] lg:h-[550px] h-auto w-full flex-wrap" id="main-img-hero">
                    <img src="./img/user-hosted.jpg" alt="Podcast Host" className="rounded-[2rem] shadow-lg mr-5 hidden lg:block" />
                    <img src="./img/hero-img.jpg" alt="Podcast Host" className="rounded-[2rem] shadow-lg w-[90%] mx-auto lg:mx-0 lg:w-auto" />
                    <img src="./img/shadow-img-main.png" alt="Podcast Host" className="rounded-[2rem] shadow-lg absolute top-[100px] z-[-1] lg:right-[-50px] right-0 hidden lg:block" />

                </div>

            </section>
            <div className="lg:w-[50%] p-5 w-full ml-auto container  mt-10 md:mt-0 flex justify-center items-center flex-wrap">
                <div className="lg:w-[350px] w-full mb-4">
                    <img src="./img/lamp.png" />
                    <p className="mt-5 text-base">
                        We bring you the big ideas, and influential <br /> voices that are promoting the generational  <br /> change of the Northern Territory.
                    </p>
                </div>
                <div className="lg:w-[350px] w-full">
                    <img src="./img/voice.png" />
                    <p className="mt-5 text-base">
                        New Episodes Every Monday and Friday. Join us twice a week for valuable knowledge and perspectives that resonate with Territorians.
                    </p>
                </div>
                <div>

                </div>
            </div>
            {/* <!-- Top Episodes --> */}
            <section className="container mx-auto py-12 mt-40 p-4 lg:p-0">
                <h3 className="text-[80px]  text-center">TOP EPISODE FOR THIS WEEK</h3>
                <div className="flex justify-center flex-wrap gap-8 mt-8">
                    <div className="border item-top-episode flex lg:flex-col md:flex-row flex-wrap border-[var(--color-gray-border)] p-6 rounded-lg lg:w-[320px] w-full">
                        <img src="./img/episode.png" alt="Episode 1" width={280} height={153} className="rounded-lg mb-4" />
                        <div className="ml-3 lg:ml-0">
                        <p className="mt-2 text-base">Next Gen North Episode #31</p>
                        <h4 className="text-xl  my-2">Dr Sabtir Aulakh</h4>
                        <p className="mt-2 text-xs">54:00</p>
                        <img src="./img/play.png" alt="play" className="mt-3" width={39} height={39} />
                        </div>
                      
                    </div>
                    <div className="border item-top-episode flex lg:flex-col flex-row flex-wrap border-[var(--color-gray-border)] p-6 rounded-lg lg:w-[320px] w-full">
                        <img src="./img/episode.png" alt="Episode 1" width={280} height={153} className="rounded-lg mb-4" />
                        <div className="ml-3 lg:ml-0">
                        <p className="mt-2 text-base">Next Gen North Episode #31</p>
                        <h4 className="text-xl  my-2">Dr Sabtir Aulakh</h4>
                        <p className="mt-2 text-xs">54:00</p>
                        <img src="./img/play.png" alt="play" className="mt-3" width={39} height={39} />
                        </div>
                      
                    </div>
                    <div className="border item-top-episode flex lg:flex-col flex-row flex-wrap border-[var(--color-gray-border)] p-6 rounded-lg lg:w-[320px] w-full">
                        <img src="./img/episode.png" alt="Episode 1" width={280} height={153} className="rounded-lg mb-4" />
                        <div className="ml-3 lg:ml-0">
                        <p className="mt-2 text-base">Next Gen North Episode #31</p>
                        <h4 className="text-xl  my-2">Dr Sabtir Aulakh</h4>
                        <p className="mt-2 text-xs">54:00</p>
                        <img src="./img/play.png" alt="play" className="mt-3" width={39} height={39} />
                        </div>
                      
                    </div>
                </div>
            </section>

            {/* <!-- Podcast Categories --> */}
            <section className="container mx-auto py-12 px-4 lg:px-0" id="categories">
                <h3 className="text-[80px]  text-center">EXPLORE OUR PODCAST <br /> BY CATEGORIES</h3>
                <div className="flex justify-center space-x-4 mt-8">
                    <Tabs aria-label="Pills" variant="pills">
                        <Tabs.Item active title="All" className="px-4 py-2 bg-orange-500 rounded-lg">
                            <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-col md:grid-cols-2 gap-8 mt-8 items-start" id="all">
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="Business" className="px-4 py-2 bg-orange-500 rounded-lg">
                            <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-col gap-8 mt-8 items-start" id="Business">
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="Technology" className="px-4 py-2 bg-orange-500 rounded-lg">
                            <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-col gap-8 mt-8 items-start">


                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="Health & Wellness" className="px-4 py-2 bg-orange-500 rounded-lg">
                            <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-col gap-8 mt-8 items-start">


                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="Sustainability" className="px-4 py-2 bg-orange-500 rounded-lg">
                            <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-col gap-8 mt-8 items-start">

                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Tabs.Item>
                        <Tabs.Item title="More..." className="px-4 py-2 bg-orange-500 rounded-lg">
                            <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-col gap-8 mt-8 items-start">

                                <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                    <img src="./img/podcast.jpg" alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                    <div className="ml-4">
                                        <p className=" text-base">Next Gen North Episode #31</p>
                                        <p className="text-xl ">Dr Sabtir Aulakh</p>
                                        <p className="mt-2 text-xs">54:00</p>
                                        <div className="flex items-center mt-4">
                                        <img src="./img/play.png" alt="play"  width={30} height={30} />
                                        <p className="mx-2">Play Now</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </Tabs.Item>



                    </Tabs>
                </div>


            </section>

            {/* <!-- Supported By --> */}
            <section className="w-full mx-auto py-12 px-4 lg:px-0">
                <h3 className="text-[80px]  text-center">SUPORTED BY</h3>
                <div className=" mt-20 w-full">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={5} 
                        autoplay={{
                            delay: 2500,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                           
                            320: {
                                slidesPerView: 2,
                              },
                              768: {
                                slidesPerView: 5,
                              },
                          }}>
                        <SwiperSlide>  <img src="./img/logo-uni.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                        <SwiperSlide>  <img src="./img/brand-2.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                        <SwiperSlide>  <img src="./img/brand-3.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                        <SwiperSlide>  <img src="./img/logo-uni.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                        <SwiperSlide>  <img src="./img/brand-2.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                        <SwiperSlide>  <img src="./img/brand-3.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                        <SwiperSlide>  <img src="./img/logo-uni.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                        <SwiperSlide>  <img src="./img/brand-2.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                        <SwiperSlide>  <img src="./img/brand-3.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                        <SwiperSlide>  <img src="./img/logo-uni.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                        <SwiperSlide>  <img src="./img/brand-2.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                        <SwiperSlide>  <img src="./img/brand-3.png" width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>

                    </Swiper>


                </div>
            </section>
            <div className="w-ful relative mt-40" id="news">
                <img src="./img/left-shadow.png" alt="Podcast Host" className="absolute lg:block hidden top-[30%] left-0 rounded-[2rem] shodow-circle" />
                {/* <!-- News --> */}
                <section className="container mx-auto py-12 px-4 lg:px-0">
                    <h3 className="text-[80px]  text-start">News</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-col gap-8 mt-8">
                        <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start flex-wrap">
                            <img src="./img/news.jpg" alt="Episode 1" width={197} height={158} className="rounded-[10px] lg:w-[197px] w-full h-[158px]" />
                            <div className="lg:w-[50%] w-full ml-2">
                                <p className="text-xl ">From Darwin to the World</p>
                                <p className="mt-2 text-gray-400">Written by Wade Warren</p>
                                <span className="block mt-4 text-gray-400">4/9/2024</span>
                            </div>

                        </div>
                        <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start flex-wrap">
                            <img src="./img/news.jpg" alt="Episode 1" width={197} height={158} className="rounded-[10px] lg:w-[197px] w-full h-[158px]" />
                            <div className="lg:w-[50%] w-full ml-2">
                                <p className="text-xl ">From Darwin to the World</p>
                                <p className="mt-2 text-gray-400">Written by Wade Warren</p>
                                <span className="block mt-4 text-gray-400">4/9/2024</span>
                            </div>

                        </div>
                        <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start flex-wrap">
                            <img src="./img/news.jpg" alt="Episode 1" width={197} height={158} className="rounded-[10px] lg:w-[197px] w-full h-[158px]" />
                            <div className="lg:w-[50%] w-full ml-2">
                                <p className="text-xl ">From Darwin to the World</p>
                                <p className="mt-2 text-gray-400">Written by Wade Warren</p>
                                <span className="block mt-4 text-gray-400">4/9/2024</span>
                            </div>

                        </div>
                        <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start flex-wrap">
                            <img src="./img/news.jpg" alt="Episode 1" width={197} height={158} className="rounded-[10px] lg:w-[197px] w-full h-[158px]" />
                            <div className="lg:w-[50%] w-full ml-2">
                                <p className="text-xl ">From Darwin to the World</p>
                                <p className="mt-2 text-gray-400">Written by Wade Warren</p>
                                <span className="block mt-4 text-gray-400">4/9/2024</span>
                            </div>

                        </div>
                        <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start flex-wrap">
                            <img src="./img/news.jpg" alt="Episode 1" width={197} height={158} className="rounded-[10px] lg:w-[197px] w-full h-[158px]" />
                            <div className="lg:w-[50%] w-full ml-2">
                                <p className="text-xl ">From Darwin to the World</p>
                                <p className="mt-2 text-gray-400">Written by Wade Warren</p>
                                <span className="block mt-4 text-gray-400">4/9/2024</span>
                            </div>

                        </div>
                        <div className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start flex-wrap">
                            <img src="./img/news.jpg" alt="Episode 1" width={197} height={158} className="rounded-[10px] lg:w-[197px] w-full h-[158px]" />
                            <div className="lg:w-[50%] w-full ml-2">
                                <p className="text-xl ">From Darwin to the World</p>
                                <p className="mt-2 text-gray-400">Written by Wade Warren</p>
                                <span className="block mt-4 text-gray-400">4/9/2024</span>
                            </div>

                        </div>
                    </div>
                </section>

                {/* <!-- Whitepaper Download --> */}
                <section className="container mx-auto py-12  rounded-lg px-4 lg:px-0 relative" id="whitepaper">
                    <div className="flex flex-col lg:flex-row justify-between items-start">
                        <div className="lg:w-[50%] mb-4">
                            <h3 className="text-[80px] ">UNLOCK THE FUTURE OF THE <br /> NORTHERN TERRITORY</h3>
                            <p className="mt-4 text-base">
                                Curious about how the Northern Territory is fostering the next generation of leaders, innovators, and changemakers? Our NextGen North Whitepaper dives deep into the vision, mission, and strategic goals behind the podcast that’s shaping the future of the NT. This comprehensive guide offers insights into the local entrepreneurial ecosystem, highlights key projects, and outlines how youth-driven innovation is creating lasting impact across the region.
                            </p>
                            <p className="text-base">
                                What You’ll Discover Inside:
                            </p>
                            <ul className="list-disc mt-4 ml-5 text-base">
                                <li> Our mission to empower and inspire the next generation</li>
                                <li>  Key interviews and success stories from local innovators</li>
                                <li> Strategic partnerships and sponsorship opportunities</li>
                                <li>  Ways to get involved and help shape the NT's future</li>
                            </ul>
                            <p className="mt-4 text-base">
                                Whether you're an entrepreneur, student, or community leader, the NextGen North Whitepaper offers valuable insights and actionable steps to drive positive change. Be part of the conversation, and learn how we can build a thriving, sustainable future for the Northern Territory together.
                            </p>
                        </div>
                        <form className="mt-8 md:mt-0 lg:w-[30%] border border-[var(--color-gray-border)] p-5 rounded-xl">
                            <p className=" text-[20px]">Download the Whitepaper Now</p>
                            <p className="text-base text-gray-400">
                                To access your free copy of the NextGen North Whitepaper, simply fill out the form below:
                            </p>
                            <label className="text-gray-400">Full Name</label>
                            <input type="text" className="block w-full p-2 mt-2 bg-[#26262B] rounded  " />
                            <label className="text-gray-400">Work Email</label>
                            <input type="email" className="block w-full p-2 mt-2 bg-[#26262B] rounded " />
                            <label className="text-gray-400">Phone Number</label>
                            <input type="tel" className="block w-full p-2 mt-2 bg-[#26262B] rounded " />
                            <label className="text-gray-400">Company/Organization (Optional)</label>
                            <input type="text" className="block w-full p-2 mt-2 bg-[#26262B] rounded " />
                            <label className="text-gray-400">Job Title</label>
                            <input type="text" className="block w-full p-2 mt-2 bg-[#26262B] rounded" />
                            <button className="mt-4 w-full px-6 py-3 bg-orange-500 text-white  rounded-lg">Download Now</button>
                        </form>
                    </div>
                </section>

            </div>




        </>



    );
}
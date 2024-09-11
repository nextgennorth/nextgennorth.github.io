"use client";
import { Tabs } from "flowbite-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { indexCopy } from "@/app/copy";
import 'swiper/css';
import { COMPILER_INDEXES } from "next/dist/shared/lib/constants";
export default function Sections() {
    return (
        <>

            <img src="./img/shadow-circle.png" alt="Podcast Host" className="absolute bottom-0 right-0 rounded-[2rem] shadow-lg lg:block hidden" />

            <section className="container mx-auto lg:py-16 flex flex-col-reverse lg:flex-row  justify-between items-center">
                <div className="p-4">
                    <p className="text-xl">{indexCopy.heroSection.tilte}</p>
                    <h2 className="lg:text-[120px] text-[60px]" dangerouslySetInnerHTML={{ __html: indexCopy.heroSection.slogan }} style={{lineHeight:"122px"}}></h2>
                    <p className="mt-4 text-lg">{indexCopy.heroSection.subtitle}</p>
                    <button className="mt-6 px-6 py-3 flex items-center border border-[var(--color-orange-custom)] text-white  rounded-lg">
                        {indexCopy.heroSection.startButton.text}
                        <img src="./img/angle-circle-right.png" alt="arrow" className="ml-2 -mr-1 w-4 h-4" />
                    </button>
                </div>
                <div className="mt-10 md:mt-0 relative flex justify-center items-start lg:w-[650px] lg:h-[550px] h-auto w-full flex-wrap" id="main-img-hero">
                    <img src="./img/user-hosted.jpg" alt="Podcast Host" className="rounded-[2rem] shadow-lg mr-5 hidden lg:block" />
                    <img src="./img/hero-img.jpg" alt="Podcast Host" className="rounded-[2rem] shadow-lg w-[90%] mx-auto lg:mx-0 lg:w-auto" />
                    <img src="./img/shadow-img-main.png" alt="Podcast Host" className="rounded-[2rem] shadow-lg absolute top-[100px] z-[-1] lg:right-[-50px] right-0 hidden lg:block" />

                </div>

            </section>
            <div className="lg:w-[60%] p-5 w-full ml-auto container  mt-10 md:mt-0 flex justify-center items-right flex-wrap">
                <div className="lg:w-[350px] w-full mb-4">
                    <img src="./img/lamp.png" />
                    <p className="mt-5 text-base" dangerouslySetInnerHTML={{ __html: indexCopy.heroSection.description1 }}></p>
                </div>
                <div className="lg:w-[350px] w-full">
                    <img src="./img/voice.png" />
                    <p className="mt-5 text-base" dangerouslySetInnerHTML={{ __html: indexCopy.heroSection.description1 }}></p>
                </div>
                <div>

                </div>
            </div>
            {/* <!-- Top Episodes --> */}
            <section className="container mx-auto py-12 mt-40 p-4 lg:p-0">
                <h3 className="text-[80px]  text-center">{indexCopy.top_episode.title}</h3>
                <div className="flex justify-center flex-wrap gap-8 mt-8">

                    {
                        indexCopy.top_episode.items.map((item, index) => (
                            <div key={index} className="border item-top-episode flex lg:flex-col md:flex-row flex-wrap border-[var(--color-gray-border)] p-6 rounded-lg lg:w-[320px] w-full">
                                <img src={item.image} alt={item.title} width={280} height={153} className="rounded-lg mb-4" />
                                <div className="ml-3 lg:ml-0">
                                    <p className="mt-2 text-base">{item.title}</p>
                                    <p className="text-xl  my-2">{item.creator}</p>
                                    <p className="mt-2 text-xs">{item.time}</p>
                                    <img src="./img/play.png" alt="play" className="mt-3" width={39} height={39} />
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>

            {/* <!-- Podcast Categories --> */}
            <section className="container mx-auto py-12 px-4 lg:px-0" id="categories">
                <h3 className="text-[80px]  text-center" dangerouslySetInnerHTML={{ __html: indexCopy.podcasts.title }} style={{ lineHeight: "75px" }}></h3>
                <div className="flex justify-center space-x-4 mt-8">
                    <Tabs aria-label="Pills" variant="pills">
                        {
                            indexCopy.podcasts.categories.map((item, index) => (
                                <Tabs.Item active key={index} title={item} className="px-4 py-2 bg-orange-500 rounded-lg">
                                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-col md:grid-cols-2 gap-8 mt-8 items-start" id="all">
                                        {
                                            indexCopy.podcasts.contents.filter(subitem => subitem.categories.includes(item)).map((subitem, idx) => (
                                                <div key={idx} className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item">
                                                    <img src={subitem.Image} alt="Episode 1" width={125} height={125} className="rounded-xl w-[125px] h-[125px]" />
                                                    <div className="ml-4">
                                                        <p className="text-base">{subitem.title}</p>
                                                        <p className="text-xl ">{subitem.creator}</p>
                                                        <p className="mt-2 text-xs">{subitem.time}</p>
                                                        <div className="flex items-center mt-4">
                                                            <img src="./img/play.png" alt="play" width={30} height={30} />
                                                            <p className="mx-2">Play Now</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Tabs.Item>
                            ))
                        }
                    </Tabs>

                </div>


            </section>

            {/* <!-- Supported By --> */}
            <section className="w-full mx-auto py-12 px-4 lg:px-0">
                <h3 className="text-[80px]  text-center">{indexCopy.suported_by.title}</h3>
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

                        {
                            indexCopy.suported_by.items.map((item, index) => (
                                <SwiperSlide key={index}>  <img src={item.image} width={200} height={200} alt="Spotify" className="object-contain" /></SwiperSlide>
                            ))
                        }
                    </Swiper>


                </div>
            </section>
            <div className="w-ful relative mt-40" id="news">
                <img src="./img/left-shadow.png" alt="Podcast Host" className="absolute lg:block hidden top-[30%] left-0 rounded-[2rem] shodow-circle" />
                {/* <!-- News --> */}
                <section className="container mx-auto py-12 px-4 lg:px-0">
                    <h3 className="text-[80px]  text-start">{indexCopy.news.title}</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-col gap-8 mt-8">

                        {
                            indexCopy.news.items.map((item, index) => (
                                <div key={index} className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start flex-wrap">
                                    <img src={item.image} alt="Episode 1" width={197} height={158} className="rounded-[10px] lg:w-[197px] w-full h-[158px]" />
                                    <div className="lg:w-[50%] w-full ml-2">
                                        <p className="text-xl ">{item.title}</p>
                                        <p className="mt-2 text-gray-400">Written by <strong>{item.writer}</strong></p>
                                        <span className="block mt-4 text-gray-400">{item.date}</span>
                                    </div>
                                </div>
                            ))
                        }



                    </div>
                </section>

                {/* <!-- Whitepaper Download --> */}
                <section className="container mx-auto py-12  rounded-lg px-4 lg:px-0 relative" id="whitepaper">
                    <div className="flex flex-col lg:flex-row justify-between items-start">
                        <div className="lg:w-[50%] mb-4">
                            <h3 className="text-[80px] " dangerouslySetInnerHTML={{ __html: indexCopy.PioneerNT.title }} style={{ lineHeight: "75px" }}></h3>

                            <p className="mt-4 text-base" dangerouslySetInnerHTML={{ __html: indexCopy.PioneerNT.description_1 }}>
                            </p>
                            <div dangerouslySetInnerHTML={{ __html: indexCopy.PioneerNT.description_2 }}></div>
                            <p className="mt-4 text-base" dangerouslySetInnerHTML={{ __html: indexCopy.PioneerNT.description_3 }}>
                            </p>

                        </div>
                        <form className="mt-8 md:mt-0 lg:w-[30%] border border-[var(--color-gray-border)] p-5 rounded-xl">
                            <p className=" text-[20px]">{indexCopy.PioneerNT.witepaper}</p>
                            <p className="text-base text-gray-400">{indexCopy.PioneerNT.description}</p>
                            <label className="text-gray-400">{indexCopy.PioneerNT.full_name}</label>
                            <input type="text" className="block w-full p-2 mt-2 bg-[#26262B] rounded  " />
                            <label className="text-gray-400">{indexCopy.PioneerNT.work_email}</label>
                            <input type="email" className="block w-full p-2 mt-2 bg-[#26262B] rounded " />
                            <label className="text-gray-400">{indexCopy.PioneerNT.phone_number}</label>
                            <input type="tel" className="block w-full p-2 mt-2 bg-[#26262B] rounded " />
                            <label className="text-gray-400">{indexCopy.PioneerNT.company}</label>
                            <input type="text" className="block w-full p-2 mt-2 bg-[#26262B] rounded " />
                            <label className="text-gray-400">{indexCopy.PioneerNT.job_title}</label>
                            <input type="text" className="block w-full p-2 mt-2 bg-[#26262B] rounded" />
                            <button className="mt-4 w-full px-6 py-3 bg-orange-500 text-white  rounded-lg">{indexCopy.PioneerNT.button.text}</button>
                        </form>
                    </div>
                </section>

            </div>




        </>



    );
}
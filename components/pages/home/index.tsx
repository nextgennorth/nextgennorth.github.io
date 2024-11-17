"use client";

import { Tabs } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import content from "@/components/pages/home/index.json";
import articleConent from "@/components/pages/article/index.json";

export default function Component() {
  const article = articleConent.articles[0];

  return (
    <main>
      <img
        src="/images/shadow-circle.png"
        alt="Podcast Host"
        className="header-shadow absolute right-0 rounded-[2rem] shadow-lg lg:block hidden"
      />
      <section
        className="container mx-auto lg:py-16 flex flex-col-reverse lg:flex-row  justify-between items-center"
        id="home"
      >
        <div className="p-4 w-full lg:w-[50%]">
          <p className="text-xl">{content.heroSection.title}</p>
          <h2
            className="lg:text-[120px] text-[60px]"
            dangerouslySetInnerHTML={{ __html: content.heroSection.slogan }}
            style={{ lineHeight: "122px" }}
          ></h2>
          <p className="mt-4 text-lg">{content.heroSection.subtitle}</p>
          <Link
            href={content.heroSection.startButton.url}
            target={content.heroSection.startButton.target}
            className="mt-6 px-6 py-3 float-start flex items-center border border-[var(--color-orange-custom)] text-white  rounded-lg"
          >
            {content.heroSection.startButton.text}
            <img
              src="/images/angle-circle-right.png"
              alt="arrow"
              className="ml-2 -mr-1 w-4 h-4"
            />
          </Link>
        </div>
        <div
          className="mt-10 md:mt-0 relative flex justify-center items-start lg:w-[650px] lg:h-[550px] h-auto w-full flex-wrap"
          id="main-img-hero"
        >
          <img
            src="/images/user-hosted.png"
            alt="Podcast Host"
            className="rounded-[2rem] shadow-lg mr-5 hidden lg:block"
          />
          <img
            src="/images/hero-img.png"
            width={364}
            height={364}
            alt="Podcast Host"
            className="rounded-[2rem] shadow-lg w-[364px] h-[364px] mx-auto lg:mx-0 lg:w-auto"
          />
          <img
            src="/images/shadow-img-main.png"
            alt="Podcast Host"
            className="rounded-[2rem] w-[364px] h-[364px] shadow-lg absolute top-[50px] z-[-1] lg:right-[-50px] right-0 hidden lg:block"
          />
        </div>
      </section>
      <div className="lg:w-[60%] p-5 w-full ml-auto container  mt-10 md:mt-0 flex justify-center items-right flex-wrap">
        <div className="lg:w-[350px] w-full mb-4">
          <img src="/images/lamp.png" />
          <p
            className="mt-5 text-base"
            dangerouslySetInnerHTML={{
              __html: content.heroSection.description1,
            }}
          ></p>
        </div>
        <div className="lg:w-[350px] w-full">
          <img src="/images/voice.png" />
          <p
            className="mt-5 text-base"
            dangerouslySetInnerHTML={{
              __html: content.heroSection.description2,
            }}
          ></p>
        </div>
        <div></div>
      </div>
      {/* <!-- Top Episodes --> */}
      <section className="container mx-auto py-12 mt-40 p-4 lg:p-0">
        <h3 className="text-[80px]  text-center">
          {content.top_episode.title}
        </h3>
        <div className="flex justify-center flex-wrap gap-8 mt-8">
          {content.top_episode.items.map((item, index) => (
            <div
              key={index}
              className="border item-top-episode flex lg:flex-col md:flex-row flex-wrap border-[var(--color-gray-border)] p-6 rounded-lg lg:w-[320px] w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                width={280}
                height={153}
                className="rounded-lg mb-4 w-[100%] lg:w-[280px] h-[200px] lg:h-[153px] object-cover"
              />
              <div className="ml-3 lg:ml-0">
                <p className="mt-2 text-base">{item.title}</p>
                <p className="text-xl  my-2">{item.creator}</p>
                <p className="mt-2 text-xs">{item.time}</p>
                <img
                  src="/images/play.png"
                  alt="play"
                  className="mt-3"
                  width={39}
                  height={39}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <!-- Podcast Categories --> */}
      <section
        className="container mx-auto py-12 px-4 lg:px-0 mt-5"
        id="categories"
      >
        <h3
          className="text-[80px]  text-center"
          dangerouslySetInnerHTML={{ __html: content.podcasts.title }}
          style={{ lineHeight: "75px", marginTop: "150px" }}
        ></h3>
        <div className="flex justify-center space-x-4 mt-8">
          <Tabs aria-label="Pills" variant="pills">
            {content.podcasts.categories.map((item, index) => (
              <Tabs.Item
                active
                key={index}
                title={item}
                className="px-4 py-2 bg-orange-500 rounded-lg"
              >
                <div
                  className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-col md:grid-cols-2 gap-8 mt-8 items-start"
                  id="all"
                >
                  {content.podcasts.contents
                    .filter((subitem) => subitem.categories.includes(item))
                    .map((subitem, index) => (
                      <div
                        key={index}
                        className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start explore-item"
                      >
                        <img
                          src={subitem.Image}
                          alt="Episode 1"
                          width={125}
                          height={125}
                          className="rounded-xl w-[125px] h-[125px]"
                        />
                        <div className="ml-4">
                          <p className="text-base">{subitem.title}</p>
                          <p className="text-xl ">{subitem.creator}</p>
                          <p className="mt-2 text-xs">{subitem.time}</p>
                          <div className="flex items-center mt-4">
                            <img
                              src="/images/play.png"
                              alt="play"
                              width={30}
                              height={30}
                            />
                            <p className="mx-2">Play Now</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tabs.Item>
            ))}
          </Tabs>
        </div>
      </section>

      {/* <!-- Supported By --> */}
      <section className="w-full mx-auto py-12 px-4 lg:px-0">
        <h3 className="text-[80px]  text-center">
          {content.suported_by.title}
        </h3>
        <div className=" mt-20 w-full">
          <div className="slider-container">
            <ul className="slider">
              {content.suported_by.items.map((item, index) => (
                <li
                  className="slider__slide flex justify-center p-3"
                  key={index}
                >
                  <img
                    src={item.image}
                    alt="Spotify"
                    className="object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* <!-- article --> */}
      <section className="w-ful relative mt-40" id="article">
        <div className="container mx-auto py-12 px-4">
          <h3 className="text-[80px] text-start text-uppercase">ARTICLES</h3>

          <div className="article-first">
            {article && (
              <a href={"article/" + article.id}>
                <div className="wrapper">
                  <Image
                    width={555}
                    height={429}
                    src={article.image_title}
                    alt={article.title}
                    className="image"
                  />
                  <span className="title">{article.title}</span>
                  <span className="author">
                    <span className="caption">Written by </span>
                    {article.written_by}
                  </span>
                  <span className="date">{article.date}</span>
                </div>
              </a>
            )}
          </div>

          <div className="article">
            {articleConent.articles
              .filter((item) => item.id != 1)
              .map((item, index) => (
                <div className="wrapper" key={index}>
                  <a href={"article/" + item.id}>
                    <Image
                      width={544}
                      height={429}
                      src={item.image_title}
                      alt=""
                      className="image"
                    />
                  </a>
                  <a href={"article/" + item.id}>
                    <span className="title">{item.title}</span>
                  </a>
                  <span className="author">
                    <span className="caption">Written by </span>
                    {item.written_by}
                  </span>
                  <span className="date">{item.date}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      <div className="w-ful relative mt-40" id="news">
        <img
          src="/images/left-shadow.png"
          alt="Podcast Host"
          className="absolute lg:block hidden top-[30%] left-0 rounded-[2rem] shodow-circle"
        />
        {/* <!-- News --> */}
        <section className="container mx-auto py-12 px-4 lg:px-0">
          <h3 className="text-[80px]  text-start">{content.news.title}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:grid-col gap-8 mt-8">
            {content.news.items.map((item, index) => (
              <div
                key={index}
                className="border border-[var(--color-gray-border)] p-3 rounded-xl flex items-start"
              >
                <img
                  src={item.image}
                  alt="Episode 1"
                  width={197}
                  height={158}
                  className="rounded-[10px] w-[197px] h-[158px]"
                />
                <div className="w-[50%] ml-2">
                  <p className="text-[18px] overflow-hidden h-[85px]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-gray-400">
                    Written by <strong>{item.writer}</strong>
                  </p>
                  <span className="block mt-4 text-gray-400">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <!-- Whitepaper Download --> */}
        <section
          className="container mx-auto py-12  rounded-lg px-4 lg:px-0 relative"
          id="whitepaper"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="lg:w-[50%] mb-4">
              <h3
                className="text-[80px] "
                dangerouslySetInnerHTML={{
                  __html: content.PioneerNT.title,
                }}
                style={{ lineHeight: "75px" }}
              ></h3>
              <p
                className="mt-4 text-base text-[#EEEEF0]"
                dangerouslySetInnerHTML={{
                  __html: content.PioneerNT.description_1,
                }}
              ></p>
              <p className="text-base text-[#EEEEF0]">
                {content.PioneerNT.description_2.title}
              </p>
              <ul className="list-disc mt-4 ml-5 text-base text-[#EEEEF0]">
                {content.PioneerNT.description_2.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p
                className="mt-4 text-base text-[#EEEEF0]"
                dangerouslySetInnerHTML={{
                  __html: content.PioneerNT.description_3,
                }}
              ></p>
            </div>
            <form className="mt-8 md:mt-0 lg:w-[30%] border border-[var(--color-gray-border)] p-5 rounded-xl">
              <p className=" text-[20px] text-[#EEEEF0]">
                {content.PioneerNT.whitepaper}
              </p>
              <p className="text-base text-[#EEEEF0] my-5">
                {content.PioneerNT.description}
              </p>
              <label className="text-[#EEEEF0]">
                {content.PioneerNT.full_name}
              </label>
              <input
                type="text"
                className="block w-full p-2 mt-2 bg-[#26262B] rounded  "
              />
              <label className="text-[#EEEEF0]">
                {content.PioneerNT.work_email}
              </label>
              <input
                type="email"
                className="block w-full p-2 mt-2 bg-[#26262B] rounded "
              />
              <label className="text-[#EEEEF0]">
                {content.PioneerNT.phone_number}
              </label>
              <input
                type="tel"
                className="block w-full p-2 mt-2 bg-[#26262B] rounded "
              />
              <label className="text-[#EEEEF0]">
                {content.PioneerNT.company}
              </label>
              <input
                type="text"
                className="block w-full p-2 mt-2 bg-[#26262B] rounded "
              />
              <label className="text-[#EEEEF0]">
                {content.PioneerNT.job_title}
              </label>
              <input
                type="text"
                className="block w-full p-2 mt-2 bg-[#26262B] rounded"
              />
              <button className="mt-4 w-full px-6 py-3 bg-orange-500 text-white  rounded-lg">
                {content.PioneerNT.button.text}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

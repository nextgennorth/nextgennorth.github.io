"use client";

import { useState } from "react";
import { Drawer } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import content from "@/components/layouts/default/index.json";

interface InitialState {
  opened: boolean;
}

export default function Component({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState: InitialState = { opened: false };
  const [state, setState] = useState(initialState);
  const { opened } = state;

  const handleMenu = () => {
    setState((prevState) => ({ ...prevState, opened: !prevState.opened }));
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <header>
          <nav className="py-2.5 ">
            <div className="flex flex-wrap justify-between items-center mx-auto container px-6 lg:px-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  width={150}
                  height={150}
                  className="mr-3  sm:h-9 object-contain !w-[90px] !h-[90px]"
                  alt="Flowbite Logo"
                />
              </Link>
              <div className="lg:flex items-center lg:order-2 hidden">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0">
                  {content.socialMedia.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.path}
                        className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                        aria-current="page"
                      >
                        <Image
                          src={item.icon}
                          width={24}
                          height={24}
                          className="mr-3 !w-[24px] !h-[24px] sm:h-9 object-contain"
                          alt={item.title}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={handleMenu}
                type="button"
                className="block lg:hidden mr-3"
              >
                <img src="/images/bars-solid.svg" width={30} />
              </button>
              <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  {content.navbar.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.path}
                        className="block text-2xl py-2 mx-8 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                        aria-current="page"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
          <Drawer
            open={opened}
            onClose={handleMenu}
            position="right"
            className="bg-black"
          >
            <Drawer.Items>
              <div className="w-full flex justify-between border-b">
                <h3 className="text-2xl">Menu</h3>
                <button
                  onClick={handleMenu}
                  type="button"
                  className="block lg:hidden mr-3 "
                >
                  X
                </button>
              </div>

              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {content.navbar.map((item, index) => (
                  <li key={index}>
                    <Link
                      onClick={handleMenu}
                      href={item.path}
                      className="block text-2xl py-2 pr-4 pl-3  border-b rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      aria-current="page"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex mt-4 font-medium flex-row lg:mt-0">
                {content.socialMedia.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.path}
                      className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                      aria-current="page"
                    >
                      <Image
                        src={item.icon}
                        width={24}
                        height={24}
                        className="mr-3 !w-[24px] !h-[24px] sm:h-9 object-contain"
                        alt={item.title}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </Drawer.Items>
          </Drawer>
        </header>
        {children}
        <footer className="">
          <div className="mx-auto w-full container border-t border-[var(--color-gray-border)] p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    width={150}
                    height={200}
                    className=" me-3 object-contain"
                    alt="FlowBite Logo"
                  />
                </Link>
              </div>
              <div
                className="flex justify-between items-start w-full lg:pl-20 flex-wrap"
                id="mobile-menu-2"
              >
                <div>
                  <h2 className="mb-6 text-[30px]">
                    {content.title_website_map}
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    {content.website_map.map((item, index) => (
                      <li key={index} className="mb-4">
                        <Link
                          href={item.path}
                          className="hover:underline text-[20px] text-[#D9D9DE]"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h2 className="mb-6 text-[30px]">
                    {content.title_contactus}
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <span className=" text-[20px] text-[#D9D9DE]">
                        {content["contactus"].email}
                      </span>
                    </li>
                    <li>
                      <span className="text-[20px] text-[#D9D9DE]">
                        {content["contactus"].mobile}
                      </span>
                    </li>
                    <li>
                      <span className="text-[20px] text-[#D9D9DE]">
                        {content["contactus"].address}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium flex">
                    {content.socialMedia.map((item, index) => (
                      <li key={index} className="mb-4">
                        <Link href={item.path} className="hover:underline">
                          <Image
                            src={item.icon}
                            width={24}
                            height={24}
                            className="mr-3 !w-[24px] !h-[24px] sm:h-9 object-contain"
                            alt={item.title}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

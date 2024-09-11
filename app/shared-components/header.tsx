"use client";
import Image from "next/image";
import { headerCopy } from "../copy/header";
import Link from "next/link";
import { Drawer } from "flowbite-react";
import { useState } from "react";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);
    return (
        <header>
            <nav className="py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto container">
                    <Link href="/" className="flex items-center">
                        <Image src="/img/logo.png" width={150} height={150} className="mr-3  sm:h-9 object-contain !w-[90px] !h-[90px]" alt="Flowbite Logo" />
                    </Link>
                    <div className="lg:flex items-center lg:order-2 hidden">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:mt-0">
                            {headerCopy.socialMedia.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.path} className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                                        <Image src={item.icon} width={24} height={24} className="mr-3 !w-[24px] !h-[24px] sm:h-9 object-contain" alt={item.title} />
                                    </Link>
                                </li>
                            ))}

                        </ul>

                    </div>
                    <button onClick={() => setIsOpen(true)} type="button" className="block lg:hidden mr-3">
                        <img src="./img/bars-solid.svg" width={30} />

                    </button>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {headerCopy.navbar.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.path} className="block text-2xl py-2 mx-8 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>
            <Drawer open={isOpen} onClose={handleClose} position="right" className="bg-black">

                <Drawer.Items>
                    <div className="w-full flex justify-between border-b">
                        <h3 className="text-2xl">Menu</h3>
                        <button onClick={handleClose} type="button" className="block lg:hidden mr-3 ">
                            X
                        </button>
                    </div>

                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        {headerCopy.navbar.map((item, index) => (
                            <li key={index}>
                                <Link onClick={handleClose} href={item.path} className="block text-2xl py-2 pr-4 pl-3  border-b rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                                    {item.title}
                                </Link>
                            </li>
                        ))}

                    </ul>
                    <ul className="flex mt-4 font-medium flex-row lg:mt-0">
                        {headerCopy.socialMedia.map((item, index) => (
                            <li key={index}>
                                <Link href={item.path} className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">
                                    <Image src={item.icon} width={24} height={24} className="mr-3 !w-[24px] !h-[24px] sm:h-9 object-contain" alt={item.title} />
                                </Link>
                            </li>
                        ))}

                    </ul>
                </Drawer.Items>
            </Drawer>
        </header>





    );
}
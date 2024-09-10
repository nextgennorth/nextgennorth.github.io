import Image from "next/image";
import { footer } from "../copy/footer";
import Link from "next/link";

export default function Footer() {
    return (


        <footer className="">
            <div className="mx-auto w-full container border-t border-[var(--color-gray-border)] p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <Image src="/img/logo.png" width={150} height={200} className=" me-3 object-contain" alt="FlowBite Logo" />
                        </Link>
                    </div>
                    <div className="flex justify-between items-start w-full lg:pl-20 flex-wrap" id="mobile-menu-2">
                        <div>
                            <h2 className="mb-6 text-[30px]">Website map</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                {footer["website-map"].map((item, index) => (    
                                    <li key={index} className="mb-4">
                                        <Link href={item.path} className="hover:underline text-[20px]">{item.title}</Link>
                                    </li>
                                ))}
                              
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h2 className="mb-6 text-[30px]">CONTACT US</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <span className=" text-[20px]">{footer["contactus"].email}</span>
                                </li>
                                <li>
                                    <span className="text-[20px]">{footer["contactus"].mobile}</span>
                                </li>
                                <li>
                                    <span className="text-[20px]">{footer["contactus"].address}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium flex">
                                {footer.socialMedia.map((item, index) => (
                                    <li key={index} className="mb-4">
                                        <Link href={item.path} className="hover:underline" >
                                            <Image src={item.icon} width={24} height={24} className="mr-3 !w-[24px] !h-[24px] sm:h-9 object-contain" alt={item.title} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
             
            </div>
        </footer>

    );
}
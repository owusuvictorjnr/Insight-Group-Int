import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineMenu,
} from 'react-icons/ai';
import { TfiLinkedin } from 'react-icons/tfi';
import { FaFacebookF } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-veryLightGray h-36 items-center flex top-0 z-20 left-0 right-0 fixed border shadow-lg  ">
      <div className="flex justify-evenly  w-full">
        <div className="flex gap-5">
          <Link href={'/'}>
            <Image
              src="/logo/logo1.jpg"
              alt="logo1"
              width={'50'}
              height={'50'}
              className="rounded-full lg:h-28 lg:w-28 md:h-20 md:w-20 h-12 w-12 "
            />
          </Link>

          <p className="capitalize flex items-center lg:text-3xl md:text-2xl text-base text-[#1d3557]">
            <Link href={'/'}>insight group int.</Link>
          </p>
        </div>

        {/*Large screen navbar*/}
        <div className="md:flex hidden">
          <div className="flex items-center gap-10 lg:gap-20 capitalize text-2xl">
            <Link href={'/'} className="">
              <ul className="cursor-pointer py-2 px-2  hover:bg-brightRedLight rounded-xl hover:text-brightRedSupLight text-white bg-brightRed hover:underline duration-500  md:block">
                <li>home</li>
              </ul>
            </Link>

            <Link href={'/about'}>
              <ul className="cursor-pointer py-2 px-2  hover:bg-brightRedLight rounded-xl hover:text-brightRedSupLight text-white bg-brightRed hover:underline duration-500  md:block">
                <li>about</li>
              </ul>
            </Link>

            <Link href={'/contact'}>
              <ul className="cursor-pointer py-2 px-2  hover:bg-brightRedLight rounded-xl hover:text-brightRedSupLight text-white bg-brightRed hover:underline duration-500  md:block  ">
                <li>contact</li>
              </ul>
            </Link>

            <Link href={'/sponsors'}>
              <ul className="cursor-pointer py-2 px-2  hover:bg-brightRedLight rounded-xl hover:text-brightRedSupLight text-white bg-brightRed hover:underline duration-500  md:block ">
                <li>sponsors</li>
              </ul>
            </Link>
          </div>
        </div>
        {/*Small screen navbar*/}
        <div onClick={handleNav} className="flex items-center md:hidden">
          <AiOutlineMenu size={25} className="" />
        </div>
      </div>

      <div
        className={
          nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-veryLightGray p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/logo/logo1.jpg"
                alt="side logo"
                width={50}
                height={50}
                className="rounded-full h-16 w-16"
              />
              <div>
                <h1 className="capitalize text-sm">insight group int.</h1>
              </div>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 container mx-auto flex justify-center">
              <p className="w-[85%] md:w-[90%] py-4 text-sm">
                Power modern applications with enriched
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col text-brightRed text-sm">
            <ul className="capitalize">
              <Link href={'/home'}>
                <li className="py-4 ">home</li>
              </Link>

              <Link href="/about">
                <li className="py-4">about</li>
              </Link>

              <Link href="/contact">
                <li className="py-4">contact</li>
              </Link>

              <Link href="/sponsor">
                <li className="py-4">sponsor</li>
              </Link>
            </ul>
          </div>
          <div className="pt-40 flex justify-center container mx-auto">
            <p className="capitalize tracking-wide text-darkBlue text-1xl underline">
              our social media handle
            </p>
          </div>

          <div className="flex justify-center container mx-auto gap-20 pt-10 text-darkGrayishBlue">
            <Link
              href="/"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 "
            >
              <AiOutlineInstagram size={30} />
            </Link>

            <Link
              href="/"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 "
            >
              <TfiLinkedin size={25} />
            </Link>

            <Link
              href="/"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 "
            >
              <FaFacebookF size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

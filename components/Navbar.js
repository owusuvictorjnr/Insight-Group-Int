import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-[#f5ebe0] h-36 border-b  fixed items-center flex  top-0 z-20 left-0 right-0 ">
      <div className="flex justify-evenly  w-full">
        <div className="flex gap-5">
          <Link href={'/'}>
            <Image
              src="/logo/logo1.jpg"
              alt="logo1"
              width="100"
              height="100"
              className="rounded-full "
            />
          </Link>

          <p className="capitalize flex items-center text-3xl text-[#1d3557]">
            <Link href={'/'}>insight group int.</Link>
          </p>
        </div>

        <div className="flex items-center gap-10 lg:gap-20 capitalize text-2xl">
          <Link href={'/'} className="">
            <ul className="cursor-pointer py-2 px-2 hover:border-[#1d3557] hover:bg-[#d6ccc2] rounded-xl hover:text-[#bc6c25] text-[#ffb703] hover:underline duration-500  ">
              <li>home</li>
            </ul>
          </Link>

          <Link href={'/about'}>
            <ul className="cursor-pointer py-2 px-2 hover:border-[#1d3557] hover:bg-[#d6ccc2] rounded-xl hover:text-[#bc6c25] text-[#ffb703] hover:underline duration-500  ">
              <li>about</li>
            </ul>
          </Link>

          <Link href={'/contact'}>
            <ul className="cursor-pointer py-2 px-2 hover:border-[#1d3557] hover:bg-[#d6ccc2] rounded-xl hover:text-[#bc6c25] text-[#ffb703] hover:underline duration-500  ">
              <li>contact</li>
            </ul>
          </Link>

          <Link href={'/sponsors'}>
            <ul className="cursor-pointer py-2 px-2 hover:border-[#1d3557] hover:bg-[#d6ccc2] rounded-xl hover:text-[#bc6c25] text-[#ffb703] hover:underline duration-500  ">
              <li>sponsors</li>
            </ul>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

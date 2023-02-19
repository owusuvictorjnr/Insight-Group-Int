import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-veryLightGray h-36 items-center flex top-0 z-20 left-0 right-0 fixed border shadow-lg  ">
      <div className="flex justify-evenly  w-full">
        <div className="flex gap-5">
          <Link href={'/'}>
            <Image
              src="/logo/logo1.jpg"
              alt="logo1"
              width={'100'}
              height={'100'}
              className="rounded-full "
            />
          </Link>

          <p className="capitalize flex items-center text-3xl text-[#1d3557]">
            <Link href={'/'}>insight group int.</Link>
          </p>
        </div>

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
      </div>
    </div>
  );
};

export default Navbar;

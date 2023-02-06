import Link from 'next/link';
import React from 'react';
import InstaFeed from './InstaFeed';
import { FiSend } from 'react-icons/fi';
import { SlSocialInstagram } from 'react-icons/sl';
import { TfiLinkedin } from 'react-icons/tfi';
import { FaFacebookF } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const Footer = () => {
  return (
    <>
      <div className="bg-[#003049] min-h-[30rem]  ">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 md:gap-[5rem] lg:gap-[15rem] pt-[10rem] md:mx-[5rem] lg:mx[10rem] text-[#ffffff]   pb-5">
          <div className="">
            <h1 className="underline font-bold  text-3xl capitalize flex justify-center">
              about agency
            </h1>
            <p className="pt-10 text-[#727374]  pb-10  px-2 mx-2">
              During his time in the Spanish capital, Modric has won a plethora
              of trophies, which has included five Champions League titles. In
              2018, he achieved the most prestigious
            </p>
          </div>

          <div>
            <h1 className="underline font-bold  text-3xl capitalize flex justify-center">
              navigation link
            </h1>
            <ul className="capitalize  flex flex-col gap-4  pb-10 text-center">
              <li>
                <Link href="/">
                  <h4 className="pt-5 text-[#727374]">home</h4>
                </Link>
              </li>

              <li>
                <Link href="/about">
                  <h4 className=" text-[#727374]">about</h4>
                </Link>
              </li>

              <li>
                <Link href="contact">
                  <h4 className=" text-[#727374]">contact</h4>
                </Link>
              </li>

              <li>
                <Link href="team">
                  <h4 className=" text-[#727374]">team</h4>
                </Link>
              </li>

              <li>
                <Link href={'/donate'}>
                  <h4 className=" text-[#727374]">donate</h4>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="underline font-bold  text-3xl capitalize flex justify-center">
              news letter
            </h1>

            <p className="pt-10 text-[#727374]  pb-5  px-2 mx-2">
              During his time in the Spanish capital, Modric has won a plethora
              of trophies, which has included five Champions League titles. In
              2018, he achieved the most prestigious
            </p>

            <div className="flex  px-2 mx-2 pb-10">
              <input
                text="email"
                placeholder="Email Address"
                className="bg-[#003049] border py-3 px-5 focus:border-none w-[15rem]"
              />
              <button type="send" className="border bg-[#ff0054] w-[3rem] px-2">
                <FiSend size={30} />
              </button>
            </div>
          </div>

          <div className="">
            <h1 className="underline font-bold  text-3xl capitalize flex justify-center pb-10">
              instafeed
            </h1>

            <div>
              <InstaFeed />
            </div>
          </div>
        </div>

        <div className="w-full h-[0.04rem] bg-[#e9ecef]" />

        <div className="pt-20 pb-10 text-[#727374] flex justify-between mx-20">
          <p className="capitalize">
            copyright &copy; 2023 all rights reserved | insight group
            international
            <div className="pb-10 text-center">read policy</div>
          </p>

          <div className="flex justify-between gap-5">
            <Link href="/">
              <SlSocialInstagram siyze={25} />
            </Link>

            <Link href="/">
              <TfiLinkedin size={25} />
            </Link>

            <Link href="/">
              <FaFacebookF size={25} />
            </Link>
          </div>
        </div>

        <div className="flex justify-center underline">
          <p className="text-sm text-[#6c757d] capitalize pb-2">
            developed by vitech solutions
          </p>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });

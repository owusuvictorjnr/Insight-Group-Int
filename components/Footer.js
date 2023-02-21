import Link from 'next/link';
import React from 'react';
import InstaFeed from './InstaFeed';
import { FiSend } from 'react-icons/fi';
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { TfiLinkedin } from 'react-icons/tfi';
import { FaFacebookF } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const Footer = () => {
  return (
    <>
      <div className="bg-[#003049] min-h-[30rem]  ">
        <div className=" grid lg:grid-cols-4 md:grid-cols-2 md:gap-[5rem] lg:gap-[15rem] pt-[10rem] md:mx-[5rem] lg:mx[10rem] text-[#ffffff]   pb-5">
          <div>
            <h1 className="underline font-bold  text-3xl capitalize flex justify-center">
              about agency
            </h1>

            <div className="container mx-auto px-10 flex flex-col justify-center">
              <p className="pt-10 text-[#727374]  pb-5">
                During his time in the Spanish capital, Modric has won a
                plethora of trophies, which has included five Champions League
                titles. In 2018, he achieved the most prestigious
              </p>
            </div>
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

            <div className="container mx-auto px-10 flex justify-center">
              <p className="pt-10 text-[#727374]  pb-5 ">
                During his time in the Spanish capital, Modric has won a
                plethora of trophies, which has included five Champions League
                titles. In 2018, he achieved the most prestigious
              </p>
            </div>

            <div className="flex justify-center pt-5 pb-10 container mx-auto">
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

            <div className="container mx-auto flex justify-center">
              <InstaFeed />
            </div>
          </div>
        </div>

        <div className="w-full h-[0.04rem] bg-[#afd2f5]" />

        <div className="pt-20 pb-10 text-[#727374] flex justify-center container mx-auto ">
          <div className="grid grid-cols-1 ">
            <div className="container mx-auto justify-center text-center">
              <p className="capitalize">
                copyright &copy; 2023 all rights reserved | insight group
                international
              </p>

              <div className="pb-10 pt-5 cursor-pointer text-center capitalize">
                read policy
              </div>
            </div>

            <div className="flex justify-center container mx-auto gap-10 pt-10">
              <div
                className="
        
                relative
                before:content-[attr(data-tip)]
                before:absolute
                before:px-3 before:py-2
                before:left-1/2 before:-top-3
                before:w-max before:max-w-sm
                before:-translate-x-1/2 before:-translate-y-full
                before:bg-gray-700 before:text-white
                before:rounded-md before:opacity-0
                before:transition-all

                


                after:absolute
                after:left-1/2 after:-top-3
                after:h-0 after:w-0
                after:-translate-x-1/2 after:border-8
                after:border-t-gray-700
                after:border-1-transparent
                after:border-b-transparent
                after:border-r-transparent
                after:opacity-0
                after:transition-all



                hover:before:opacity-100 hover:after:opacity-100
        "
                data-tip="Instagram"
              >
                <button
                  type=""
                  className="rounded-full   px-4 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <Link href="/">
                    <AiOutlineInstagram size={30} />
                  </Link>
                </button>
              </div>

              <div
                className="
        
                relative
                before:content-[attr(data-tip)]
                before:absolute
                before:px-3 before:py-2
                before:left-1/2 before:-top-3
                before:w-max before:max-w-sm
                before:-translate-x-1/2 before:-translate-y-full
                before:bg-gray-700 before:text-white
                before:rounded-md before:opacity-0
                before:transition-all

                


                after:absolute
                after:left-1/2 after:-top-3
                after:h-0 after:w-0
                after:-translate-x-1/2 after:border-8
                after:border-t-gray-700
                after:border-1-transparent
                after:border-b-transparent
                after:border-r-transparent
                after:opacity-0
                after:transition-all



                hover:before:opacity-100 hover:after:opacity-100
        "
                data-tip="LinkedIn"
              >
                <button
                  type=""
                  className="rounded-full  cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <Link href="/">
                    <TfiLinkedin size={25} />
                  </Link>
                </button>
              </div>

              <div
                className="
        
                relative
                before:content-[attr(data-tip)]
                before:absolute
                before:px-3 before:py-2
                before:left-1/2 before:-top-3
                before:w-max before:max-w-sm
                before:-translate-x-1/2 before:-translate-y-full
                before:bg-gray-700 before:text-white
                before:rounded-md before:opacity-0
                before:transition-all

                


                after:absolute
                after:left-1/2 after:-top-3
                after:h-0 after:w-0
                after:-translate-x-1/2 after:border-8
                after:border-t-gray-700
                after:border-1-transparent
                after:border-b-transparent
                after:border-r-transparent
                after:opacity-0
                after:transition-all



                hover:before:opacity-100 hover:after:opacity-100
        "
                data-tip="Facebook"
              >
                <button
                  type=""
                  className="rounded-full  cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <Link href="/">
                    <FaFacebookF size={25} />
                  </Link>
                </button>
              </div>

              <div
                className="
        
                relative
                before:content-[attr(data-tip)]
                before:absolute
                before:px-3 before:py-2
                before:left-1/2 before:-top-3
                before:w-max before:max-w-sm
                before:-translate-x-1/2 before:-translate-y-full
                before:bg-gray-700 before:text-white
                before:rounded-md before:opacity-0
                before:transition-all

                


                after:absolute
                after:left-1/2 after:-top-3
                after:h-0 after:w-0
                after:-translate-x-1/2 after:border-8
                after:border-t-gray-700
                after:border-1-transparent
                after:border-b-transparent
                after:border-r-transparent
                after:opacity-0
                after:transition-all



                hover:before:opacity-100 hover:after:opacity-100
        "
                data-tip="Mail"
              >
                <button
                  type=""
                  className="rounded-full  cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <Link href="/">
                    <AiOutlineMail size={25} />
                  </Link>
                </button>
              </div>
            </div>
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

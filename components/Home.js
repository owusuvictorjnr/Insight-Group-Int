import React from 'react';
import LandingPage from './LandingPage';
import { RiHandHeartLine } from 'react-icons/ri';
import { IoRibbonOutline } from 'react-icons/io5';
import { CiTrophy } from 'react-icons/ci';
import { BsPiggyBank } from 'react-icons/bs';
import { FiDatabase } from 'react-icons/fi';
import { SlDiamond } from 'react-icons/sl';
import { IoIosPeople } from 'react-icons/io';
import dynamic from 'next/dynamic';

import Image from 'next/image';
import DateTime from './Datetime';

const Home = () => {
  return (
    <div className=" w-screen bg-[#ffffff] flex flex-col">
      <div className="min-h-[20rem] mt-[5rem] w-full flex justify-center  mx-auto">
        <LandingPage />
      </div>

      {/*welcome card */}
      <div className="min-h-[40rem] lg:mt-[10rem] md:mt-[5rem]">
        <div className="flex justify-center container mx-auto">
          <h1 className="text-[#3a0ca3] underline capitalize lg:text-3xl md:text-2xl">
            welcome to insight group international
          </h1>
        </div>
        <div className="pt-2 flex justify-center container mx-auto">
          <p className="text-[#34a0a4] text-center px-5 lg:px-36 lg:text-3xl md:text-2xl ">
            Power modern applications with enriched querying capabilities, new
            operators, added encryption features and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
          {/*3 cards under welcome*/}
          <div className="container mx-auto flex justify-center lg:items-center pt-20">
            <div className="grid lg:grid-cols-3 md:grid-cols-3">
              <div className="h-[11rem] w-60 m-5 border-2 py-10 shadow-2xl">
                <FiDatabase size={30} color={'#76c893'} className="mx-5" />

                <p className="mx-5 text-2xl font-bold pt-3">&#x20B5; 5.6</p>
                <p className="py-2 text-sm mx-5 capitalize ">total donation</p>
              </div>

              <div className="h-[11rem] w-60 m-5 border-2 py-10  shadow-2xl">
                <SlDiamond size={30} color={'#76c893'} className="mx-5" />
                <p className="mx-5 text-2xl font-bold pt-3">4284</p>
                <p className="py-2 text-sm mx-5 capitalize ">total projects</p>
              </div>

              <div className="h-[11rem] w-60 m-5 border-2 py-10  shadow-2xl">
                <IoIosPeople size={30} color={'#76c893'} className="mx-5" />
                <p className="mx-5 text-2xl font-bold pt-3">300</p>
                <p className="py-2 text-sm mx-5 capitalize ">
                  total volunteers
                </p>
              </div>
            </div>
          </div>

          {/*right image card*/}
          <div className="container mx-auto pt-20">
            <div className="container mx-auto flex justify-center px-10 cursor-pointer">
              <Image
                src={'/img/pic2.jpg'}
                alt="image"
                height={500}
                width={500}
                className="rounded-xl md:w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* how could you help*/}
      <div className=" min-h-[20rem] ">
        <div className="flex justify-center pt-20 underline">
          <h1 className="capitalize lg:text-3xl md:text-2xl text-[#3a0ca3]">
            how could you help?
          </h1>
        </div>
        <div className=" px-10 pt-[3rem] flex justify-center items-center">
          <div className="grid  md:grid-cols-2 gap-8">
            <div className="lg:w-[30rem] w-[25rem] h-[15rem] bg-[#f1faee]  rounded-md mb-5 container mx-auto shadow-2xl">
              <div className="flex justify-center capitalize">
                <h2 className="flex justify-center container mx-auto pt-10 gap-3 text-2xl text-[#34a0a4]">
                  <RiHandHeartLine size={30} color={'#76c893'} />
                  give donation
                </h2>
              </div>
              <div className="pt-10 container mx-auto flex items-center">
                <p className="container mx-auto px-20 text-sm text-darkBlue">
                  Power modern applications with enriched querying capabilities,
                  new operators, added encryption features and more.
                </p>
              </div>
            </div>

            <div className="lg:w-[30rem] w-[25rem]  h-[15rem] bg-[#f1faee]  rounded-md mb-5 container mx-auto shadow-2xl">
              <div className="flex justify-center capitalize">
                <h2 className="flex justify-center container mx-auto px-10 pt-10 gap-3 text-2xl text-[#34a0a4]">
                  <IoRibbonOutline size={30} color={'#76c893'} />
                  become a volunteer
                </h2>
              </div>
              <div className="pt-10 container mx-auto flex items-center">
                <p className="container mx-auto px-20  text-sm text-darkBlue">
                  Power modern applications with enriched querying capabilities,
                  new operators, added encryption features and more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10  flex justify-center">
          <div className="grid  md:grid-cols-2 gap-8">
            <div className="w-[25rem] lg:w-[30rem] h-[15rem] bg-[#f1faee]  rounded-md mb-5 container mx-auto shadow-2xl">
              <div className="flex justify-center capitalize">
                <h2 className="flex justify-center container mx-auto pt-10 gap-3 text-2xl text-[#34a0a4]">
                  <CiTrophy size={30} color={'#76c893'} />
                  child education
                </h2>
              </div>
              <div className="pt-10 container mx-auto flex items-center">
                <p className="container mx-auto px-20  text-sm text-darkBlue">
                  Power modern applications with enriched querying capabilities,
                  new operators, added encryption features and more.
                </p>
              </div>{' '}
            </div>

            <div className="w-[25rem] lg:w-[30rem] h-[15rem] bg-[#f1faee]  rounded-md mb-5 container mx-auto shadow-2xl">
              <div className="flex justify-center capitalize">
                <h2 className="flex justify-center container mx-auto pt-10 gap-3 text-2xl text-[#34a0a4]">
                  <BsPiggyBank size={30} color={'#76c893'} /> quick fundraise
                </h2>
              </div>
              <div className="pt-10 container mx-auto flex items-center">
                <p className="container mx-auto px-20  text-sm text-darkBlue">
                  Power modern applications with enriched querying capabilities,
                  new operators, added encryption features and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" min-h-[20rem] mb-10">
        <div className="flex justify-center container mx-auto px-10 pt-10 cursor-pointer">
          <Image
            src={'/img/pic6.jpg'}
            alt="bg pic"
            height={'600'}
            width={600}
            className="w-full h-full rounded-md lg:h-[50rem] cursor-pointer"
          />
          {/*  <p className="">
              forget what you can get and see what you can give
              </p>*/}
        </div>
        <div className="flex justify-center py-3 pt-10">
          <button className="">
            <p className="bg-[#06ec57] py-3 px-3 capitalize text-[#ffffff] rounded-full hover:bg-[#ffffff] hover:text-[#06ec57] border-[#06ec57] border-2 duration-500">
              become a volunteer
            </p>
          </button>
        </div>
      </div>

      {/*upcoming event*/}
      <div className="min-h-[35rem] mb-5">
        <div className="flex justify-center pt-5 lg:pt-[8rem] capitalize lg:text-3xl md:text-2xl underline text-[#3a0ca3]">
          <h1>upcoming events</h1>
        </div>
        <div className="flex justify-center container mx-auto px-5 pt-8">
          <p className="text-[#34a0a4] text-center  lg:px-36 lg:text-3xl md:text-2xl">
            Power modern applications with enriched querying capabilities, new
            operators, added encryption features and more.
          </p>
        </div>

        <div className="">
          <div className="mt-20 container mx-auto gap-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              <div className="container mx-auto flex justify-center cursor-pointer">
                <Image
                  src={'/img/pic9.jpg'}
                  alt={'event1'}
                  height={300}
                  width={300}
                  className="rounded-xl mb-10"
                />
              </div>
              <div className="container mx-auto flex flex-col text-center md:text-center ">
                <div className="text-brightRed text-center lg:text-2xl md:text-2xl sm:text-center">
                  <DateTime />
                </div>
                <div>
                  <h1 className="capitalize lg:text-2xl text-darkBlue pt-2 ">
                    today is a volunteers day
                  </h1>
                </div>

                <div className="container mx-auto  ">
                  <p className="text-[#34a0a4]  text-sm mb-5 mx-2">
                    Power modern applications with enriched querying
                    capabilities, new operators, added encryption features and
                    more.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
              <div className="container mx-auto flex justify-center cursor-pointer">
                <Image
                  src="/img/pic9.jpg"
                  alt="dummy image"
                  height={300}
                  width={300}
                  className="rounded-xl mb-10"
                />
              </div>
              <div className="container mx-auto flex flex-col text-center md:text-center">
                <div className="text-brightRed text-center lg:text-2xl md:text-2xl sm:text-center">
                  <DateTime />
                </div>
                <div>
                  <h1 className="capitalize lg:text-2xl text-darkBlue pt-2 ">
                    today is a volunteers day
                  </h1>
                </div>

                <div className="container mx-auto ">
                  <p className="text-[#34a0a4]  text-sm mb-5 mx-2">
                    Power modern applications with enriched querying
                    capabilities, new operators, added encryption features and
                    more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });

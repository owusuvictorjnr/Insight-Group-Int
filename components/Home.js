import React from 'react';
import LandingPage from './LandingPage';
import { RiHandHeartLine } from 'react-icons/ri';
import { IoRibbonOutline } from 'react-icons/io5';
import { CiTrophy } from 'react-icons/ci';
import { BsPiggyBank } from 'react-icons/bs';
import { FiDatabase } from 'react-icons/fi';
import { SlDiamond } from 'react-icons/sl';
import { GrGroup } from 'react-icons/gr';

import Image from 'next/image';
import DateTime from './Datetime';

const Home = () => {
  return (
    <div className=" w-screen bg-[#ffffff] flex flex-col">
      <div className="min-h-[40rem]   mt-[5rem] flex justify-center ">
        <LandingPage />
      </div>

      {/*main card*/}
      <div className="mt-10 min-h-[40rem]">
        <div className="">
          <div className="flex justify-evenly  ">
            {/*welcome card */}
            <div className="mt-[10rem]">
              <div className="px-10 container mx-auto ">
                <h1 className="capitalize text-3xl  text-[#3a0ca3] underline">
                  welcome to insight group international
                </h1>
              </div>
              <p className="mt-10 container mx-auto px-5  lg:mx-20 lg:py-5 py-5 tracking-widest text-[#34a0a4]">
                Power modern applications with enriched querying capabilities,
                <br />
                new operators, added encryption features and more.
              </p>

              {/*3 cards under welcome*/}
              <div className="grid lg:grid-cols-3 md:grid-cols-2 m-5  mb-5 ">
                <div className="h-40 w-40 m-5 border-2 py-10  ">
                  <FiDatabase size={30} color={'#76c893'} className="mx-5" />

                  <p className="mx-5 text-2xl font-bold pt-3">&#x20B5; 5.6</p>
                  <p className="py-2 text-sm mx-5 capitalize ">
                    total donation
                  </p>
                </div>

                <div className="h-40 w-40 m-5 border-2 py-10  ">
                  <SlDiamond size={30} color={'#76c893'} className="mx-5" />
                  <p className="mx-5 text-2xl font-bold pt-3">4284</p>
                  <p className="py-2 text-sm mx-5 capitalize ">
                    total projects
                  </p>
                </div>

                <div className="h-40 w-40 m-5 border-2 py-10  ">
                  <GrGroup size={30} color={'#76c893'} className="mx-5" />
                  <p className="mx-5 text-2xl font-bold pt-3">300</p>
                  <p className="py-2 text-sm mx-5 capitalize ">
                    total volunteers
                  </p>
                </div>
              </div>
            </div>

            {/*right image card*/}
            <div className="mt-[10rem] h-full bg-red-500  ">
              <div className="container mx-auto text-center">
                <p className="text-end">
                  <Image
                    src={'/img/pic2.jpg'}
                    alt="image"
                    height={500}
                    width={500}
                    className="w-full h-full "
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* how could you help*/}
      <div className=" min-h-[20rem] ">
        <div className="flex justify-center pt-20">
          <h1 className="capitalize text-3xl text-[#3a0ca3]">
            how could you help?
          </h1>
        </div>
        <div className=" px-10 pt-[5rem] flex justify-center items-center">
          <div className="grid  md:grid-cols-2 gap-8">
            <div className="lg:w-[30rem] w-[25rem] h-[15rem] bg-[#f1faee]  rounded-md mb-5 container mx-auto ">
              <div className="flex justify-center capitalize">
                <h2 className="flex justify-center pt-10 gap-3 text-2xl text-[#34a0a4]">
                  <RiHandHeartLine size={30} color={'#76c893'} /> give donation
                </h2>
              </div>
            </div>

            <div className="lg:w-[30rem] w-[25rem]  h-[15rem] bg-[#f1faee]  rounded-md mb-5 container mx-auto">
              <div className="flex justify-center capitalize">
                <h2 className="flex justify-center pt-10 gap-3 text-2xl text-[#34a0a4]">
                  <IoRibbonOutline size={30} color={'#76c893'} />
                  become a volunteer
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10  flex justify-center">
          <div className="grid  md:grid-cols-2 gap-8">
            <div className="w-[25rem] lg:w-[30rem] h-[15rem] bg-[#f1faee]  rounded-md mb-5 container mx-auto ">
              <div className="flex justify-center capitalize">
                <h2 className="flex justify-center pt-10 gap-3 text-2xl text-[#34a0a4]">
                  <CiTrophy size={30} color={'#76c893'} />
                  child education
                </h2>
              </div>
            </div>

            <div className="w-[25rem] lg:w-[30rem] h-[15rem] bg-[#f1faee]  rounded-md mb-5 container mx-auto">
              <div className="flex justify-center capitalize">
                <h2 className="flex justify-center pt-10 gap-3 text-2xl text-[#34a0a4]">
                  <BsPiggyBank size={30} color={'#76c893'} /> quick fundraise
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" min-h-[30rem] mb-10">
        <div className="flex justify-center px-10 pt-10 ">
          <Image
            src={'/img/pic6.jpg'}
            alt="bg pic"
            height={'600'}
            width={600}
            className="bg-white w-full h-full rounded-md lg:h-[40rem] "
          />
          {/*  <p className="">
              forget what you can get and see what you can give
              </p>*/}
        </div>
        <div className="flex justify-center py-3 ">
          <button className="">
            <p className="bg-[#06ec57] py-3 px-3 capitalize text-[#ffffff] rounded-full hover:bg-[#ffffff] hover:text-[#06ec57] border-[#06ec57] border-2 duration-500">
              become a volunteer
            </p>
          </button>
        </div>
      </div>

      {/*event*/}
      <div className="min-h-[35rem] bg-slate-500 mb-5">
        <div className="flex justify-center pt-[8rem] capitalize text-3xl text-[#3a0ca3]">
          <h1>upcoming events</h1>
        </div>
        <div className="flex justify-center pt-8">
          <p className="text-[#34a0a4] text-center text-sm">
            Power modern applications with enriched querying capabilities,
            <br />
            new operators, added encryption features and more.
          </p>
        </div>

        <div className="mt-20 flex justify-between container mx-auto">
          <div className="flex gap-5">
            <Image
              src={'/img/pic9.jpg'}
              alt={'event1'}
              height={500}
              width={500}
              className="rounded-xl mb-10"
            />
            <div>
              <DateTime />
              <h1 className="capitalize lg:text-2xl text-[#ffffff] pt-10 mx-5 flex flex-col">
                today is a volunteers day
              </h1>

              <p className="text-[#34a0a4] text-center text-sm">
                Power modern applications with enriched querying capabilities,
                <br />
                new operators, added encryption features and more.
              </p>
            </div>
          </div>

          <div>come</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

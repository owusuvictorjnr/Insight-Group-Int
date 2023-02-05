import React from 'react';
import LandingPage from './LandingPage';
import { RiHandHeartLine } from 'react-icons/ri';
import { IoRibbonOutline } from 'react-icons/io5';
import { GrAchievement } from 'react-icons/gr';
import { BsPiggyBank } from 'react-icons/bs';

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[#f1faee]">
      <div className="min-h-[40rem] bg-black w-screen ">
        {/*<LandingPage />*/}
      </div>

      <div className=" min-h-[20rem] ">
        <div className="flex justify-center pt-20">
          <h1 className="capitalize text-3xl text-[#3a0ca3]">
            how could you help?
          </h1>
        </div>
        <div className=" px-10 pt-[5rem] flex justify-center items-center">
          <div className="grid  md:grid-cols-2 gap-8">
            <div className="lg:w-[30rem] w-[25rem] h-[15rem] bg-white  rounded-md mb-5 container mx-auto ">
              <div className="flex justify-center capitalize">
                <h2 className="flex justify-center pt-10 gap-3 text-2xl text-[#34a0a4]">
                  <RiHandHeartLine size={30} color={'#76c893'} /> give donation
                </h2>
              </div>
            </div>

            <div className="lg:w-[30rem] w-[25rem]  h-[15rem] bg-white  rounded-md mb-5 container mx-auto">
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
            <div className="w-[25rem] lg:w-[30rem] h-[15rem] bg-white  rounded-md mb-5 container mx-auto ">
              <div className="flex justify-center capitalize">
                <h2 className="flex justify-center pt-10 gap-3 text-2xl text-[#34a0a4]">
                  <GrAchievement size={30} color={'#76c893'} />
                  child education
                </h2>
              </div>
            </div>

            <div className="w-[25rem] lg:w-[30rem] h-[15rem] bg-white  rounded-md mb-5 container mx-auto">
              <div className="flex justify-center capitalize">
                <h2 className="flex justify-center pt-10 gap-3 text-2xl text-[#34a0a4]">
                  <BsPiggyBank size={30} color={'#76c893'} /> quick fundraise
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

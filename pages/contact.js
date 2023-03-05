import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SiGooglemaps } from 'react-icons/si';
import dynamic from 'next/dynamic';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>IG contact</title>
      </Head>
      <div className="min-h-screen">
        <div className="pt-[10rem] bg-brightRedSupLight flex justify-center pb-5">
          <p className="capitalize text-sm lg:text-3xl md:text-2xl text-brightRedLight font-bold  underline pb-5">
            contact us
          </p>
        </div>

        <div className="pt-36 mx-10 lg:gap-[15rem] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          {/* send us a message*/}
          <div className="bg-darkBlue rounded-md  container mx-auto shadow-darkGrayishBlue  border-4 border-gray-100 mb-10  md:w-[40rem] md:h-[30rem] lg:w-[60rem] min-h-[40rem] md:min-h-[50rem] lg:min-h-[55rem]">
            <div className="flex flex-col container mx-auto ">
              <h1 className="uppercase pt-20 py-5 text-sm md:text-2xl lg:text-3xl text-brightRedLight text-center">
                send us a message
              </h1>
              <form>
                <div className="flex flex-col items-center pt-12">
                  <div className="flex container mx-auto px-10 py-5">
                    <input
                      type="text"
                      name=""
                      placeholder="Full Name"
                      className="w-full h-10 px-2 text-sm md:text-xl lg:text-2xl text-darkBlue border-brightRed border-2 rounded-md bg-veryPaleRed"
                    />
                  </div>

                  <div className="flex container mx-auto px-10 py-5">
                    <input
                      type="text"
                      name=""
                      placeholder="Email"
                      className="w-full h-10 px-2 text-sm md:text-xl lg:text-2xl text-darkBlue border-brightRed border-2 rounded-md bg-veryPaleRed"
                    />
                  </div>

                  <div className="flex container mx-auto px-10 py-5">
                    <textarea
                      rows={10}
                      cols={100}
                      name="message"
                      placeholder="Message"
                      className="w-full px-2 text-sm md:text-xl lg:text-2xl text-darkBlue border-brightRed border-2 rounded-md bg-veryPaleRed"
                    />
                  </div>
                </div>
                <div className="flex justify-center mb-10 mt-5">
                  <button
                    type="submit"
                    className="bg-white capitalize text-sm text-darkBlue px-10 py-2 rounded-md hover:bg-brightRedLight duration-300 lg:text-2xl md:text-xl"
                  >
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* contact*/}
          <div className="bg-black rounded-md  container mx-auto shadow-darkGrayishBlue  border-4 border-gray-100 mb-10  md:w-[40rem] md:h-[30rem] lg:w-[40rem] min-h-[40rem] md:min-h-[50rem] lg:min-h-[55rem]">
            <div>
              <h1>contact information</h1>
            </div>
            <div>
              <SiGooglemaps size={'20'} color={'white'}/>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });

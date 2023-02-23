import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>IG contact</title>
      </Head>
      <div className="min-h-screen">
        <div className="pt-[10rem] bg-brightRedSupLight flex justify-center pb-5 ">
          <p className="capitalize text-sm lg:text-3xl md:text-2xl text-brightRedLight font-bold  underline pb-5">
            contact us
          </p>
        </div>

        <div className="pt-36 mx-10 md:gap-[30rem] grid grid-cols-1 md:grid-cols-2">
          {/* send us a message*/}
          <div className="bg-darkBlue rounded-md min-h-[20rem] shadow-md shadow-darkGrayishBlue  border-4 border-gray-100 pb-6  md:w-[40rem] md:h-[30rem] lg:w-[60rem]">
            <div className="flex flex-col container mx-auto ">
              <h1 className="uppercase pt-20 py-5 text-sm md:text-2xl lg:text-3xl text-brightRedLight text-center">
                send us a message
              </h1>
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
                  <input
                    type="text"
                    name=""
                    placeholder="Message"
                    className="w-full h-10 px-2 text-sm md:text-xl lg:text-2xl text-darkBlue border-brightRed border-2 rounded-md bg-veryPaleRed"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-white capitalize text-sm text-darkBlue px-10 py-2 rounded-md hover:bg-brightRedLight duration-300"
                >
                  send
                </button>
              </div>
            </div>
          </div>

          {/* contact*/}
          <div>contact</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

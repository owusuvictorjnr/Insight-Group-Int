import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>IG about</title>
      </Head>
      <div className="min-h-screen">
        <div className="pt-[10rem] bg-brightRedSupLight flex justify-center px-10">
          <p className="capitalize text-sm lg:text-3xl md:text-2xl text-brightRedLight font-bold  underline pb-5">
            about us
          </p>
        </div>

        <div className="flex justify-center  bg-brightRedSupLight">
          <p className="text-sm lg:text-3xl md:text-2xl text-brightRedLight rounded mb-5 lg:py-10 lg:px-10 md:py-10 md:px-10">
            We re-imagine everyday foods made with better ingredients.
          </p>
        </div>

        {/*Mission*/}
        <div className="min-h-[30rem] grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center rounded-t-xl container mx-auto pt-10">
            <Image
              src={'/img/pic9.jpg'}
              alt="/"
              height="300"
              width="400"
              className="rounded-t-3xl mx-10 lg:pb-10 w-[30rem] h-[15rem] lg:w-full lg:h-full"
            />
          </div>
          <div className="flex justify-center rounded-t-xl container mx-auto md:pt-10 lg:pt-10">
            <div className="flex flex-col container mx-auto justify-center items-center px-10 lg:items-center md:items-center text-sm lg:text-3xl md:text-2xl">
              <p className="capitalize text-brightRedLight font-bold">
                our mission
              </p>

              <div className="text-sm text-darkBlue lg:text-3xl md:text-xl">
                To Share Love with everyone by providing nourishing delicious
                foods.
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-10 grid grid-cols-1 md:grid-cols-2">
          <p className="container mx-auto flex justify-center px-10 text-darkBlue md:text-xl lg:text-3xl">
            As a heart-centered brand that cares about its global impact, Iya
            Foods emphasizes that key part of its brand in its mission
            statement. Describing your brand values and what you stand for is
            one of the best ways to reach your audience. It`s key to remember
            that this approach doesn`t have to be boring. Add ingredients that
            showcase what makes your brand great. Iya Foods effectively adds
            images, its social media links, and even the notable publications
            it`s been featured in, giving it plenty of credibility.
          </p>

          <div className="container mx-auto flex justify-center md:items-center pt-5">
            <Image
              src={'/img/pic1.jpg'}
              alt="/"
              width={'300'}
              height={'300'}
              className="rounded flex px-10 w-full h-[13rem] md:w-full md:h-[25rem] md:px-5 lg:w-[40rem] lg:h-[40rem] "
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

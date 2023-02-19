import Image from 'next/image';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="">
      {/* <video
        src="/video/vid1.mp4"
        alt="video"
        muted={true}
        autoPlay={true}
  className="h-[30rem] w-screen p-2"
  />*/}

      <Image
        src={'/img/pic5.jpg'}
        alt="background image"
        height={500}
        width={500}
        className="rounded-md  w-screen px-5"
      />
    </div>
  );
};

export default LandingPage;

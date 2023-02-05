import React from 'react';

const LandingPage = () => {
  return (
    <div className="">
      <video
        src="/video/vid1.mp4"
        alt="video"
        muted={true}
        autoPlay={true}
        className="h-[30rem] w-screen p-2"
      />

      <h1>welcome to insight group international</h1>
    </div>
  );
};

export default LandingPage;

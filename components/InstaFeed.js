import Image from 'next/image';
import React from 'react';

const InstaFeed = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 lg:gap-5 md:gap-10 grid-cols-4 gap-3 ">
      <div>
        <Image
          src="/img/pic1.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="rounded-md"
        />
      </div>

      <div>
        <Image
          src="/img/pic2.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="rounded-md"
        />
      </div>

      <div>
        <Image
          src="/img/pic3.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="rounded"
        />
      </div>

      <div>
        <Image
          src="/img/pic4.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="rounded-md"
        />
      </div>

      <div>
        <Image
          src="/img/pic5.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="rounded-md"
        />
      </div>

      <div>
        <Image
          src="/img/pic6.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="rounded-md"
        />
      </div>

      <div>
        <Image
          src="/img/pic7.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="rounded-md"
        />
      </div>
      <div>
        <Image
          src="/img/pic8.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default InstaFeed;

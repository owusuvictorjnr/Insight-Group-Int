import Image from 'next/image';
import React from 'react';

const InstaFeed = () => {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-5 lg:gap-5 md:gap-2 gap-3">
      <div>
        <Image
          src="/img/pic1.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="h-11 w-11"
        />
      </div>

      <div>
        <Image
          src="/img/pic2.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="h-11 w-11"
        />
      </div>

      <div>
        <Image
          src="/img/pic3.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="h-11 w-11"
        />
      </div>

      <div>
        <Image
          src="/img/pic4.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="h-11 w-11"
        />
      </div>

      <div>
        <Image
          src="/img/pic5.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="h-11 w-11"
        />
      </div>

      <div>
        <Image
          src="/img/pic6.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="h-11 w-11"
        />
      </div>

      <div>
        <Image
          src="/img/pic7.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="h-11 w-11"
        />
      </div>
      <div>
        <Image
          src="/img/pic8.jpg"
          alt="pic1"
          width={50}
          height="20"
          className="h-11 w-11"
        />
      </div>
    </div>
  );
};

export default InstaFeed;

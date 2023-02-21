import Link from 'next/link';
import React from 'react';

const ToolTip = () => {
  return (
    <>
    
    <div>
      <Link href={'/about'} >home</Link>
    </div>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">

      <div className="flex flex-col gap-12 items-center">
        <div
          className="
        
        relative
        before:content-[attr(data-tip)]
        before:absolute
        before:px-3 before:py-2
        before:left-1/2 before:-top-3
        before:w-max before:max-w-sm
        before:-translate-x-1/2 before:-translate-y-full
        before:bg-gray-700 before:text-white
        before:rounded-md before:opacity-0
        before:transition-all

        


        after:absolute
        after:left-1/2 after:-top-3
        after:h-0 after:w-0
        after:-translate-x-1/2 after:border-8
        after:border-t-gray-700
        after:border-1-transparent
        after:border-b-transparent
        after:border-r-transparent
        after:opacity-0
        after:transition-all



        hover:before:opacity-100 hover:after:opacity-100
        "
          data-tip="improve workflow"
        >
          <button
            type=""
            className="rounded bg-amber-400 text-white py-2 px-4 font-semibold shadow-sm focus:outline-none"
          >
            beyond builder
          </button>
        </div>

        <div data-tip="improve 222">
          <p>better design</p>
        </div>

        <div data-tip="improve 44444">
          <p>tailwindcss</p>
        </div>
      </div>
    </div>
    </>
    );
};

export default ToolTip;

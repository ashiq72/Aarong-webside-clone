import Image from "next/image";
import React from "react";

export default function ImageSection() {
  return (
    <>
      <div className="">
        <div className="flex flex-col h-full  w-full lg:flex-row">
          <div className=" flex-1">
            <Image
              alt=""
              src="https://www.aarong.com/media/wysiwyg/Box-Banner-1-D-21062023_5.jpg"
              width={950}
              height={600}
            />
          </div>

          <div className=" flex-1">
            <Image
              alt=""
              src="https://www.aarong.com/media/wysiwyg/D-2-22062023.jpg"
              width={950}
              height={600}
            />
          </div>
        </div>
        <Image
          alt=""
          src="https://www.aarong.com/media/wysiwyg/ad-banner-D-09082023_1.jpg"
          width={1950}
          height={1300}
        />
      </div>
    </>
  );
}

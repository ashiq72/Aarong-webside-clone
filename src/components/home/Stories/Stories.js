import Image from "next/image";
import React from "react";

export default function Stories() {
  return (
    <div className="bg-black w-full">
      <div className=" lg:mx-0 pt-12  text-center pb-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          STORIES
        </h2>
        <p className=" text-base leading-8 text-gray-400">
          Learn more about who we are
        </p>
      </div>
      <div className="flex gap-32 w-4/5 mx-auto">
        <div className="flex-2 h-full">
          <Image
            src="https://www.aarong.com/media//magearray/news/image/Stories-tg-18042023.jpg"
            alt=""
            width={900}
            height={1500}
          />
          <h2 className="text-white font-bold p-5">
            TAAGA OUTSTANDING YOUNG PROFESSIONALS AWARD 2023
          </h2>
        </div>
        <div className="flex-1 flex-row">
          <div>
            <Image
              src="https://www.aarong.com/media//magearray/news/image/Kids-Eid23-Thumbnail-10042023.jpg"
              alt=""
              width={600}
              height={200}
            />
            <h2 className="text-white font-bold py-5">
              EID/23 KID’S COLLECTION BY AARONG | ADVENTURES ON HOLIDAY
            </h2>
          </div>
          <div>
            <Image
              src="https://www.aarong.com/media//magearray/news/image/Thumbnail-10042023.jpg"
              alt=""
              width={600}
              height={200}
            />
            <h2 className="text-white font-bold py-5">
              AARONG ACCESSORIES EID/23
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

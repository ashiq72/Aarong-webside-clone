"use client";
import Image from "next/image";
import React from "react";
export default function Trending({ products }) {
  return (
    <div className="flex w-full">
      <div className="flex-1">
        <Image
          src="https://www.aarong.com/media/wysiwyg/D-1-seg-29052023.jpg"
          alt=""
          width={955}
          height={500}
        />
      </div>
      <div className="flex-1 hidden lg:block ">
        <div className="bg-white pr-12">
          <div className="mx-auto max-w-2xl  sm:px-6 lg:max-w-7xl lg:px-8 ">
            <h2 className="text-3xl text-center py-8 font-bold">TRENDING</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 px-24">
              {products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                      width={260}
                      height={140}
                      src={product.image[1]}
                      alt=""
                      className="h-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700 text-center ">
                    {product.price}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

import { PiPlusCircleDuotone } from "react-icons/pi";

export default async function WhatsNew() {
  const res = await fetch("http://localhost:5000/allproducts");
  const allProduct = await res.json();
  const allProducts = allProduct.slice(0, 3);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl  sm:px-6 sm:py-20 lg:max-w-full lg:px-32 ">
        <h2 className="text-4xl text-center font-semibold tracking-tight text-gray-900">
          {`WHAT'S NEW`}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {allProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="">
                <Image
                  width={700}
                  height={600}
                  src={product.image[1]}
                  alt=""
                  className=" object-cover object-center lg:h-full lg:w-full relative"
                />
                <div className="text-gray-400 absolute bottom-3 left-3 text-5xl ">
                  <PiPlusCircleDuotone />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function News() {
  return (
    <div className="bg-[#F3F3F3] py-24 sm:py-32 ">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className=" lg:mx-0 pt-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            LATEST NEWS & OFFERS
          </h2>
          <p className="mt-2 text-base leading-8 text-gray-600">
            Stay in the know
          </p>
        </div>
        <div className="mx-auto  grid  grid-cols-1 gap-x-8 sm:mt-8 sm:pt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="card rounded-none w-[590px] bg-base-100 ">
            <figure>
              <Image
                src="https://www.aarong.com/media//magearray/news/image/bkash-offer-thumbnail-image-21082023.jpg"
                alt=""
                width={600}
                height={200}
              />
            </figure>
            <div className="card-body">
              <p className="bg-[#E6A614] text-white  px-3  w-16">Offer</p>
              <h2 className="card-title text-base">
                Exciting Offers on bKash Payment!
              </h2>
            </div>
          </div>
          <div className="card rounded-none w-[590px] bg-base-100 ">
            <figure>
              <Image
                src="https://www.aarong.com/media//magearray/news/image/eid-cashback-thumbnail-20032023_1.jpg"
                alt=""
                width={600}
                height={200}
              />
            </figure>
            <div className="card-body">
              <p className="bg-[#E6A614] text-white  px-3  w-16">Offer</p>
              <h2 className="card-title text-base">
                Exciting Cash Back Offers!
              </h2>
            </div>
          </div>
          <div className="card rounded-none w-[590px] bg-base-100 ">
            <figure>
              <Image
                src="https://www.aarong.com/media//magearray/news/image/Wrappo-1036x703_1.jpg"
                alt=""
                width={600}
                height={200}
              />
            </figure>

            <div className="card-body">
              <p className="bg-[#E6A614] text-white  px-3  w-16">Offer</p>
              <h2 className="card-title text-base">Exciting Offer at Wrappo</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 text-center">
        <button className="text-white text-base btn btn-neutral rounded-none px-8">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

import Link from "next/link";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <>
      <div className="bg-transparent  w-full relative overflow-hidden ">
        <div className=" top-0">
          <div className="hidden lg:flex">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              loop={true}
              style={{
                "--swiper-navigation-color": "#fff",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <Image
                  src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/d/1/d1-mb-23082023.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/d/2/d2-mb-23082023.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/d/3/d3-mb-23082023.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/d/4/d4-mb-23082023.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="lg:hidden sm:flex">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              loop={true}
              style={{
                "--swiper-navigation-color": "#fff",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <Image
                  src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/mobile_image/r/1/r1-mb-23082023.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/mobile_image/r/2/r2-mb-23082023.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/mobile_image/r/3/r3-mb-23082023-revised.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/mobile_image/r/4/r4-mb-23082023-revised.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://www.aarong.com/media/mageplaza/bannerslider/banner/image/mobile_image/r/5/r5-mb-23082023.jpg"
                  alt=""
                  height={900}
                  width={1920}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className=" w-full absolute z-10  top-0">
          <div className="max-w-[1240px] m-auto flex">
            <div className="flex-1 flex gap-2">
              <a className="">
                <Image
                  src="https://www.aarong.com/media/logo/stores/1/aarong-logo.jpg"
                  alt=""
                  width={120}
                  height={150}
                />
              </a>
              <ul className="flex py-6 px-5 gap-9">
                <li className="cursor-pointer">
                  <a href="">
                    <Image
                      src="https://www.aarong.com/media/brand_logo/default/logo-white-02.png"
                      alt=""
                      width={63}
                      height={40}
                    />
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a href="">
                    <Image
                      src="https://www.aarong.com/media/brand_logo/default/logo-white-03.png"
                      alt=""
                      width={110}
                      height={40}
                    />
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a href="">
                    <Image
                      src="https://www.aarong.com/media/brand_logo/default/logo-white-04.png"
                      alt=""
                      width={92}
                      height={40}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between text-white text-sm px-2 py-5 ">
              <ul className="flex gap-4 menu-horizontal ">
                <li className="cursor-pointer hover:bg-slate-300 py-1 px-2">
                  <Link href="" className="">
                    <div className="dropdown dropdown-hover">
                      <label tabIndex={0} className="flex gap-1">
                        <span className="text-xl">
                          <IoLocationOutline />
                        </span>
                        BGD
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu mt-2 bg-base-100 w-16 rounded p-0 text-orange-500"
                      >
                        <li>
                          <a>BGD</a>
                        </li>
                        <li>
                          <a>AUS</a>
                        </li>
                        <li>
                          <a>GER</a>
                        </li>
                        <li>
                          <a>SIN</a>
                        </li>
                        <li>
                          <a>UAE</a>
                        </li>
                        <li>
                          <a>UK</a>
                        </li>
                        <li>
                          <a>USA</a>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </li>

                <li className="cursor-pointer hover:bg-slate-300 py-1 px-2">
                  <Link href="">Find a Store</Link>
                </li>
                <li className="cursor-pointer hover:bg-slate-300 py-1 px-2">
                  <Link href="">Customer Service</Link>
                </li>
                <li className="cursor-pointer hover:bg-slate-300 py-1 px-2">
                  <Link href="">Club Taaga</Link>
                </li>
                <li className="cursor-pointer hover:bg-slate-300 py-1 px-2">
                  <Link href="">My Aarong Rewards</Link>
                </li>
              </ul>
              <ul className="cursor-pointer flex gap-4 justify-end text-2xl">
                <li>
                  <Link href="">
                    <FiSearch />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <VscAccount />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <AiOutlineHeart />
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <LiaShoppingBagSolid />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

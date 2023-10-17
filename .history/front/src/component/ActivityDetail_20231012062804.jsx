import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { IoPeopleCircle } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarCheckFill, BsPersonFill } from "react-icons/bs";
import { ImPriceTag } from "react-icons/im";
import { AiFillPushpin } from "react-icons/ai";

export default function ActivityDetail() {
  const navigate = useNavigate();

  const {
    state: { activity },
  } = useLocation();
  console.log(activity);

  return (
    <div className="w-full pt-10">
      <div className="w-11/12 mx-auto">
        <div className="w-full flex items-center gap-x-2 text-[1.1rem] text-[#f5aa15]">
          <IoPeopleCircle className="text-[1.5rem]" />
          <p>{activity.type}</p>
        </div>

        <h1 className="mt-3 text-[1.8rem] font-semibold">{activity.title}</h1>

        <ul className="w-full mt-6 flex items-center text-[1.2rem] text-[#616161]">
          <li className="w-1/4 flex items-center gap-x-4 border-r-[1px] border-solid border-[#DADCE0]">
            <FaLocationDot className="text-[1.8rem] text-[#282828]" />
            <p>{activity.place}</p>
          </li>
          <li className="w-1/4 px-6 box-border border-r-[1px] border-solid border-[#DADCE0] flex items-center gap-x-4">
            <BsFillCalendarCheckFill className="text-[1.8rem] text-[#282828]" />
            <p>{activity.schedule}</p>
          </li>
          <li className="w-1/4 px-6 box-border border-r-[1px] border-solid border-[#DADCE0] flex items-center gap-x-4">
            <BsPersonFill className="text-[1.8rem] text-[#282828]" />
            <p>{activity.member}</p>
          </li>
          <li className="w-1/4 px-6 box-border flex items-center gap-x-4">
            <ImPriceTag className="text-[1.8rem] text-[#282828]" />
            <p>{activity.price === 0 ? "무료" : activity.price + "원"}</p>
          </li>
        </ul>
      </div>

      <div className="w-11/12 mx-auto my-14 flex">
        <img
          className="w-[46%] object-cover object-center"
          src={process.env.PUBLIC_URL + `/../${activity.thumbnail}`}
          alt="img"
        />
        <div className="w-[54%] px-10 box-border">
          <p className="font-semibold">모임의 host, {activity.host}</p>
          <p className="mt-4 whitespace-pre-line leading-7">
            {activity.host_desc}
          </p>
        </div>
      </div>

      <div className="w-full bg-[#FDBA74]">
        <div className="w-11/12 mx-auto py-14 flex flex-col items-start">
          <h1 className="text-[1.5rem] text-[#282828] font-semibold">
            모임소개
          </h1>
          <div className="w-full mt-3 flex justify-between">
            <p className="w-2/5 ">{activity.description}</p>
            <img
              className="w-96 rounded-lg shadow-[24px_22px_10px_-15px_rgba(0,0,0,0.2)]"
              src={process.env.PUBLIC_URL + `/../${activity.image[1]}`}
              alt="comunity_desc_img"
            />
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto py-14 flex gap-x-10">
        <h1 className="text-[1.5rem] text-[#282828] font-semibold">
          모임 상세
        </h1>

        <ul className="whitespace-pre-line">
          {activity.summary && (
            <li>
              <div>
                <AiFillPushpin />
                <p>모집 개요</p>
              </div>
              <p>{activity.summary}</p>
            </li>
          )}

          <li>
            <FaLocationDot className="text-[1.8rem] text-[#282828]" />
            <p>{activity.place}</p>
          </li>

          <li>
            <BsFillCalendarCheckFill className="text-[1.8rem] text-[#282828]" />
            <p>{activity.schedule}</p>
          </li>

          <li>
            <BsPersonFill className="text-[1.8rem] text-[#282828]" />
            <p>{activity.member}</p>
          </li>

          <li>
            <ImPriceTag className="text-[1.8rem] text-[#282828]" />
            <p>{activity.detail_price}</p>
            <p>
              {activity.detail_price !== 0 &&
                "입금계좌 : 참가 인원으로 뽑힐시, 토스뱅크 1000-5552-9626(비빔모임용_김성원)으로 입금."}
            </p>
          </li>
        </ul>
      </div>

      {/* <h1 className="mb-[40px] text-[2.25rem] font-semibold">신청 링크</h1>
        <p className="text-[1.125rem] text-[#454545] whitespace-pre-wrap">
          {activity.request}
        </p>

        <div className="w-full mt-[120px] flex justify-between">
          <button
            onClick={() => {
              navigate("/activity");
            }}
            className="w-[48%] py-3 bg-black bg-opacity-0 border-[1px] border-solid border-black flex items-center justify-center hover:bg-opacity-100 hover:border-black hover:text-white transition-all duration-700"
            type="button"
          >
            목록보기
          </button>
          <button
            className="w-[48%] py-3 bg-black bg-opacity-100 text-white border-[1px] border-solid border-black flex items-center justify-center hover:bg-opacity-0 hover:border-black hover:text-black transition-all duration-700"
            type="button"
          >
            <a href="https://www.instagram.com/bebeam_busan/" target="_blank">
              신청하기
            </a>
          </button>
        </div> */}
    </div>
  );
}
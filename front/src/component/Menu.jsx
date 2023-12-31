import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { GoX } from "react-icons/go";

export default function Menu({ setSideBarOpen, sideBarOpen, path }) {
  const navigate = useNavigate();
  const location = useLocation();
  const content = location.state?.content || "";

  return (
    <>
      <ul className="lg:w-[50%] sm:w-[58%] hidden sm:flex justify-between text-[#344054] dark:text-white lg:text-[1.25rem] md:text-[1.16rem] sm:text-[1.1rem] text-[1.1rem]">
        <li
          onClick={() => {
            navigate("/");
          }}
          className={`${
            path === "/"
              ? "text-white font-semibold before:opacity-100"
              : "before:opacity-0"
          } md:w-1/5 sm:w-[23%] py-2 before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-300 hover:before:opacity-100 relative inline-block cursor-pointer hover:font-semibold hover:text-white transition-all duration-700 before:transition-all before:duration-700`}
        >
          <span className={`${path === "/" ? "" : ""} relative`}>Brand</span>
        </li>
        <li
          onClick={() => {
            navigate("/meeting", { state: { content: "small_meeting" } });
          }}
          className={`${
            content === "small_meeting"
              ? "text-white font-semibold before:opacity-100"
              : "before:opacity-0"
          } md:w-1/5 sm:w-[23%] py-2 before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-300 hover:before:opacity-100 relative inline-block cursor-pointer hover:font-semibold hover:text-white transition-all duration-700 before:transition-all before:duration-700`}
        >
          <span className={`${path === "/activity" ? "" : ""} relative`}>
            소모임
          </span>
        </li>
        <li
          onClick={() => {
            navigate("/toolkit");
          }}
          className={`${
            path === "/toolkit"
              ? "text-white font-semibold before:opacity-100"
              : "before:opacity-0"
          } md:w-1/5 sm:w-[23%] py-2 before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-300 hover:before:opacity-100 relative inline-block cursor-pointer hover:font-semibold hover:text-white transition-all duration-700 before:transition-all before:duration-700`}
        >
          <span className={`${path === "/toolkit" ? "" : ""} relative`}>
            Toolkit
          </span>
        </li>

        <li
          onClick={() => {
            navigate("/meeting", { state: { content: "regular_meeting" } });
          }}
          className={`${
            content === "regular_meeting"
              ? "text-white font-semibold before:opacity-100"
              : "before:opacity-0"
          } md:w-1/5 sm:w-[23%] py-2 before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-300 hover:before:opacity-100 relative inline-block cursor-pointer hover:font-semibold hover:text-white transition-all duration-700 before:transition-all before:duration-700`}
        >
          <span className={`${path === "/community" ? "" : ""} relative`}>
            정기모임
          </span>
        </li>
      </ul>

      <ul
        className={`${
          sideBarOpen ? "w-full" : "w-0"
        } h-full block sm:hidden fixed top-0 left-0 z-[99999999] py-5 bg-gradient-to-r dark:from-[#1c1b1b] dark:to-black from-[#f5aa15] to-[#ff9100] box-border transition-all duration-700 overflow-hidden`}
      >
        {sideBarOpen && (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                setSideBarOpen(false);
              }}
              className="mx-[1rem] text-[1.4rem] dark:text-[#f5aa15] text-white mt-[30px] transition-all duration-700"
            >
              <GoX />
            </button>

            <ul className="w-full h-full mx-[1.3rem] mt-[-30px] dark:text-[#f5aa15] text-white text-[1.6rem] flex flex-col justify-center">
              <li
                onClick={() => {
                  navigate("/");
                  setSideBarOpen(false);
                }}
                className="cursor-pointer"
              >
                Brand
              </li>
              <li
                onClick={() => {
                  navigate("/meeting", { state: { content: "small_meeting" } });
                  setSideBarOpen(false);
                }}
                className="cursor-pointer mt-10"
              >
                소모임
              </li>
              <li
                onClick={() => {
                  navigate("/toolkit");
                  setSideBarOpen(false);
                }}
                className="cursor-pointer mt-10"
              >
                Toolkit
              </li>
              <li
                onClick={() => {
                  navigate("/meeting", {
                    state: { content: "regular_meeting" },
                  });
                  setSideBarOpen(false);
                }}
                className="cursor-pointer mt-10"
              >
                정기모임
              </li>
            </ul>
          </>
        )}
      </ul>
    </>
  );
}

import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function NextArrow({ onClick }) {
  return (
    <>
      <div
        onClick={onClick}
        className="text-[2.4rem] text-[#282828] dark:text-white absolute top-[46%] right-0 z-[9999] cursor-pointer"
      >
        <BsArrowRight />
      </div>
    </>
  );
}

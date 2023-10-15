import React from "react";
import Typewriter from "typewriter-effect";

import { GiTalk } from "react-icons/gi";

export default function Community() {
  return (
    <div className="w-full pt-16">
      <div className="w-11/12 mx-auto">
        <div className="w-full mb-6 flex flex-col justify-center items-center">
          <div className="w-full text-[#ff4848] text-[1.5rem] flex justify-center items-center">
            <GiTalk />
            <p className="ml-3 font-semibold">Community</p>
          </div>

          <div className="mt-6 text-[2.8rem] text-center font-extrabold leading-normal">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("다양한 사람들이")
                  .pauseFor(200)
                  .typeString("<br/>다양하게 어우러지는 모임")
                  .start()
                  .pauseFor(200);
                // .callFunction(function (state) {
                //   state.elements.cursor.style.display = "none";
                // });
              }}
            />
          </div>

          <p className="mt-7 text-[#383535] text-[1.4rem] text-center tracking-tighter">
            다양한 사람들이 다양하게 어우러지는 모임,
            <br />
            관심사에 맞게 모임을 Pick 하세요!
          </p>
        </div>
      </div>
    </div>
  );
}

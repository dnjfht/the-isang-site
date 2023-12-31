import React from "react";

export default function TextArea({ type, id, placeholder, onChange, value }) {
  return (
    <textarea
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full mt-2 px-6 py-3 box-border rounded-lg border-[1px] border-solid border-[#f5aa15] outline-none placeholder:text-[0.9rem] placeholder:text-[#F5AA15] font-normal text-[#2b2a2a] resize-none"
      onChange={onChange}
      value={value}
      cols="30"
      rows="5"
    />
  );
}

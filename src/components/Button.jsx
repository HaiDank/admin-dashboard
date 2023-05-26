import React from "react";

const Button = ({ customFunc, icon }) => {
  return (
    <>
      <button
        type='button'
        onClick={customFunc}
        className='relative rounded-2xl p-3 text-xl hover:bg-slate-100'
      >
        {icon}
      </button>
    </>
  );
};

export default Button;

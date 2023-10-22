import React from 'react';

export const ButtonMini = ({title}) => {
  return (
    <button className='px-[10px] py-[3px] bg-[#fff3] hover:bg-[#ffffff60] text-white rounded-md' style={{ transition: '0.4s'}}>{title}</button>
  )
};

export const ButtonOutline = ({title}) => {
    return (
      <button className='border-4 border-white rounded-md bg-[#ffffff40] border-solid py-[14px] px-10 text-white font-bold hover:border-2' style={{ transition: '0.2s'}}>{title}</button>
    )
};

export const ButtonIcon = ({bg, title, img, secondary}) => {
    return (
        <button 
            className='text-white flex flex-row items-center py-2 px-4 rounded mr-3'
            style={{ backgroundColor: bg, border: secondary ? '1px solid lightgray' : '1px solid #e00707'}}
        >
            <img src={img} alt="review" />
            <span className='font-semibold ml-2' style={{ color: secondary ? 'black' : 'white'}}>{title}</span>
        </button>
    )
}
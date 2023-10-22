import React from 'react';

export const Card = ({children, style}) => {
    return(
        <div className='flex flex-col border border-solid border-gray-300 rounded p-3' style={style}>
            {children}
        </div>
    )
}

export const CardBussinessPrimary = ({img, title, desc}) => {
    return(
        <div className="flex flex-row border border-solid border-gray-300 rounded h-[150px] min-w-[500px] mt-6 mr-4">
            <img src={img} alt="pizza 1" className='h-[150px] rounded-l' />
            <div className='flex flex-col px-5 my-3'>
                <h3 className='line-clamp-1 font-bold text-lg'>{title}</h3>
                <span>🍕🍝</span>
                <span className='line-clamp-2 mt-2'>{desc}</span>
                <span className='text-[#027A97] cursor-pointer'>read more</span>
            </div>
        </div>
    )
}

export const CardBussinessSecondary = ({img, title, photo, review}) => {
    return(
        <div className="flex flex-col mr-8">
            <img src={img} alt="popular bussiness" className='min-w-[200px] h-[160px] object-cover rounded-md' />
            <h3 className='font-bold text-xl mt-4'>{title}</h3>
            <div className="flex flex-row items-center">
                <span className='text-gray-500'>{photo} Photo</span>
                <span className='text-gray-500 mx-2'>•</span>
                <span className='text-gray-500'>{review} Reviews</span>
            </div>
        </div>
    )
}

export const CardCategory = ({img, title}) => {
    return(
        <div className="flex flex-col items-center justify-center w-[160px]">
            <img src={img} alt="logo" className='w-[46px]' />
            <span className='text-center mt-2 max-w-[100px]'>{title}</span>
        </div>
    )
}
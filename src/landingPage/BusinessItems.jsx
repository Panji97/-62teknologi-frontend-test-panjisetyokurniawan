import React from 'react';
import RatingBox from '../components/ratingBox';
import Maps from '../assets/icons/map.png';
import viewDetail from '../assets/icons/eye.png'

const BussinessItems = (props) => {
  return (
    <>
      <section className='flex justify-center items-center mt-4'>
        <div className='bg-[#FFFF] w-[800px] h-[250px] px-4 py-4 rounded-md flex justify-center items-center shadow-md shadow-gray-500'>
          <img
            src={props.img}
            alt='img'
            className='w-[200px] h-[200px] object-cover rounded-sm'
          />
          <div className='w-[600px] h-[200px]'>
            <h1 className='text-lg text-left font-semibold text-black px-4 mb-3'>
              {props.title}
            </h1>
            <div className='flex justify-start items-center ml-5 mb-2'>
              <RatingBox bg={'orange'} />
              <RatingBox bg={'orange'} />
              <RatingBox bg={'orange'} />
              <RatingBox bg={'#F1F1F1'} />
              <RatingBox bg={'#F1F1F1'} />
              <span className='text-sm font-semibold px-2 mr-1 bg-[#ebebeb] p-1 text-black rounded-sm'>
                {props.review} Reviews
              </span>
            </div>
            <div className='px-4 '>
              {props.categories?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className='text-sm font-semibold px-2 mr-1 bg-[#ebebeb] p-1 text-black rounded-sm'
                  >
                    {item.title} {item.alis}
                  </span>
                );
              })}
            </div>
            <p
              className={`${
                props.isClosed ? 'text-[red]' : 'text-[#008055]'
              } uppercase text-sm font-semibold px-4 pt-3 mb-1`}
            >
              {props.isClosed ? 'Closed' : 'Open'}
              <span className='text-xs font-semibold text-black px-2'>
                11:00 AM - 10:00 PM
              </span>
            </p>
            <span className='text-sm font-semibold px-2 mr-1 bg-[#ebebeb] p-1 text-black rounded-sm ml-4'>
              {props.desc}
            </span>
            <div className='flex justify-between items-center mx-4 mt-1'>
              <div className='flex justify-center items-center'>
                <img
                  src={Maps}
                  alt='logo-maps'
                  className='w-[18px] h-[18px] object-contain mr-2'
                />
                <p className='text-[#2d2e2f] text-xs font-semibold mr-2'>
                  {props.location}
                </p>
                {/* <p className="text-[#2d2e2f] text-base font-semibold">Takeout</p> */}
              </div>
              <button
                type='button'
                onClick={props.onClick}
                className='px-3 py-2 bg-white rounded-md drop-shadow-md'>
                <img
                  src={viewDetail}
                  alt='logo-view-detail'
                  className='w-[18px] h-[18px] object-cover'
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BussinessItems;

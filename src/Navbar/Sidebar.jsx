import React from 'react';

const categories = [
  { title: 'Sandwich' },
  { title: 'Breakfast & Brunch' },
  { title: 'Mexican' },
  { title: 'Chinese' },
  { title: 'Pizza' },
];

const Sidebar = () => {
  return (
    <>
      <section className='h-auto bg-gray-800'>
        <div className='w-[250px] h-auto bg-gray-800 px-4 py-4'>
          <h1 className='text-base font-semibold text-white text-left uppercase mb-10'>
            Filters
          </h1>
          {/* button price */}
          <div className='flex justify-center items-center mt-3 mb-6'>
            <button className='bg-blue-600 px-4 py-2  rounded-l-full'>
              <span className='text-xs font-semibold text-center text-white'>
                $
              </span>
            </button>
            <button className='bg-blue-600 px-4 py-2 '>
              <span className='text-xs font-semibold text-center text-white'>
                $$
              </span>
            </button>
            <button className='bg-blue-600 px-4 py-2'>
              <span className='text-xs font-semibold text-center text-white'>
                $$$
              </span>
            </button>
            <button className='bg-blue-600 px-4 py-2 rounded-r-full '>
              <span className='text-xs font-semibold text-center text-white'>
                $$$$
              </span>
            </button>
          </div>
          {/* Category*/}
          <h1 className='text-xl font-semibold uppercase text-white text-left mt-10'>
            Category
          </h1>
          {/* button categories */}
          <div className='mt-3'>
            {categories.map((val, i) => {
              return (
                <button
                  key={i}
                  className='bg-[red] px-4 py-2 rounded-full text-center mb-2 mr-2'
                >
                  <p className='text-center text-sm font-normal text-white'>
                    {val.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;

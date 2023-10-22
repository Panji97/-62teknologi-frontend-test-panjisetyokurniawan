import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'

import Navbar from '../Navbar/Navbar'
import { getAllBussiness, getDetailBussiness } from '../store/reducer'
import Loading from '../Loading/Loading'
import BussinessItems from './BusinessItems'
import Pagination from './Pagination'
import pizza from '../assets/img/img-pizza-1.jpg'

const LandingPage = () => {
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState(1)
  const { loader, bussinesItems, totalCount } = useSelector((state) => state)
  const [limit, setLimit] = useState(5)
  const [params, setParams] = useState({
    price: '',
    categories: '',
    term: '',
  })

  const categories = [
    { title: 'Sandwich' },
    { title: 'Breakfast & Brunch' },
    { title: 'Mexican' },
    { title: 'Chinese' },
    { title: 'Pizza' },
  ]

  const valueSelect = [
    { value: 5, label: '5' },
    { value: 10, label: '10' },
    { value: totalCount, label: 'All' },
  ]

  const dispatch = useDispatch()

  const getAllBussinessBussiness = (price, categori, term) => {
    dispatch(
      getAllBussiness({
        limit: limit,
        page: activePage,
        price: price,
        categories: categori,
        term: term,
      })
    )
  }

  useEffect(() => {
    getAllBussinessBussiness()
  }, [dispatch, limit, activePage])

  let totalPost = totalCount / limit

  const paginate = (pageNumber) => setActivePage(pageNumber)
  const paginateFront = () => setActivePage(activePage + 1)
  const paginateBack = () => setActivePage(activePage - 1)

  const searchBussinessHandler = (e) => {
    e.preventDefault()
    getAllBussinessBussiness(params.price, params.categories, params.term)
  }

  const handleDetail = (e) => {
    navigate(`/detail/${e}`)
    dispatch(getDetailBussiness({ id: e }))
  }

  return (
    <>
      <div>
        <Navbar
          valueBussiness={params.term}
          onChangeBussiness={(e) =>
            setParams((prevState) => {
              return { ...prevState, term: e.target.value }
            })
          }
          onSubmit={searchBussinessHandler}
        />
        {/* wrapper jumbo */}
        <div className="flex h-full">
          <div className="w-[250px] h-auto px-4 py-4 border-r-1 border-solid bg-white border-white">
            <h1 className="text-lg font-semibold text-black text-left mb-10">
              Filters
            </h1>
            {/* button price */}
            <div className="flex justify-center items-center mt-3 mb-6 border-solid  border-gray-300 pb-8">
              <button className="bg-white px-4 py-2  rounded-l-full border-2 border-gray-400 hover:bg-blue-600">
                <span className="text-xs font-semibold text-center text-black hover:text-white">
                  $
                </span>
              </button>
              <button className="bg-white px-4 py-2 border-2 border-gray-400 hover:bg-blue-600">
                <span className="text-xs font-semibold text-center text-black hover:text-white">
                  $$
                </span>
              </button>
              <button className="bg-white px-4 py-2 border-2 border-gray-400 hover:bg-blue-600">
                <span className="text-xs font-semibold text-center text-black hover:text-white">
                  $$$
                </span>
              </button>
              <button className="bg-white px-4 py-2 rounded-r-full border-2 border-gray-400 hover:bg-blue-600">
                <span className="text-xs font-semibold text-center text-black hover:text-white">
                  $$$$
                </span>
              </button>
            </div>
            {/* Category*/}
            <h1 className="text-lg font-semibold text-black text-left mt-10">
              Category
            </h1>
            {/* button categories */}
            <div className="mt-3 border-b-2 border-gray-300 pb-5">
              {categories.map((val, i) => {
                return (
                  <button
                    key={i}
                    className="bg-blue-500 px-4 py-2 rounded-full text-center mb-2 mr-2"
                  >
                    <p className="text-center text-sm font-normal text-white ">
                      {val.title}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* wrapper bussinessItem */}
          <div className="w-full flex justify-center items-start bg-[#F1F1F1]">
            <div className="flex flex-col mt-4">
              {bussinesItems.length ? (
                <>
                  <Select
                    options={valueSelect}
                    className="w-[100px]"
                    onChange={(e) => {
                      setLimit(e.value)
                      setActivePage(1)
                    }}
                    defaultValue={valueSelect[0]}
                  />
                  {bussinesItems?.map((item, index) => {
                    return (
                      <BussinessItems
                        key={`${index}-${item.id}`}
                        title={item.name}
                        img={pizza}
                        review={`${item.review_count}`}
                        categories={item.categories}
                        isClosed={item.is_closed}
                        desc={`${item.alias} - ${item.transactions}`}
                        location={item.location?.display_address}
                        onClick={handleDetail.bind(null, item.id)}
                      />
                    )
                  })}
                  <div className="text-center py-5">
                    <Pagination
                      postsPerPage={limit}
                      totalPosts={totalPost}
                      totalCount={totalCount}
                      paginate={paginate}
                      currentPage={activePage}
                      paginateBack={paginateBack}
                      paginateFront={paginateFront}
                    />
                  </div>
                </>
              ) : (
                <p>something went wrong</p>
              )}
            </div>
          </div>
        </div>
        {loader && <Loading />}

        <div></div>
      </div>
    </>
  )
}

export default LandingPage

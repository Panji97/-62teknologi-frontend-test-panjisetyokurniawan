import React, { useEffect } from 'react'
import check from '../assets/icon/ic-check-blue.svg'
import Navbar from '../Navbar/Navbar'
import RatingBox from '../components/ratingBox'
import { ButtonIcon, ButtonMini, ButtonOutline } from '../components/button'
import starOutline from '../assets/icon/ic-star-outline.svg'
import camera from '../assets/icon/ic-camera.svg'
import upload from '../assets/icon/ic-upload.svg'
import bookmark from '../assets/icon/ic-bookmark.svg'
import add from '../assets/icon/ic-add.svg'
import link from '../assets/icon/ic-link.svg'
import hand from '../assets/icon/ic-hand.svg'
import call from '../assets/icon/ic-call.svg'
import logo1 from '../assets/icon/ic-logo-1.png'
import logo2 from '../assets/icon/ic-logo-2.png'
import logo3 from '../assets/icon/ic-logo-3.png'
import logo4 from '../assets/icon/ic-logo-4.png'
import logo5 from '../assets/icon/ic-logo-5.png'
import logo6 from '../assets/icon/ic-logo-6.png'
import office from '../assets/icon/ic-office.svg'
import images from '../assets/img/food.jpg'
import arrowRight from '../assets/icon/ic-arrow-right.svg'
import {
  CardBussinessPrimary,
  CardBussinessSecondary,
  Card,
  CardCategory,
} from '../components/card'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailBussiness } from '../store/reducer'

const DetailPage = () => {
  const dispatch = useDispatch()
  const { detailItems } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getDetailBussiness())
  }, [dispatch])

  const param = useParams()

  const randomImage = () => {
    return Math.round(Math.random(1, 99).toString())
  }

  return (
    <>
      <Navbar />
      <div
        className="bg-white h-[400px] object-cover"
        style={{
          backgroundImage: `url(${images})`,
        }}
      >
        <div className="container mx-auto flex flex-col pt-28 px-10">
          <h1 className="text-white text-[42px] font-bold">
            {detailItems.name}
          </h1>
          <h1 className="text-white text-[42px] font-bold">
            {detailItems.alias}
          </h1>
          <div className="flex flex-row items-center mt-2">
            <RatingBox bg={'orange'} />
            <RatingBox bg={'orange'} />
            <RatingBox bg={'orange'} />
            <RatingBox bg={'#fff3'} />
            <RatingBox bg={'#fff3'} />
            <h2 className="text-white font-bold text-lg ml-2">
              {detailItems.review_count} reviews
            </h2>
          </div>
          <div className="flex flex-row justify-between items-center mt-4">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <img src={check} alt="check" />
                <span className="text-[#58B4FF] ml-2 font-bold tracking-wider">
                  {detailItems.transactions}
                </span>
                <span className="text-white mx-3">•</span>
                {detailItems.categories?.map((item, index) => (
                  <span key={index} className="text-white font-bold mr-4">
                    {item.title}
                  </span>
                ))}
                <ButtonMini title={'Edit'} />
              </div>
              <div className="flex flex-row items-center mt-3">
                <span
                  className={`${
                    detailItems.is_closed ? 'text-[#008055]' : 'text-[red]'
                  } ml-2 font-bold tracking-wider mr-2`}
                >
                  {detailItems.is_closed ? 'Open' : 'Closed'}
                </span>
                <span className="text-white font-bold mr-4">
                  11:00 AM - 10:00 PM
                </span>
                <ButtonMini title={'See hours'} />
              </div>
            </div>
            <ButtonOutline title={'See all 57 photos'} />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-row">
        <div className=" w-[70%] mr-14 mb-96 pl-10">
          <section className="my-6 flex flex-row items-center ">
            <ButtonIcon
              bg={'#e00707'}
              title={'Write a review'}
              img={starOutline}
            />
            <ButtonIcon
              bg={'#ffffff'}
              title={'Add photo'}
              img={camera}
              secondary
            />
            <ButtonIcon bg={'#ffffff'} title={'Share'} img={upload} secondary />
            <ButtonIcon
              bg={'#ffffff'}
              title={'Save'}
              img={bookmark}
              secondary
            />
            <ButtonIcon bg={'#ffffff'} title={'Follow'} img={add} secondary />
          </section>
          <hr />
          <section className="flex flex-col bg-white">
            <h3 className="font-bold text-2xl mt-6">
              Updates From This Business
            </h3>
            <div className="flex flex-row mb-6 overflow-x-scroll overflow-y-hidden custom">
              <CardBussinessPrimary
                img={images}
                title={'20% OFF ITEMS OF THE MONTH'}
                desc={
                  "Enjoy 20% off our Philly Pizza & Linguine with Clams Sauce (red or white) all month long. #AmicisBayArea (Use the ‘promotions’ menu. Valid on pick-up & delivery orders only via the Amici's website)"
                }
              />
              <CardBussinessPrimary
                img={images}
                title={"IT'S NATIONAL PIZZA MONTH!"}
                desc={
                  'PROMO ALERT 🚨 We’re celebrating #NationalPizzaMonth with 20% off all pick-up orders $30+ Mon-Thurs when you order direct. Promo valid Mon-Thurs from 10/3-10/27. Use code ‘PIZZAMONTH’ at checkout.'
                }
              />
              <CardBussinessPrimary
                img={images}
                title={"IT'S NATIONAL PIZZA MONTH!"}
                desc={
                  'PROMO ALERT 🚨 We’re celebrating #NationalPizzaMonth with 20% off all pick-up orders $30+ Mon-Thurs when you order direct. Promo valid Mon-Thurs from 10/3-10/27. Use code ‘PIZZAMONTH’ at checkout.'
                }
              />
              <CardBussinessPrimary
                img={images}
                title={"IT'S NATIONAL PIZZA MONTH!"}
                desc={
                  'PROMO ALERT 🚨 We’re celebrating #NationalPizzaMonth with 20% off all pick-up orders $30+ Mon-Thurs when you order direct. Promo valid Mon-Thurs from 10/3-10/27. Use code ‘PIZZAMONTH’ at checkout.'
                }
              />
            </div>
          </section>
          <hr />
          <section className="flex flex-col">
            <h3 className="font-bold text-2xl mt-6">Menu</h3>
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-between mt-4">
                <span className="font-bold text-xl">Popular dishes</span>
                <div className="flex flex-row items-center cursor-pointer">
                  <span className="font-bold text-xl mr-2">View full menu</span>
                  <img src={arrowRight} alt="next" />
                </div>
              </div>
              <div className="flex flex-row mt-5 overflow-x-scroll overflow-y-hidden custom">
                <CardBussinessSecondary
                  img={images}
                  title={'Amici'}
                  photo={1}
                  review={3}
                />
                <CardBussinessSecondary
                  img={images}
                  title={'Chicken Wings'}
                  photo={2}
                  review={2}
                />
                <CardBussinessSecondary
                  img={images}
                  title={'Sloppy Joe'}
                  photo={1}
                  review={1}
                />
                <CardBussinessSecondary
                  img={images}
                  title={'Trentino'}
                  photo={1}
                  review={1}
                />
                <CardBussinessSecondary
                  img={images}
                  title={'Mozza Swiss'}
                  photo={1}
                  review={3}
                />
                <CardBussinessSecondary
                  img={images}
                  title={'Indian Pizza'}
                  photo={1}
                  review={3}
                />
              </div>
            </div>
          </section>
          <section className="mt-4 mb-6">
            <ButtonIcon
              bg={'#ffffff'}
              title={'Website menu'}
              img={link}
              secondary
            />
          </section>
          <hr />
          <section className="flex flex-col">
            <h3 className="font-bold text-2xl mt-6">
              Highlights from the Business
            </h3>
            <div className="flex flex-row items-center mt-5">
              <CardCategory img={logo1} title={'Category service'} />
              <CardCategory img={logo2} title={'Large group friendly'} />
              <CardCategory img={logo3} title={'Kid friendly'} />
              <CardCategory img={logo4} title={'Vegetarian friendly'} />
              <CardCategory img={logo5} title={'Vegan friendly'} />
              <CardCategory img={logo6} title={'Casual dining'} />
            </div>
          </section>
        </div>
        <div
          className="w-[30%] h-screen"
          style={{ position: 'sticky', top: '0' }}
        >
          <Card style={{ marginTop: '24px' }}>
            <div className="flex flex-row items-center mb-3">
              <img src={hand} alt="icon" />
              <span className="font-bold text-lg ml-6">
                Place your order now!
              </span>
            </div>
            <button className="bg-[#e00707] text-white rounded font-semibold py-[6px] text-lg">
              Order Online
            </button>
          </Card>
          <Card style={{ marginTop: '24px' }}>
            <div className="flex flex-row items-center justify-between mb-3">
              <a
                href="https://www.amicis.com"
                className="text-[#58B4FF] font-semibold text-lg hover:underline"
              >
                https://www.amicis.com
              </a>
              <img src={link} alt="link" />
            </div>
            <hr />
            <div className="flex flex-row items-center justify-between my-3">
              <span className="font-semibold text-lg">
                {detailItems.display_phone}
              </span>
              <img src={call} alt="phone" />
            </div>
            <hr />
            <div className="flex flex-row items-center justify-between mt-3">
              <div className="flex flex-col">
                <a
                  href="https://earth.google.com/web/"
                  className="text-[#58B4FF] font-semibold text-lg hover:underline"
                >
                  Get Directions
                </a>
                <div className="w-[200px] font-semibold text-xs text-left">
                  {detailItems.location?.display_address}
                </div>
              </div>
              <img src={office} alt="office" />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default DetailPage

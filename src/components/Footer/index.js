"use client"
import React from 'react'
import { constants } from '@/helpers/constants'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = ({className, nigeria, usa, canada, uk}) => {
  const isNigeria = `${nigeria}` || 'block'
  const isUsa = `${usa}` || 'block'
  const isCanada = `${canada}` || 'block'
  const isUk = `${uk}` || 'block'

  return (
    <footer id='footer' className='md:mt-28 mt-16 pt-10 font-plus bg-black'>
      <div className='max-w-default mx-auto px-4'>
        <div className="grid gap-4 content-center md:grid-cols-4 lg:grid-cols-4 border-b border-[#303030] pb-5">
          <div className="max-w-230 col-span-1 text-14">
              <Image src={constants.logoWhite} alt='smg logo' className='mb-7' />
              <div className={`nigeria ${isNigeria} ${className}`}>
                <p className='text-white text-14'>Nigeria 🇳🇬</p>
                <p className='text-white text-14 mb-5'>Suite 101, Plot 9 Gbagada - Oworonshoki Expy, beside UPS, Araromi 105102, Lagos, Nigeria</p>
              </div>
              <div className={`canada ${isCanada} ${className}`}>
                <p className='text-white text-14'>Canada🇨🇦 </p>
                <p className='text-white text-14 mb-5'>3649 Green Bank Road <br />Regina SK S4V 1M2</p>
              </div>
              <div className={`usa ${isUsa} ${className}`}>
                <p className='text-white text-14'>United States 🇺🇸</p>
                <p className='text-white text-14 mb-5'>909 Davis Str. Suite 500 <br />Evanston IL 60201</p>
              </div>
          </div>
          <div className="max-w-[200px] col-span-1 md:text-14 text-14">
            <h6 className='text-primary font-bold'>Entities</h6>
            <ul className='pt-3 mb-6'>
              <li className='mb-2'><Link href='https://sellmedia.ca' target='_blank' rel='noreferrer' className='text-white hover:text-primary'>SMG</Link></li>
              <li className='mb-2'><Link href='https://moneytrip.com' target='_blank' rel='noreferrer' className='text-white hover:text-primary'>MoneyTRIP</Link></li>
            </ul>
            <h6 className='text-primary font-bold'>Products</h6>
            <ul className='pt-3 mb-5'>
              <li className='mb-2'><Link href='#' className='text-white hover:text-primary'>Settla</Link></li>
              <li className='mb-2'><Link href='#' className='text-white hover:text-primary'>Supplr</Link></li>
            </ul>
          </div>
          <div className="max-w-[200px] col-span-1 md:text-14 text-14">
            <h6 className='text-primary font-bold'>Quick Links</h6>
            <ul className='pt-3 mb-6'>
              <li className='mb-2'><Link href='#company' className='text-white hover:text-primary'>Company</Link></li>
              <li className='mb-2'><Link href='#crs' className='text-white hover:text-primary'>CRS</Link></li>
              <li className='mb-2'><Link href='#partnership' className='text-white hover:text-primary'>Partnership</Link></li>
              <li className='mb-2'><Link href='#contact' className='text-white hover:text-primary'>Contact</Link></li>
            </ul>
            <h6 className='text-primary font-bold'>Social Media</h6>
            <div className='flex items-center pt-3'>
                <a href='https://twitter.com/SellMediaInc' target='_blank' rel="noreferrer" className='w-35 h-35 rounded-full flex justify-center items-center bg-white/10 hover:bg-primary mr-2 text-white'>
                    <FaTwitter size={20} />
                    {/* <Image src={constants.twitter} alt='smg' /> */}
                </a>
                <a href='https://www.linkedin.com/company/sellmedia-inc/' target='_blank' rel="noreferrer" className='w-35 h-35 rounded-full flex justify-center items-center bg-white/10 hover:bg-primary mr-2 text-white'>
                    <FaLinkedinIn size={20} />
                    {/* <Image src={constants.linkedin} alt='smg' /> */}
                </a>
                <a href='https://www.facebook.com/sellmediagroup' target='_blank' rel="noreferrer" className='w-35 h-35 rounded-full flex justify-center items-center bg-white/10 hover:bg-primary mr-2 text-white'>
                    <FaFacebookF size={20} />
                    {/* <Image src={constants.facebook} alt='smg' /> */}
                </a>
                <a href='https://www.instagram.com/sellmediainc/' target='_blank' rel="noreferrer" className='w-35 h-35 rounded-full flex justify-center items-center bg-white/10 hover:bg-primary mr-2 text-white'>
                    <FaInstagram size={20} />
                    {/* <Image src={constants.instagram} alt='smg' /> */}
                </a>
                {/* <a href='https://www.youtube.com/@SellMediaInc' target='_blank' rel="noreferrer" className='w-35 h-35 rounded-full flex justify-center items-center bg-white/10 hover:bg-primary mr-2 text-white'>
                    <FaYoutube size={20} />
                </a> */}
            </div>
            <p className='text-white pt-2 mb-5'>Boss Global</p>
          </div>
          <div className="max-w-[200px] col-span-1 md:text-14 text-14">
            <h6 className='text-primary font-bold'>Talk to Boss Global</h6>
            {/* <div className='w-35 h-35 rounded-full flex justify-center items-center bg-white/10 hover:bg-primary mr-2 mt-3'>
              <Image src={constants.email} alt='smg' />
            </div> */}
            <div className='text-white mb-2 pt-3'>
              <ul>
                <li className={`nigeria ${isNigeria} ${className}`}><a href='mailto:hello@boss-global.ca' className='flex items-center hover:text-primary'>
                hello@boss-global.ca</a></li>
              </ul>
            </div>

            {/* <div className='w-35 h-35 rounded-full flex justify-center items-center bg-white/10 hover:bg-primary mr-2'>
              <Image src={constants.call} alt='smg' />
            </div> */}
            <ul className='text-white'>
              <li className={`nigeria ${isNigeria} ${className}`}><a href='tel:+234 1330 0444' className='flex items-center hover:text-primary'>
                +234 1330 0444</a></li>
            </ul>
          </div>
        </div>
        <div className='text-center py-6'>
          <p className='text-[#828282] text-14'>©2024 Boss Global. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

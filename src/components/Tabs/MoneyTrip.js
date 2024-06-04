import { constants } from '@/helpers/constants'
import { english } from '@/helpers/english'
import Image from 'next/image'
import React from 'react'
import ButtonLink from '../elements/forms/ButtonLink2'

const MoneyTrip = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center pb-6'>
        <div className='flex items-center gap-3'>
          <Image src={constants.moneytripLogo} alt='MoneyTrip' className='product-logo' />
          <div className='md:pl-2'>
            <h6 className='text-xl md:text-2xl font-semibold'>{english.landing.section5MoneyTrip}</h6>
            <p className='text-[13px] md:text-lg'>{english.landing.section5MoneyTripSub}</p>
            <p className='text-[13px] md:text-lg'>{english.landing.section5MoneyTripSub2}</p>
          </div>
        </div>
        <ButtonLink link='#' title={english.landing.section5Btn2} className='bg-primary text-[white] w-[185px]' />
      </div>
      <p className='text-[14px] md:text-[16px] text-[#717171] mb-4'>{english.landing.section5MoneyTripAbout}</p>
      <p className='text-[14px] md:text-[16px] text-[#717171]'>{english.landing.section5MoneyTripAbout2}</p>

      <div className='grid gap-3 grid-cols-1 md:grid-cols-5 pt-6'>
        <div className='col-span-1'>
          <div className='bg-[grey]/20 h-[340px] object-cover overflow-hidden'></div>
        </div>
        <div className='col-span-1'>
          <div className='bg-[grey]/20 h-[340px] object-cover overflow-hidden'></div>
        </div>
        <div className='col-span-1'>
          <div className='bg-[grey]/20 h-[340px] object-cover overflow-hidden'></div>
        </div>
        <div className='col-span-1'>
          <div className='bg-[grey]/20 h-[340px] object-cover overflow-hidden'></div>
        </div>
        <div className='col-span-1'>
          <div className='bg-[grey]/20 h-[340px] object-cover overflow-hidden'></div>
        </div>
      </div>
    </div>
  )
}

export default MoneyTrip;

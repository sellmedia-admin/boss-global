import { constants } from '@/helpers/constants'
import { english } from '@/helpers/english'
import Image from 'next/image'
import ButtonLink from '../elements/forms/ButtonLink2'

const SMG = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-between items-center pb-6'>
        <div className='flex items-center gap-3'>
          <Image src={constants.smgLogo} alt='Smg' className='product-logo' />
          <div className='md:pl-2'>
            <h6 className='text-xl md:text-2xl font-semibold'>{english.landing.section5Smg}</h6>
            <p className='text-[13px] md:text-lg'>{english.landing.section5SmgSub}</p>
            <p className='text-[13px] md:text-lg'>{english.landing.section5SmgSub2}</p>
          </div>
        </div>
        <ButtonLink link='#' title={english.landing.section5Btn2} className='bg-primary text-[white] w-[185px]' />
      </div>
      <p className='text-[14px] md:text-[16px] text-[#717171] mb-4'>{english.landing.section5SmgAbout}</p>
      <p className='text-[14px] md:text-[16px] text-[#717171]'>{english.landing.section5SmgAbout2}</p>
      <p className='text-[14px] md:text-[16px] text-[#000000] pt-5'>{english.landing.section5Clientele}</p>

      <div className='flex justify-around flex-wrap gap-4 items-center pt-3'>
        {constants.clientele?.map(item => (
        <div key={item.id} >
            <Image src={item.icon} alt='boss global' />
        </div>
        ))}
      </div>

      <div className='grid gap-3 grid-cols-1 md:grid-cols-5 pt-8'>
        <div className='col-span-1'>
          <div className='bg-[grey]/20 h-[340px] object-cover overflow-hidden'>
            <Image src={constants.gtb737} alt='boss global' />
          </div>
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

export default SMG;

import { english } from '@/helpers/english'
import ButtonLink from '../elements/forms/ButtonLink'
import { constants } from '@/helpers/constants'
import Image from 'next/image'

const UnleashIdeas = () => {
  return (
    <div className='bg-pattern bg-cover bg-center bg-no-repeat w-full pt-20 md:pt-34'>
      <div className='max-w-default mx-auto w-full px-4'>
        <div className='grid gap-4 content-center items-center grid-cols-1 md:grid-cols-2'>
            <div className='col-span-1'>
                <div className='mx-w-413'>
                    <h3 className='text-xl md:text-[43px] md:leading-10 font-medium'>{english.landing.section3Title}</h3>
                    <p className="text-[15px] md:text-lg pt-3">{english.landing.section3Subtitle}</p>
                    <ButtonLink link='/' title={english.landing.section3BtnTitle} className='bg-primary text-white font-normal mt-7' />
                </div>
            </div>
            <div className='col-span-1 bg-globe bg-contain bg-center bg-no-repeat h-full w-full flex justify-center pt-5'>
                <Image src={constants.unleash} alt='boss global' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default UnleashIdeas

import { english } from '@/helpers/english'
import ButtonLink from '../elements/forms/ButtonLink'
import Navigation from '../Navigation'

const HeroSection = () => {
  return (
    <div className='bg-heroBg bg-cover bg-center bg-no-repeat relative h-full lg:h-screen md:h-screen hero_section mb-36'>
      <div className='h-full w-full flex flex-col justify-between'>
        <Navigation />
        <div className='text-white text-center w-full max-w-760 mx-auto px-4 py-10'>
            <h1 className='text-xl md:text-[52px] md:leading-[52px] font-semibold mb-4'>{english.landing.heroTitle}</h1>
            <p className='text-[15px] md:text-[21px]'>{english.landing.heroSubtitle}</p>
            <div className='flex justify-center mt-5 md:mt-8'>
                <ButtonLink link='/' title={english.landing.heroBtn} />
            </div>
        </div>
        <div className='max-w-default mx-auto w-full px-4 -mb-10'>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-3'>
                <div className='col-span-1 bg-ourCompany bg-cover bg-center bg-no-repeat h-285 flex items-end'>
                    <div className='bg-secondary text-primary text-lg md:text-[22px] w-full h-99 flex items-center pl-5'>{english.landing.heroCard1}</div>
                </div>
                <div className='col-span-1 bg-productEntity bg-cover bg-center bg-no-repeat h-285 flex items-end'>
                    <div className='bg-secondary text-primary text-lg md:text-[22px] w-full h-99 flex items-center pl-5'>{english.landing.heroCard2}</div>
                </div>
                <div className='col-span-1 bg-pressRoom bg-cover bg-center bg-no-repeat h-285 flex items-end'>
                    <div className='bg-secondary text-primary text-lg md:text-[22px] w-full h-99 flex items-center pl-5'>{english.landing.heroCard3}</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

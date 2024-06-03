import { english } from '@/helpers/english'
import ButtonLink from '../elements/forms/ButtonLink'

const Partnership = () => {
  return (
    <div className='max-w-default mx-auto w-full h-483 px-4 bg-partnership bg-cover bg-center bg-no-repeat flex items-end mb-36'>
      <div className='grid gap-4 content-center grid-cols-1 md:grid-cols-2'>
            <div className='col-span-1 max-w-403 bg-primary text-white mx-5 -mb-10 md:p-8 p-6'>
                <h4 className='text-xl md:text-[30px] md:leading-[36px] font-medium mb-3'>{english.landing.section4Title}</h4>
                <p className='text-[14px] md:text-[16px] pb-8'>{english.landing.section4Subtitle}</p>
                <ButtonLink link='/' title={english.landing.heroBtn} className='w-full' />
            </div>
      </div>
    </div>
  )
}

export default Partnership

import { english } from '@/helpers/english'
import Tabs from '../Tabs'

const Entities = () => {
  return (
    <div id='entities' className='max-w-default mx-auto w-full px-4 pb-4'>
      <div className='text-center max-w-618 mx-auto pb-8' data-aos="fade-up" data-aos-duration="700">
        <h5 className='text-[28px] md:text-[37px] font-semibold'>{english.landing.section5Title}</h5>
        <p className='text-[15px] md:text-lg'>{english.landing.section5Subtitle}</p>
      </div>
      <Tabs data-aos="fade-up" data-aos-duration="700" />
    </div>
  )
}

export default Entities

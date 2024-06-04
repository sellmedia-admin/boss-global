import { english } from '@/helpers/english'

const CorporateResponsibilities = () => {
  return (
    <div id='crs' className='max-w-default mx-auto w-full px-4 mb-28'>
      <div className='text-center max-w-618 mx-auto pb-8' data-aos="fade-up" data-aos-duration="500">
        <h5 className='text-[28px] md:text-[37px] font-semibold'>{english.landing.section6Title}</h5>
        <p className='text-[15px] md:text-lg'>{english.landing.section6Subtitle}</p>
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-3' data-aos="fade-up" data-aos-duration="1000">
            <div className='col-span-1 bg-ecoFriendly bg-cover bg-center bg-no-repeat md:h-490 h-285 flex items-end'>
                <div className='bg-secondary text-black text-lg md:text-[22px] w-full md:py-6 py-4 flex items-center px-5 md:px-8'>
                    <div>
                        <h5 className='text-lg md:text-xl md:leading-6 max-w-328'>{english.landing.section6Card1}</h5>
                    </div>
                </div>
            </div>
            <div className='col-span-1 bg-techEducation bg-cover bg-center bg-no-repeat md:h-490 h-285 flex items-end'>
                <div className='bg-secondary text-black text-lg md:text-[22px] w-full md:py-6 py-4 flex items-center px-5 md:px-8'>
                    <div>
                        <h5 className='text-lg md:text-xl md:leading-6 max-w-328'>{english.landing.section6Card2}</h5>
                    </div>
                </div>
            </div>
            <div className='col-span-1 bg-mediaTech bg-cover bg-center bg-no-repeat md:h-490 h-285 flex items-end'>
                <div className='bg-secondary text-black text-lg md:text-[22px] w-full md:py-6 py-4 flex items-center px-5 md:px-8'>
                    <div>
                        <h5 className='text-lg md:text-xl md:leading-6 max-w-328'>{english.landing.section6Card3}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CorporateResponsibilities;
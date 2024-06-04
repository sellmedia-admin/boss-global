import { english } from '@/helpers/english'

const DrivingInnovation = () => {
  return (
    <div id='company' className='max-w-default mx-auto w-full px-4'>
        <div className='mb-8' data-aos="fade-up" data-aos-duration="500">
            <h2 className='text-xl md:text-[30px] md:leading-8 font-medium'>{english.landing.section2Title}</h2>
            <p className='text-sm md:text-lg max-w-671 py-3'>{english.landing.section2Subtitle}</p>
        </div>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2' data-aos="fade-up" data-aos-duration="700">
            <div className='col-span-1 bg-mediaTech bg-cover bg-center bg-no-repeat md:h-738 h-285 flex items-end'>
                <div className='section_2 bg-secondary text-black text-lg md:text-[22px] w-full md:py-6 py-4 flex items-center px-5 md:px-8'>
                    <div>
                        <h5 className='text-lg md:text-[30px] md:leading-8 max-w-328'>{english.landing.section2CardTitle1}</h5>
                        <p className="text-[15px] md:text-[20px] pt-8 pb-4">{english.landing.section2CardSubtitle1}</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 bg-globalConnect bg-cover bg-center bg-no-repeat md:h-738 h-285 flex items-end'>
                <div className='section_2 bg-secondary text-black text-lg md:text-[22px] w-full md:py-6 py-4 flex items-center px-5 md:px-8'>
                    <div>
                        <h5 className='text-lg md:text-[30px] md:leading-8 max-w-328'>{english.landing.section2CardTitle2}</h5>
                        <p className="text-[15px] md:text-[20px] pt-8 pb-4">{english.landing.section2CardSubtitle2}</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 bg-mediaTech bg-cover bg-center bg-no-repeat md:h-738 h-285 flex items-end'>
                <div className='section_2 bg-secondary text-black text-lg md:text-[22px] w-full md:py-6 py-4 flex items-center px-5 md:px-8'>
                    <div>
                        <h5 className='text-lg md:text-[30px] md:leading-8 max-w-328'>{english.landing.section2CardTitle3}</h5>
                        <p className="text-[15px] md:text-[20px] pt-8 pb-4">{english.landing.section2CardSubtitle3}</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 bg-mediaTech bg-cover bg-center bg-no-repeat md:h-738 h-285 flex items-end'>
                <div className='section_2 bg-secondary text-black text-lg md:text-[22px] w-full md:py-6 py-4 flex items-center px-5 md:px-8'>
                    <div>
                        <h5 className='text-lg md:text-[30px] md:leading-8 max-w-328'>{english.landing.section2CardTitle4}</h5>
                        <p className="text-[15px] md:text-[20px] pt-8 pb-4">{english.landing.section2CardSubtitle4}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DrivingInnovation

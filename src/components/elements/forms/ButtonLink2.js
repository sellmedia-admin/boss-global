import React from 'react'
import Link from 'next/link';

const ButtonLink = ({title, link, className}) => {
  return (
    <Link href={link} className={`px-2 py-2 bg-primary text-white hover:bg-secondary hover:text-primary font-medium flex justify-center items-center md:text-[16px] text-[12px] md:w-[182px] w-[130px] md:h-[55px] h-[45px] ${className}`}>
        {title}
    </Link>
  )
}

export default ButtonLink;
import React from 'react'
import Link from 'next/link';

const ButtonLink = ({title, link, className}) => {
  return (
    <Link href={link} className={`px-2 py-2 bg-white text-primary hover:bg-secondary hover:text-primary font-semibold flex justify-center items-center md:text-[16px] text-[14px] md:w-[290px] w-[235px] h-[55px] ${className}`}>
        {title}
    </Link>
  )
}

export default ButtonLink;
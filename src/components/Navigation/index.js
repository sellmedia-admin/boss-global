import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { constants } from '@/helpers/constants'
import './nav.css'

const Navigation = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-default mx-auto px-4'>
          <nav className="nav_links flex justify-between items-center py-5 md:text-16 text-[12px]">
            <Link href="/"><Image src={constants.logo} alt="smg logo" className='logo' /></Link>
            <div className="flex gap-4 items-center text-black">
                <Link href="/" className="text-black hover:text-secondary">Company</Link>
                <Link href="/" className="text-black hover:text-secondary">Entities/Products</Link>
                <Link href="/" className="text-black hover:text-secondary">CRS</Link>
                <Link href="/" className="text-black hover:text-secondary">Investors</Link>
                <Link href="#" className="text-black hover:text-secondary">Partnerships</Link>
                <Link href="#" className="text-black hover:text-secondary">Contact</Link>
                <Link href="#" className="text-black hover:text-secondary">Press</Link>
            </div>
          </nav>
          <nav className="responsive_nav_mobile">
            <div className="">
              <input id="responsive-menu" type="checkbox" />
              <label htmlFor="responsive-menu"><Link href="/"><Image src={constants.logo} alt="logo" className='logo' /></Link> <span id="menu-icon"></span></label>
              <div id="overlay"></div>
              <ul>
                <li><Link href="/" className="px-2 hover:text-primary">Company</Link></li>
                <li><Link href="/" className="px-2 hover:text-primary">Products</Link></li>
                <li><Link href="/" className="px-2 hover:text-primary">CRS</Link></li>
                <li><Link href="/" className="px-2 hover:text-primary">Investors</Link></li>
                <li><Link href="#" className="px-2 hover:text-primary">Partnerships</Link></li>
                <li><Link href="#" className="px-2 hover:text-primary">Contact</Link></li>
                <li><Link href="#" className="px-2 hover:text-primary">Press</Link></li>
              </ul>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Navigation

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex-col flex gap-4 p-5 text-center sm:flex-row '>
        <Link href="/">
          <Image
            src = "/assets/images/Logom.svg"
            alt = "logo"
            width={128}
            height={38}
          />
        </Link>
        <p>Developed with ❤️ by <span className='font-bold'>Md Tarique Hussain</span></p>
      </div>
    </footer>
  )
}

export default Footer
import Section from './Section'
import React from 'react'

const Footer = () => {
  return (
<Section id="footer" showStroke={true} crosses>

<div className="flex sora">
    <div><h1 className="h1 text-5xl">Contact Us</h1><p className="mt-3 text-n-2 md:text-sm lg:text-md">If you got any questions about meetings, issues or anything else, please call us at +4915170073553 or contact us on Discord(swing.js) <br />We are here for you almost anytime; otherwise, we will call you back within 24 hours!</p></div>
</div>

<div className="flex sm:justify-start justify-center items-center max-sm:flex-col gap-2 mt-[1rem]">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved,
        </p>
        <a className="caption text-n-4 hover:text-white transition duration-150 cursor-pointer" href='#impressum'>Impressum</a>
        <span className='caption text-n-4'>&</span>
        <a className="caption text-n-4 hover:text-white transition duration-150 cursor-pointer" href='#privacy-policy'>Privacy Policy</a>
        <br />
        <div className='flex flex-wrap justify-end text-center items-center'>
        <span className='caption text-n-4'> Design credits: <a href='https://www.jsmastery.pro' className='caption text-n-4 hover:text-white transition duration-150 cursor-pointer' target='_blank'>JS Mastery</a></span>
        </div>
       </div>
</Section>
  )
}

export default Footer

import React from 'react';
import styles from '../../style';
import {logo} from '../../assets'
import {socialMedia} from '../../constants'
const Footer = () => {
    return (
        <section>
        <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <footer className="footer text-base-content p-10">
  <aside>
   <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain' />
    <p className="text-[#FFFFFFB2]">
    A new way to make the payments
      <br />
      easy, reliable and secure.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-white">Services</h6>
    <a className="link link-hover text-[#FFFFFFB2]">Branding</a>
    <a className="link link-hover text-[#FFFFFFB2]">Design</a>
    <a className="link link-hover text-[#FFFFFFB2]">Marketing</a>
    <a className="link link-hover text-[#FFFFFFB2]">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Company</h6>
    <a className="link link-hover text-[#FFFFFFB2]">About us</a>
    <a className="link link-hover text-[#FFFFFFB2]">Contact</a>
    <a className="link link-hover text-[#FFFFFFB2]">Jobs</a>
    <a className="link link-hover text-[#FFFFFFB2]">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Legal</h6>
    <a className="link link-hover text-[#FFFFFFB2]">Terms of use</a>
    <a className="link link-hover text-[#FFFFFFB2]">Privacy policy</a>
    <a className="link link-hover text-[#FFFFFFB2]">Cookie policy</a>
  </nav>
</footer>
      
        </div>
  
    </div>
          <div className='md:mx-24 mb-16 flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]'>
          <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          Copyright © 2024 HooBank . All Rights Reserved</p> 
           <div className='flex flex-row md:mt-0 mt-6'>
            {
                socialMedia.map((social, index)=>( 
                <img key={social.id}
                src={social.icon}
                alt='social icon'
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6': 'mr-0'}`}
                ></img>
                ))
            }

           </div>
       </div>
       </section>
    );
};

export default Footer;
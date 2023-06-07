import React from 'react';
import { Link } from 'react-router-dom';
import {FaLinkedinIn, FaFacebookF, FaInstagram,FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (


    <div className='bg-sky-400 mt-16 py-16'>
        <div className='mx-8 lg:mx-32 text-white flex flex-col lg:flex-row justify-between gap-x-16'>
            <div className='w-full lg:w-[40%]'>
                <Link to="/"> 
                <h3 className='uppercase font-openSans font-semibold text-4xl'>Fit<span className='text-yellow-300'>ify</span></h3>
                </Link>
                <p className='mt-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, officiis aut? Rem fugit molestias delectus, nulla praesentium illum et rerum non omnis quaerat quisquam fuga voluptatem eos fugiat tempora nostrum.</p>
                <div className='flex mt-4'>
                    <div className='bg-slate-200 p-2 rounded-lg mr-3'>
                        <FaLinkedinIn color='rgb(51 65 85)' size="1.2rem"/>
                    </div>
                    <div className='bg-slate-200 p-2 rounded-lg mr-3'>
                        <FaFacebookF color='rgb(51 65 85)' size="1.2rem"/>
                    </div>
                    <div className='bg-slate-200 p-2 rounded-lg mr-3'>
                        <FaInstagram color='rgb(51 65 85)' size="1.2rem"/>
                    </div>
                    <div className='bg-slate-200 p-2 rounded-lg'>
                        <FaTwitter color='rgb(51 65 85)' size="1.2rem"/>
                    </div>
                </div>
            </div>

            <div className='mt-12 w-full lg:mt-0 lg:w-[60%]'>
            <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col'>
                    <h3 className='font-semibold text-lg mb-2'>Links</h3>
                    <Link className="mb-2 " to="/" >Home</Link>
                    <Link className="mb-2 " to="/about">About</Link>
                    <Link className="mb-2 " to="/plans">Plans</Link>
                    <Link className="mb-2 " to="/trainers">Trainers</Link>
                    <Link className="mb-2 " to="/blog">Blog</Link>
                </div>

                <div className='flex flex-col'>
                    <h3 className='font-semibold text-lg mb-2'>Insights</h3>
                    <Link className="mb-2 " to="/blog">Blog</Link>
                    <Link className="mb-2 " to="/caseStudies">Case Studies</Link>
                    <Link className="mb-2 " to="/events">Events</Link>
                    <Link className="mb-2 " to="/communities">Communities</Link>
                    <Link className="mb-2 " to="/faqs">FAQs</Link>
                </div>

                <div className='flex flex-col'>
                    <h3 className='font-semibold text-lg mb-2'>Get In Touch</h3>
                    <Link className='mb-2 ' to="/contact">Contact Us</Link>
                    <Link className='mb-2 ' to="/support">Support</Link>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
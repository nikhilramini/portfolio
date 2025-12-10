import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>Hi, I'm Ramini Nikhil Sai, AI/ML Engineer with 5+ years of combined experience across AI, machine learning, software engineering, cloud systems, Software engineering and intelligent automation, including 2+ years of direct industry experience building scalable ML systems, LLM-powered pipelines, and cloud-integrated backend services. As a seasoned <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/nikhil-sai-r-408152213' target='_blank' rel='noreferrer'>Software developer</a> I possess strong expertise in programming, data engineering, machine learning, and backend system development, with proficiency in Python, Java, C, SQL, and cloud technologies like AWS. My experience includes Programming, building scalable solutions, and deploying efficient systems. I am committed to continuous learning and thrive in collaborative environments, focusing on delivering impactful results in technology.
              <br />
              Beyond coding, I enjoy the challenge of solving problems and constantly improving my skills. I hold a Gold Badge in Python on <a className=' text-purple-300 hover:text-purple-400 duration-300' href="https://www.hackerrank.com/profile/ramini_nikhilsai" target='_blank' rel='noreferrer'>Hackerrank</a>, and Silver Badges in both Java and C, which reflect my commitment to honing my programming abilities. When I'm not coding, I like to unwind by playing chess, a game that sharpens my strategic thinking and focus.
              </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1W_7R4F8VfjNvW0giTx7bxEJOp5jzzolA/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
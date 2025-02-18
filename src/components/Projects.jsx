
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import ML from '../assets/ML.jpg'
import VR from '../assets/VR.jpg'
import SM from '../assets/SM.jpg'
import ZT from '../assets/ZT.jpeg'
import IPv6 from '../assets/IPv6.jpg'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='COP FLIX - Cinematic Virtual Reality Streaming Service' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={VR} alt="" />
            </a>}
            {title=='Machine Learning Techniques for Cyber Attacks Detection' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={ML} alt="" />
            </a>}
            {title=='BARN Zero Trust Model' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={ZT} alt="" />
            </a>}
            {title=='Stock Market Analysis and Prediction' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={SM} alt="" />
            </a>}
            {title=='IPv6 Deployment for Ohio University' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={IPv6} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Machine Learning Techniques for Cyber Attacks Detection',
        description:'This project leverages machine learning to detect cyber threats by identifying network anomalies. Using decision trees and neural networks, I trained models to classify suspicious activities, enhancing real-time cybersecurity monitoring and response.',
        image: {ML},
        git:'https://drive.google.com/file/d/1ICnsIGhjlXIWvw6k0nN7wn5XZSrlBGAS/view?usp=sharing',
        technologies:['Python', 'Scikit-learn', 'TensorFlow', 'Cybersecurity', 'Jupyter Notebook']
    },
    {
        title:'COP FLIX - Cinematic Virtual Reality Streaming Service',
        description:'The CopFlix (CVRSS) project is a cinematic virtual reality streaming service designed to deliver immersive VR content seamlessly across various platforms, with a focus on compatibility, cloud infrastructure, content management, integration, and personalized data analytics.',
        image: {VR},
        git:"https://github.com/nikhilramini/CopFlix",
        technologies:[ 'Virtual Reality', 'Streaming', 'Media Processing', 'CMS', 'Unity', 'AWS', 'S3', 'Strapi']
    },
    {
        title:'BARN Zero Trust Model',
        description:'BARN Zero Trust Model is a cybersecurity framework developed to enhance network security by implementing a zero-trust architecture. This project ensures secure access control, authentication, and continuous monitoring to mitigate cyber threats and unauthorized access.',
        image: {ZT},
        git:"https://drive.google.com/file/d/1Ge3NodEP9hyvCIgY7xdm-MAOUpbaschO/view?usp=drive_link",
        technologies:[ 'Cybersecurity', 'Zero Trust', 'SIEM', 'Network Security', 'Cisco Umbrella', 'AI powered Threat Intelligence' ]
    },
    {
        title:'Stock Market Analysis and Prediction',
        description:'This project applies machine learning algorithms to analyze stock market trends and predict future prices. I utilized historical financial data, time series analysis, and deep learning models to provide insightful market predictions for informed decision-making.',
        image: {SM},
        git:"https://drive.google.com/file/d/1_auqvSK9OgpuPI2lVj13yNMkbqw3Fd8N/view?usp=drive_link",
        technologies:[ 'Python', 'Machine Learning', 'Time Series Analysis']
    },
    {
        title:'IPv6 Deployment for Ohio University',
        description:'This project involved the deployment of IPv6 in Infoblox at Ohio University, ensuring seamless network transition and future-proofing connectivity. I worked on configuring network protocols, optimizing routing, and implementing IPv6 addressing schemes for improved network efficiency.',
        image: {IPv6},
        git:"https://drive.google.com/file/d/17s29U3mbJcmJN7KuVYLPRZbmF0-iIS6W/view?usp=drive_link",
        technologies:[ 'IPv6', 'Networking', 'Routing', 'Network Security', 'DHCP', 'DNS', 'Infoblox']
    }
]

export default Projects
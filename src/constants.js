
export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Prompt Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Nikhil';

export const experiences = [
    {
        'company': 'Alpha Recon',
        'role': 'Software Engineer',
        'duration': 'Feb 2025 - Present',
        'logo': 'https://alpharecon.com/wp-content/uploads/2023/06/logo-transparent.png',
        'points': [
            'Built and deployed scalable machine learning pipelines (TF-IDF, SMOTE, Random Forest/XGBoost) to classify security incidents across U.S. states using geospatial, temporal, and textual features.',
            'Integrated Retrieval-Augmented Generation (RAG) to automate and personalize state-specific security intelligence reports using templated summaries and LLMs.',
            'Designed and maintained efficient data pipelines for automated data processing, model training, and inference, leveraging SQL databases where applicable.',
            'Collaborated cross-functionally with engineers and product managers to align technical solutions with business needs.',
            'Ensured data quality and integrity through regular audits and implemented corrective actions.',
            'Authored clear, reproducible technical documentation and presented key findings to technical and non-technical stakeholders.'
        ],
        'url': 'https://alpharecon.com/',
    },
    {
        'company': 'Ohio university',
        'role': 'IOT- Development, Programming, and Deployment/ Graduate Assistant',
        'duration': 'April 2024 - December 2024',
        'logo': 'https://www.ohio.edu/themes/custom/ohio_theme/ohio-logo.svg',
        'points': [
            <a href="https://github.com/OUSmartInfrastructure/LORAWAN" target="_blank"> LoRaWAN GitHub Repository</a>,
            'Configured and managed LoRaWAN systems, integrating Grove devices, Raspberry Pi with RAK HAT, sensors, gateways, and GPS modules for efficient IoT communication',
            'Used Python for system configuration and data processing and Arduino (C++) for microcontroller programming, including sensor integration, serial communication, and LoRa module configuration.',
            'Conducted functional, performance, power, and stress testing, resolving hardware-software issues to enhance system reliability.',
            'Optimized data transmission efficiency by 30%, improving overall system performance and reliability 📈.',
            'Successfully deployed a robust LoRaWAN system capable of handling real-time communication and data exchange between sensors and servers.'
        ],
        'url': 'https://www.ohio.edu/themes/custom/ohio_theme/ohio-logo.svg',
    },
    {
        'company': 'Ohio university',
        'role': 'Technical Support/ Graduate Assistant',
        'duration': 'Aug 2023 - March 2024',
        'logo': 'https://www.ohio.edu/themes/custom/ohio_theme/ohio-logo.svg',
        'points': [
            'Provided technical troubleshooting and maintenance for lab computers, printers, and network systems, ensuring optimal functionality and minimal downtime.',
            ' Conducted troubleshooting and tier-1 support across LAN/WAN devices using tools like Wireshark, while maintaining clear documentation for all changes.',
            'Assisted students, faculty, and staff with resolving technical issues, delivering hands-on support and user training as needed.',
            'Resolved tickets in the OIT department, addressing a range of technical issues and ensuring timely solutions.',
            'Configured and deployed new workstations, peripherals, and network setups, ensuring seamless integration and operation.',
            'Documented technical issues, resolutions, and procedures to create a knowledge base and improve support efficiency',
            'Streamlined lab operations by implementing system updates, monitoring resource usage, and ensuring compliance with institutional policies.'
        ],
        'url': 'https://www.ohio.edu/themes/custom/ohio_theme/ohio-logo.svg',
    },
]

console.log("EmailJS Service ID:", process.env.REACT_APP_EMAIL_JS_SERVICE_ID);
console.log("EmailJS Template ID:", process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID);
console.log("EmailJS Public Key:", process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY);

export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

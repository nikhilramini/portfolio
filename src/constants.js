
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
        'role': 'AI/ML Engineer',
        'duration': 'Feb 2025 - Present',
        'logo': 'https://alpharecon.com/wp-content/uploads/2023/06/logo-transparent.png',
        'points': [
            'Designed and developed generative and agentic AI systems, integrating autonomous reasoning, multi-step planning, and chatbot-style interaction to deliver intuitive, high-impact AI solutions.',
            'Built end-to-end AI architectures using Python, LLMs, and frameworks like PyTorch and TensorFlow, enhancing user experience through efficient retrieval, contextual understanding, and natural conversational flows.',
            'Integrated advanced capabilities such as summarization agents, automated intelligence extraction, and domain-specific AI assistants using RAG pipelines, function-calling, and external API orchestration.',
            'Created automated model training and inference pipelines supporting ML systems (Random Forest, XGBoost) and improved accuracy, precision, recall, F1, and cross-validation metrics by 80% through pipeline optimization.',
            'Built AI-powered workflows in n8n to automate end-to-end intelligence collection using agents to scrape data from dynamic websites process structured and unstructured data, and feed it into analytical pipelines for automated reporting',
            'Improved operational efficiency by reducing manual analyst workload by 70% through intelligent summarization, automated reasoning systems, and end-to-end AI-powered reporting pipelines.',
            'Developed autonomous AI agents capable of multi-step reasoning, integrating external APIs, and generating domain-specific intelligence outputs.',
            'Designed and maintained robust data pipelines for automated ingestion, model training, and inference, leveraging SQL databases, Docker, Kubernetes, and AWS for scalable deployment.',
            'Leveraged Power BI, Power Apps, and Power Automate to build interactive dashboards, automate workflows, and streamline reporting for analysts',
            'Implemented automation scripts and data visualization dashboards using JavaScript and RESTful APIs to enhance reporting and monitoring.',
            'Collaborated cross-functionally with engineers and product managers to align technical solutions with business needs.',
            'Ensured data quality and integrity through regular audits and implemented corrective actions.',
            'Authored clear, reproducible technical documentation and presented key findings to technical and non-technical stakeholders.'
        ],
        'url': 'https://alpharecon.com/',
    },
    {
        'company': 'Ohio university',
        'role': 'IoT Software Engineer/ Graduate Assistant',
        'duration': 'April 2024 - December 2024',
        'logo': 'https://www.ohio.edu/themes/custom/ohio_theme/ohio-logo.svg',
        'points': [
            <a href="https://github.com/OUSmartInfrastructure/LORAWAN" target="_blank" rel="noreferrer"> LoRaWAN GitHub Repository</a>,
            'Designed, programmed, and deployed scalable LoRaWAN IoT systems using Docker and Kubernetes for containerized deployment and orchestration, improving communication efficiency and scalability.',
            'Integrated Grove devices, Raspberry Pi with RAK HAT, sensors, gateways, and GPS modules to enable real-time IoT communication and data collection.',
            'Developed and automated system configuration and data processing scripts in Python, and programmed microcontrollers in Arduino (C++) for sensor integration, serial communication, and LoRa module management.',
            'Built interactive dashboards in Power BI to visualize real-time sensor data from LoRaWAN devices, enabling efficient monitoring, analysis, and decision-making for environmental metrics.',
            'Built and exposed RESTful APIs for real-time data exchange between IoT devices and cloud endpoints, improving interoperability and system responsiveness',
            'Deployed solutions on AWS Cloud (EC2, S3, IoT Core) for scalable data storage, monitoring, and analytics, ensuring high availability and performance.',
            'Conducted functional, performance, power, and stress testing, resolving hardware-software issues to enhance system reliability.',
            'Optimized data transmission by 30% through protocol tuning and resource management, significantly enhancing system reliability and throughput.',
            'Successfully deployed a robust LoRaWAN system capable of handling real-time communication and data exchange between sensors and servers.'
        ],
        'url': 'https://www.ohio.edu/themes/custom/ohio_theme/ohio-logo.svg',
    },
    {
        'company': 'Ohio university',
        'role': 'IT Systems Engineer/ Graduate Assistant',
        'duration': 'Aug 2023 - March 2024',
        'logo': 'https://www.ohio.edu/themes/custom/ohio_theme/ohio-logo.svg',
        'points': [
            'Provided technical troubleshooting and maintenance for lab computers, printers, and network systems, ensuring optimal functionality and minimal downtime.',
            'Conducted troubleshooting and tier-1 support across LAN/WAN devices using tools like Wireshark, while maintaining clear documentation for all changes.',
            'Assisted students, faculty, and staff with resolving technical issues, delivering hands-on support and user training as needed.',
            'Resolved tickets in the OIT department, addressing a range of technical issues and ensuring timely solutions.',
            'Managed user accounts and permissions, ensuring secure access and compliance with institutional policies.',
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

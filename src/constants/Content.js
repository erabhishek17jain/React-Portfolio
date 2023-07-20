import hero_person from '../assets/images/hero/person.png';
import reactjs from '../assets/images/skills/react.png';
import redux from '../assets/images/skills/redux.png';
import typescript from '../assets/images/skills/typescript.png';
import nodejs from '../assets/images/skills/node.png';
import graphql from '../assets/images/skills/graphql.png';
import postman from '../assets/images/skills/postman.png';
import html from '../assets/images/skills/html.png';
import mongodb from '../assets/images/skills/mongodb.png';
import mysql from '../assets/images/skills/mysql.png';
import cpp from '../assets/images/skills/cpp.png';
import java from '../assets/images/skills/java.png';
import git from '../assets/images/skills/git.png';
import aws from '../assets/images/skills/aws.png';
import next from '../assets/images/skills/nextjs.png';
import ps from '../assets/images/skills/ps.png';
import bootstrap from '../assets/images/skills/bootstrap.svg';
import jenkins from '../assets/images/skills/jenkins.png';
import vscode from '../assets/images/skills/vscode.png';

import threeg from '../assets/images/aboutme/3g.jpeg';
import gigamon from '../assets/images/aboutme/gigamon.png';
import gl from '../assets/images/aboutme/gl.png';
import google from '../assets/images/aboutme/google.png';
import hcl from '../assets/images/aboutme/hcl.jpeg';
import ibm from '../assets/images/aboutme/ibm.png';
import newgen from '../assets/images/aboutme/newgen.jpeg';
import reppify from '../assets/images/aboutme/reppify.png';

import services_logo1 from '../assets/images/services/logo1.png';
import services_logo2 from '../assets/images/services/logo2.png';
import services_logo3 from '../assets/images/services/logo3.png';
import services_logo4 from '../assets/images/services/logo4.png';
import services_logo5 from '../assets/images/services/logo5.png';

import project1 from '../assets/images/projects/omjin-shop.png';
import project2 from '../assets/images/projects/super-bio.png';
import project3 from '../assets/images/projects/tmu-college.png';
import person_project from '../assets/images/projects/person1.png';

import profile from '../assets/images/testimonials/profile.jpg';
import avatar1 from '../assets/images/testimonials/avatar1.png';
import avatar2 from '../assets/images/testimonials/avatar2.png';

import hireme_person from '../assets/images/hireme/person2.png';
import hireme_person2 from '../assets/images/hireme/person1.png';

import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall } from 'react-icons/md';
import { BsFacebook, BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { TbSmartHome } from 'react-icons/tb';
import { BiUser, BiAtom } from 'react-icons/bi';
import { FaHireAHelper } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { RiServiceLine, RiProjectorLine, RiProfileFill } from 'react-icons/ri';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
export const content = {
    nav: [
        {
            link: '#home',
            icon: TbSmartHome,
        },
        {
            link: '#aboutme',
            icon: BiUser,
        },
        {
            link: '#skills',
            icon: BiAtom,
        },
        {
            link: '#services',
            icon: RiServiceLine,
        },
        {
            link: '#projects',
            icon: RiProjectorLine,
        },
        {
            link: '#testimonial',
            icon: RiProfileFill,
        },
        {
            link: '#hireme',
            icon: FaHireAHelper,
        },
        {
            link: '#contact',
            icon: MdOutlinePermContactCalendar,
        },
    ],
    hero: {
        title: 'Web Developer',
        firstName: 'ABHISHEK',
        LastName: 'JAIN',
        hireBtnText: 'Hire Me',
        resumeBtnText: 'Resume',
        resumeName: 'AbhishekJain.pdf',
        image: hero_person,
        hero_content: [
            {
                count: '6+',
                text: 'Years of Experience in Web development',
            },
            {
                count: '10+',
                text: 'Projects Worked in my career',
            },
        ],
    },
    skills: {
        title: 'Skills',
        frontEnd: 'Front End Technologies',
        backEnd: 'Back End Technologies',
        technologies: 'Other Technologies',
        skills_content: {
            front_end: [
                {
                    name: 'React Js',
                    para: 'with Hooks | Material UI | Storybook | Unit testing',
                    logo: reactjs,
                    more: [
                        'SEO friendly',
                        'Instant updates without page reloads',
                        'Update just one component',
                        'Reuse the same components',
                        'It is backed by a strong community',
                    ],
                },
                {
                    name: 'Redux | Flux',
                    para: 'with Middleware | Redux Saga | Redux Thunk',
                    logo: redux,
                    more: [
                        'Redux for global state management',
                        'The app state is updated frequently',
                        'The logic to update that state may be complex',
                        'App has a medium or large-sized codebase',
                        'Its middleware allows you to intercept every action',
                    ],
                },
                {
                    name: 'TypeScript | JavaScript | JQuery',
                    para: 'with React & Node js',
                    logo: typescript,
                    more: [
                        'To make web pages interactive',
                        'Can run on all devices',
                        'Transformed web browsers into application platforms',
                        'It has type safety, tooling, and integration',
                    ],
                },
                {
                    name: 'Next Js',
                    para: 'with SEO | Rest APIs calls',
                    logo: next,
                    more: [
                        'Search Engine Optimization',
                        'Server-side rendering and generating static websites',
                        'Next.js enables you to create full-stack Web applications.',
                        'Since streaming is server-rendered, it does not impact SEO.',
                    ],
                },
                {
                    name: 'HTML | HTML5',
                    para: 'with HTML5 concepts',
                    logo: html,
                    more: [
                        'HTML also provides a basic structure of the page',
                        'HTML code ensures the proper formatting of text and images for your Internet browser.',
                        'HTML allows users to create and structure sections, headings, links, paragraphs, and more, on a website using various tags and elements.',
                        'HTML is primarily used to develop web pages and web applications that run on web browsers like Chrome, Firefox, and Internet Explorer.',
                        'Storage of big files is allowed because of the application cache feature.',
                    ],
                },
                {
                    name: 'Bootstrap 4 | 5 | CSS3 | SCSS | LESS',
                    para: 'with Responsive',
                    logo: bootstrap,
                    more: [
                        'It  provides a consistent and precise positioning of navigable elements.',
                        'It is easy to customize a web page as it can be done by merely altering a modular file.',
                        'Graphics are more accessible in CSS3, thus making it easy to make the site appealing.',
                        'CSS3 allows designers to apply beautiful borders on the page or site they are creating.',
                        'This helps in enhancing the appearance of the site.',
                    ],
                },
            ],
            back_end: [
                {
                    name: 'Node js | Express.js ',
                    para: 'with Rest Api | GraphQL',
                    logo: nodejs,
                    more: [
                        'Node. js shines in real-time web apps that employ push technology over WebSocket.',
                        'It provides fast delivery. Node. js is a proven way to make the time-to-market cycle shorter.',
                        'It targets all major platforms. Among the advantages of using Node.',
                        'is also fast and lightweight, and its ability to employ JavaScript code on both the frontend and backend opens up new development possibilities.',
                        'Our developer community will be significantly more efficient and cross-functional as a result of the frontend and backend flexibility, lowering development expenses.',
                    ],
                },
                {
                    name: 'MongoDB developer',
                    para: 'with NodeJs',
                    logo: mongodb,
                    more: [
                        'Its flexible schema makes it easy to evolve and store data in a way that is easy for programmers to work with.',
                        'MongoDB is also built to scale up quickly and supports all the main features of modern databases such as transactions.',
                        'MongoDB is designed to make data easy to access, and rarely to require joins or transactions,',
                        'The MongoDB Query API allows you to query deep into documents, and even perform complex analytics pipelines with just a few lines of declarative code.',
                        'MongoDB is well known for its horizontal scaling and load balancing capabilities,',
                    ],
                },
                {
                    name: 'Graphql',
                    para: 'With Apollo server/client',
                    logo: graphql,
                    more: [
                        'GraphQL is way faster than other communication APIs',
                        'We can integrate multiple systems behind GraphQL API. It unifies them and hides their complexity.',
                        'GraphQL is a powerful tool, and there are many reasons you might choose GraphQL over REST.',
                        'It enables a client to make a single HTTP request to multiple resources and receive the exact data it needs.',
                        'GraphQL offers a highly flexible approach to API development, as it allows developers to request exactly the data they need.',
                    ],
                },
                {
                    name: 'C | C++',
                    para: 'with data structures & algorithms | OOP',
                    logo: cpp,
                    more: [
                        'C is a structural or procedural programming language that was used for system applications and low-level programming applications.',
                        'The C programming language is known as the God of programming languages',
                        'C++ is an object-oriented programming language having some additional features like Encapsulation, Data Hiding, Data Abstraction, Inheritance, Polymorphism, etc.',
                        'C++ is an extended version of C.',
                        ' C++ is used majorly to make operating systems',
                    ],
                },
                {
                    name: 'Java',
                    para: 'with Oops | Collection | Swing',
                    logo: java,
                    more: [
                        'Java was designed to be easy to use and is therefore easy to write, compile, debug, and learn than other programming languages.',
                        'Java is object-oriented. This allows you to create modular programs and reusable code.',
                        'Java provides the environment to develop cloud-based applications.',
                        'Platform-friendly and independent.',
                        'Developers use Java to construct applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, and other devices.',
                    ],
                },
                {
                    name: 'MySql | Oracle',
                    para: 'with relational data modeling with Java & NodeJs',
                    logo: mysql,
                    more: [
                        'MySQL is a relational database management system (often shortened to RDBMS).',
                        'MySQL is the most popular open source database',
                        'It provides comprehensive support for every application development need.',
                        'Within the database, support can be found for stored procedures, triggers, functions, views, cursors, ANSI-standard SQL, and more.',
                        'MySQL is a tool used to manage databases and servers.',
                    ],
                },
            ],
            technologies: [
                {
                    name: 'Git | GitHub',
                    para: 'with full Git & GitHub',
                    logo: git,
                    more: [
                        'Git is a tool that is used to manage multiple versions of source code edits',
                        'It serves as a host for Git repository teams to store their code in a centralized location.',
                        'We can use Git without Github, but you cannot use GitHub without Git.',
                        'Core languages for GitHub features include C, C++, C#, Go, Java, JavaScript, PHP, Python, Ruby, Scala, and TypeScript.',
                        'Git is responsible for everything GitHub-related that happens locally on your computer.',
                    ],
                },
                {
                    name: 'Jenkins',
                    para: 'with build features',
                    logo: jenkins,
                    more: [
                        'Jenkins is among the most commonly used developer tools.',
                        'It is used to implement CI/CD workflows, called pipelines.',
                        'Jenkins is a popular CI orchestration tool.',
                        'It provides numerous plugins for integration with multiple test automation tools and frameworks into the test pipeline.',
                        'Jenkins provides plugins that help run test suites, gather dashboard results, and provide details on failures.',
                    ],
                },
                {
                    name: 'Visual Studio Code',
                    para: 'with denugging & unit test cases',
                    logo: vscode,
                    more: [
                        'Visual Studio Code is a streamlined code editor with support for development operations like debugging, task running, and version control.',
                        'It aims to provide just the tools a developer needs for a quick code-build-debug cycle.',
                        'Visual Studio is a powerful developer tool that you can use to complete the entire development cycle in one place.',
                        'It is a comprehensive integrated development environment (IDE) that you can use to write, edit, debug, and build code, and then deploy your app.',
                        'Visual Studio Code has support for many languages, including Python, Java, C++, JavaScript, and more.',
                    ],
                },
                {
                    name: 'AWS Cloud',
                    para: 'with SSL Integration and S3 Bucket',
                    logo: aws,
                    more: [
                        'AWS is designed to allow application providers, ISVs, and vendors to quickly and securely host your applications.',
                        'You can use the AWS Management Console or well-documented web services APIs to access the AWS application hosting platform.',
                        'AWS offers many different tools and solutions for enterprises and software developers that can be used in data centers in up to 190 countries.',
                        'There are four main types of cloud computing: private clouds, public clouds, hybrid clouds, and multi-clouds.',
                        'AWS has over 200 fully featured services for a wide range of technologies, industries, and use cases.',
                    ],
                },
                {
                    name: 'Postman',
                    para: 'with API testing',
                    logo: postman,
                    more: [
                        'Postman is one of the most popular software testing tools which is used for API testing.',
                        'Developers can easily create, test, share, and document APIs.',
                        'You can use collections to organize and group your requests.',
                        'Postman enables you to create and send API requests.',
                        'Postman Collections are groups of saved requests. You can use collections to organize and group your requests.',
                    ],
                },
                {
                    name: 'Adobe Photoshop',
                    para: 'with UIUX designs',
                    logo: ps,
                    more: [
                        'Photoshop is a photo editing and design software used by photographers, graphic designers, and web designers.',
                        'You can use it for a variety of tasks such as image editing, photo manipulation, illustrations, basic animations, and more.',
                        'Adobe is the industry standard because it is been at the top for a long time. It got and stayed there by continuously innovating.',
                        'Photo editing and retouching. Logos, color schemes, social media graphics, and other design elements for a brand.',
                        'By learning Photoshop you will also have a fun outlet for your creative projects, whether working on a website',
                    ],
                },
            ],
        },
        icon: MdArrowForward,
    },
    services: {
        title: 'Services',
        subtitle: 'WHAT I OFFER',
        service_content: [
            {
                title: 'WEB DEVELOPMENT',
                para: 'It refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.',
                logo: services_logo1,
            },
            {
                title: 'GRAPHIC DESIGN',
                para: 'It is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users specific needs and focus on the logic of displaying elements in interactive designs, to optimize the user experience.',
                logo: services_logo2,
            },
            {
                title: 'UI / UX DESIGNING',
                para: 'UI refers to the screens, buttons, toggles, icons, and other visual elements that you interact with when using a website, app, or other electronic device. UX refers to the entire interaction you have with a product, including how you feel about the interaction.',
                logo: services_logo3,
            },
            {
                title: 'ANDROID / IOS DEVELOPMENT',
                para: 'It is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.',
                logo: services_logo4,
            },
            {
                title: 'SOCIAL MEDIA MARKETING',
                para: 'It is a powerful way for businesses of all sizes to reach prospects and customers. People discover, learn about, follow, and shop from brands on social media.',
                logo: services_logo5,
            },
        ],
    },
    projects: {
        title: 'Projects',
        githubText: 'Github',
        liveUrlText: 'Live',
        subtitle: 'MY CREATION',
        image: person_project,
        project_content: [
            {
                title: 'OmJin Shop',
                image: project1,
                github: 'https://github.com/abhijsagar/MERN-Omjinshop',
                liveUrl: 'https://omjinshop.netlify.app/',
                description:
                    'An OmJin Shop is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service. We Use main application for user to View & Select Products, Add to Cart, Wishlist, Place Order etc. And we use Admin Panel to manage stocks and perform action once order is placeed or return request is generated.',
            },
            {
                title: 'SuperBio',
                image: project2,
                github: 'https://github.com/abhijsagar/Next-SuperBio',
                liveUrl: 'https://super-bio.netlify.app/',
                description:
                    "The portfolio creator website app is a powerful tool designed to help individuals and professionals showcase their work, talents, and accomplishments in an impressive and visually appealing manner. With user-friendly features and customizable templates, users can effortlessly create their own portfolio websites to highlight their skills, projects, and experiences. Whether you're an artist, designer, photographer, writer, or job seeker, this app offers a diverse range of layout options, fonts, and color schemes to suit your unique style and personality.",
            },
            {
                title: 'TMU College Portal',
                image: project3,
                github: 'https://github.com/abhijsagar/MERN-College-Management',
                liveUrl: 'https://tmu-college.netlify.app/',
                description:
                    'This application manages the college information, student information, placement information, various different types of event going on in our college. It also keeps track records of all the information regarding students those who are placed in the various organization. It is an ERP solution that enables the institutes to conduct online admissions, generate reports, create ID cards, enable online communication, manage curriculum, time tables and conduct online evaluations, track student progress, conduct data analysis, teach remotely, and handle enquiries etc.',
            },
        ],
    },
    aboutMe: {
        image: profile,
        title: 'About Me',
        subtitle: 'Who I am',
        description: [
            {
                title: 'Hello! I am a MERN stack developer, and my passion lies in crafting dynamic and innovative web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I am well-equipped to tackle the full stack of web development. As an enthusiastic front-end developer, I thrive on creating intuitive and user-friendly interfaces using React.js. ',
            },
            {
                title: 'I enjoy breaking down complex UI structures into reusable components, ensuring a seamless and engaging user experience. On the back-end, I am proficient in building robust and scalable server applications using Node.js and Express.js. I love the challenge of handling server-side logic, managing databases, and ensuring smooth communication between the front-end and back-end. ',
            },
            {
                title: 'With MongoDB as my go-to database, I am adept at working with JSON-like documents and handling large volumes of unstructured data effectively. This allows me to develop data-driven applications with ease. As a MERN stack developer, I am committed to staying updated with the latest web development trends and best practices. I believe in continuous learning and always seek opportunities to enhance my skills and knowledge. ',
            },
            {
                title: "Collaborating with cross-functional teams and turning ideas into reality brings me immense satisfaction. My goal is to create meaningful and impactful web applications that cater to the needs of users and deliver a seamless online experience. I am excited to tackle new challenges and contribute my expertise to create cutting-edge web solutions. Let's build something amazing together!",
            },
        ],
        exSubtitle: 'Previous Experience',
        exTitle: 'Web Development | Mobile Application Development',
        exp_content: [
            {
                company: hcl,
                client: gigamon,
                companyName: 'HCL Technologies Pvt. Ltd',
                position: 'Lead Engineer',
                duration: 'Oct 2021 - Present',
                client_name: 'Gigamon Pvt. Ltd',
                proj_name: 'GigaVUE',
                proj_detail:
                    'GigaVUE-OS is a modularly designed operating system that offers the full range of Gigamon Hawk capabilities, including: Core Intelligence: Flow Mapping®, GigaStream, Clustering, Fabric Maps, Header Stripping, Tunneling, Inline Bypass. Traffic Intelligence. Application Intelligence. GigaVUE-FM fabric Hawk Deep Observability Pipeline, with unified visibility across physical, virtual, and multi-cloud deployments. Its intent-based policy automation approach enables NetOps, SecOps, and CloudOps teams to be more efficient at creating and deploying policies at scale based on their roles. A centralized, rich, and customizable dashboard provides easy-to-use programmable APIs for ease of integration with tools and SDN controllers, role-based access control, end-to-end topology visualization, simplified workflows, external SNMP support, and alarm management to reduce mean time to resolution.',
            },
            {
                company: threeg,
                client: newgen,
                companyName: '3G Solutions Pvt. Ltd',
                position: 'Sr. Software Engineer',
                duration: 'Sept 2020 - Oct 2021',
                client_name: 'Newgen Software Pvt. Ltd',
                proj_name: 'OmniNewgenOfficeAddIns',
                proj_detail:
                    'OmniNewgenOfficeAddIns client is provided as Add-Ins on Newgen OmniDocs, which enables uploading of documents from MS Office applications directly. The Newgen product (OmniDocs) will open in MS Office directly, which is developed in ReactJS + Redux for front end & Java as backend. OmniNewgenOfficeAddIns client also facilitates the uploading of documents using Newgen Forms. Users can upload documents to the Newgen OmniDocs folder through various MS Office applications. I worked on the UI part of this project using React and Redux as framework.',
            },
            {
                company: reppify,
                client: ibm,
                companyName: 'Reppify Pvt. Ltd',
                position: 'Software Engineer',
                duration: 'Apr 2018 - Sep 2020',
                client_name: 'IBM Corp. & Infosys Pvt. Ltd',
                proj_name: 'Referral Portal',
                proj_detail:
                    'We have developed a Web Application for Infosys Recruitment Process. In this system, Super admin, Admin Recruiter, HR Recruiter, Employee, and Candidate are the main roles. In this system, there are also Super admin, Admin Recruiter, HR Recruiter, Employee, and Candidate are the main roles. In this system, Super Admin will enroll an Admin recruiter and an Admin recruiter will create jobs for in particular country and the HR recruiter will enroll employees who will upload his/her LinkedIn/Facebook/Twitter contacts the account for whom we do the scoring and matching process and find out, contacts that are most suitable for the job. Once matching is done, the HR recruiter can see those connections on her account as well and send a request to the employee to invite that candidate to apply for the job. Jobs have referral bonuses as well, which goes to the employee.',
            },
            {
                company: gl,
                client: google,
                companyName: 'Global Logic Pvt. Ltd',
                position: 'Associate Analyst',
                duration: 'Aug 2017 - Apr 2018',
                client_name: 'Google Corp.',
                proj_name: 'Google Shopping Engine',
                proj_detail:
                    'This is a web-based shopping engine. It includes millions of products and includes different product categories and its subcategories, like household, beauty products, different types of Paints, Pesticides/Insecticides, etc. We need to categorize the products based on their use.',
            }
        ],
    },
    testimonials: {
        title: 'Testimonials',
        subtitle: 'MY CLIENT REVIEWS',
        testimonials_content: [
            {
                review: 'We had a great experience while connecting with your team, your members are too supportive. I am very satisfied with your service.',
                img: avatar1,
                name: 'Rajat Singhai',
                product: 'Omjin Shop',
            },
            {
                review: 'We are searching for a technical team who help me to grow our business by creating a website for us on which we sell our products, and we found you. Thank You!',
                img: avatar2,
                name: 'Mayank Jain',
                product: 'Omjin Shop',
            },
        ],
    },
    hireme: {
        title: 'Hire Me',
        subtitle: 'FOR YOUR PROJECTS',
        image1: hireme_person,
        image2: hireme_person2,
        para: 'We help you fulfill your need regarding any type of IT work, Web Development, Web Designing, Mobile Applications, Graphic Design, Digital Marketing, Content Creation, etc. We have great tech leads and developers who have great experience in trending development technologies. Connect with us we never disappoint you.',
        btnText: 'Hire Me',
        submit: 'Submit',
        close: 'Close',
    },
    emails: { title: 'Hire Me', submit: 'Submit', close: 'Close' },
    contact: {
        title: 'Contact Me',
        subtitle: 'GET IN TOUCH',
        followUs: 'FOLLOW US ON',
        visitUs: 'VISIT OUR OFFICE',
        submit: 'Submit',
        social_media: [
            {
                text: 'erabhishek17jain@gmail.com',
                icon: GrMail,
                link: 'mailto:erabhishek17jain@gmail.com',
            },
            {
                text: '+91 7047026537',
                icon: MdCall,
                link: 'https://wa.link/wadcmz',
            },
            {
                text: '+91 7047026537',
                icon: BsWhatsapp,
                link: 'https://wa.link/uab6i0',
            },
            {
                text: 'abhijsagar',
                icon: BsLinkedin,
                link: 'https://www.linkedin.com/in/abhijsagar/',
            },
            {
                text: 'abhijsagar',
                icon: BsGithub,
                link: 'https://github.com/abhijsagar/',
            },
            {
                text: 'abhijsagar',
                icon: SiUpwork,
                link: 'https://www.upwork.com/freelancers/~011b5cb8bb2f19e025',
            },
            {
                text: 'abhisagarj',
                icon: BsFacebook,
                link: 'https://www.facebook.com/abhisagarj/',
            },
        ],
    },
    footer: {
        name: 'Abhishek Jain',
        text: 'All © Copy Right Reserved 2023',
    },
};

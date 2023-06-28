// import images
import Hero_person from './assets/images/Hero/person.png';

import ps from './assets/images/Skills/ps.png';
import reactjs from './assets/images/Skills/react.png';
import nodejs from './assets/images/Skills/node.png';

import services_logo1 from './assets/images/Services/logo1.png';
import services_logo2 from './assets/images/Services/logo2.png';
import services_logo3 from './assets/images/Services/logo3.png';

import project1 from './assets/images/projects/img1.png';
import project2 from './assets/images/projects/img2.png';
import project3 from './assets/images/projects/img3.png';
import person_project from './assets/images/projects/person.png';

import avatar1 from './assets/images/Testimonials/avatar1.png';
import avatar2 from './assets/images/Testimonials/avatar2.png';
import avatar3 from './assets/images/Testimonials/avatar3.png';
import avatar4 from './assets/images/Testimonials/avatar4.png';

import Hireme_person from './assets/images/Hireme/person.png';
import Hireme_person2 from './assets/images/Hireme/person2.png';

// import icons from react-icons
import { GrMail } from 'react-icons/gr';
import { MdArrowForward, MdCall } from 'react-icons/md';
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
import { TbSmartHome } from 'react-icons/tb';
import { BiUser } from 'react-icons/bi';
import { SiUpwork } from 'react-icons/si';
import { RiServiceLine, RiProjectorLine } from 'react-icons/ri';
import { MdOutlinePermContactCalendar } from 'react-icons/md';

export const content = {
    nav: [
        {
            link: '#home',
            icon: TbSmartHome,
        },
        {
            link: '#skills',
            icon: BiUser,
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
            link: '#contact',
            icon: MdOutlinePermContactCalendar,
        },
    ],
    hero: {
        title: 'Web Developer',
        firstName: 'ABHISHEK',
        LastName: 'JAIN',
        hireBtnText: 'Hire Me',
        resumeBtnText: 'Get Resume',
        image: Hero_person,
        hero_content: [
            {
                count: '6+',
                text: 'Years of Experinse in Web development',
            },
            {
                count: '10+',
                text: 'Projects Worked in my career',
            },
        ],
    },
    skills: {
        title: 'Skills',
        subtitle: 'MY TOP SKILLS',
        skills_content: [
            {
                name: 'React js | Next js',
                para: 'with Redux - Hooks- Material UI - Typescript - Tailwind css',
                logo: reactjs,
            },
            {
                name: 'Node js | Express.js ',
                para: 'with  Rest Api |  GraphQL',
                logo: nodejs,
            },
            {
                name: 'TypeScript | JavaScript',
                para: 'with React & Next js & Node js',
                logo: reactjs,
            },
            {
                name: 'Graphql',
                para: 'With Apollo server/client',
                logo: reactjs,
            },
            {
                name: 'Postman',
                para: 'Automated API testing',
                logo: reactjs,
            },
            {
                name: 'HTML/CSS',
                para: 'Full stack Ecommerce App',
                logo: reactjs,
            },
            {
                name: 'MongoDB developer | DBA',
                para: 'in NodeJs & Java & Php',
                logo: reactjs,
            },
            {
                name: 'MySql | Oracle',
                para: 'and relational data modeling with UML & ERD & MERISE ',
                logo: reactjs,
            },
            {
                name: 'C | C++',
                para: 'university projects | data structures & algorithms | OOP',
                logo: reactjs,
            },
            {
                name: 'Java',
                para: 'Swing (Desktop Graphical User Interface)',
                logo: reactjs,
            },
            {
                name: 'Git | GitHub',
                para: 'Familiar with git and github',
                logo: reactjs,
            },
            {
                name: 'Adobe Photoshop',
                para: 'Lorem ipsum text  dummy',
                logo: ps,
            },
        ],
        icon: MdArrowForward,
    },
    services: {
        title: 'Services',
        subtitle: 'WHAT I OFFER',
        service_content: [
            {
                title: 'Web Development',
                para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
                logo: services_logo1,
            },
            {
                title: 'ui / ux DESIGNING',
                para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
                logo: services_logo2,
            },
            {
                title: 'PhotoShop Editing',
                para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
                logo: services_logo3,
            },
        ],
    },
    projects: {
        title: 'Projects',
        subtitle: 'MY CREATION',
        image: person_project,
        project_content: [
            {
                title: 'Gym Website',
                image: project1,
            },
            {
                title: 'Social Media web',
                image: project2,
            },
            {
                title: 'Creative Website',
                image: project3,
            },
        ],
    },
    testimonials: {
        title: 'Testimonials',
        subtitle: 'MY CLIENT REVIEWS',
        testimonials_content: [
            {
                review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
                img: avatar1,
                name: 'JOHN DOE',
            },
            {
                review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
                img: avatar2,
                name: 'Tom Alex',
            },
            {
                review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
                img: avatar3,
                name: 'Johnny',
            },
            {
                review: '“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”',
                img: avatar4,
                name: 'ROBBIN',
            },
        ],
    },
    hireme: {
        title: 'Hire Me',
        subtitle: 'FOR YOUR PROJECTS',
        image1: Hireme_person,
        image2: Hireme_person2,
        para: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean',
        btnText: 'Hire Me',
    },
    contact: {
        title: 'Contact Me',
        subtitle: 'GET IN TOUCH',
        social_media: [
            {
                text: 'erabhishek17jain@gmail.com',
                icon: GrMail,
                link: 'mailto:erabhishek17jain@gmail.com',
            },
            {
                text: '+91 1234 56778',
                icon: MdCall,
                link: 'https://wa.me/1234567890',
            },
            {
                text: 'erabhishek17jain',
                icon: BsLinkedin,
                link: 'https://www.linkedin.com/in/erabhishek17jain/',
            },
            {
                text: 'erabhishek17jain',
                icon: BsGithub,
                link: 'https://github.com/erabhishek17jain',
            },
            {
                text: 'erabhishek17jain',
                icon: SiUpwork,
                link: 'https://www.upwork.com/freelancers/~010a44723a9108a1bc',
            },
            {
                text: 'erabhishek17jain',
                icon: BsInstagram,
                link: 'https://www.instagram.com/erabhishek17jain/',
            },
            {
                text: 'erabhishek17jain',
                icon: BsFacebook,
                link: 'https://www.facebook.com/in/erabhishek17jain/',
            },
        ],
    },
    footer: {
        name: 'Abhishek Jain',
        text: 'All © Copy Right Reserved 2023',
    },
};

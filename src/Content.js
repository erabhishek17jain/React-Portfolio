// import images
import hero_person from './assets/images/hero/person.png';

import reactjs from './assets/images/skills/react.png';
import redux from './assets/images/skills/redux.png';
import typescript from './assets/images/skills/typescript.png';
import nodejs from './assets/images/skills/node.png';
import graphql from './assets/images/skills/graphql.png';
import postman from './assets/images/skills/postman.png';
import html from './assets/images/skills/html.png';
import mongodb from './assets/images/skills/mongodb.png';
import mysql from './assets/images/skills/mysql.png';
import cpp from './assets/images/skills/cpp.png';
import java from './assets/images/skills/java.png';
import git from './assets/images/skills/git.png';
import ps from './assets/images/skills/ps.png';

import services_logo1 from './assets/images/services/logo1.png';
import services_logo2 from './assets/images/services/logo2.png';
import services_logo3 from './assets/images/services/logo3.png';

import project1 from './assets/images/projects/img1.png';
import project2 from './assets/images/projects/img2.png';
import project3 from './assets/images/projects/img3.png';
import person_project from './assets/images/projects/person.png';

import avatar1 from './assets/images/testimonials/avatar1.png';
import avatar2 from './assets/images/testimonials/avatar2.png';
import avatar3 from './assets/images/testimonials/avatar3.png';
import avatar4 from './assets/images/testimonials/avatar4.png';

import hireme_person from './assets/images/hireme/person.png';
import hireme_person2 from './assets/images/hireme/person2.png';

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
        image: hero_person,
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
                name: 'React js',
                para: 'with Hooks | Material UI | Storybook | Unit testing',
                logo: reactjs,
            },
            {
                name: 'Redux | Flux',
                para: 'with Middleware | Redux Saga | Redux Thunk',
                logo: redux,
            },
            {
                name: 'TypeScript | JavaScript',
                para: 'with React & Node js',
                logo: typescript,
            },
            {
                name: 'Node js | Express.js ',
                para: 'with Rest Api | GraphQL',
                logo: nodejs,
            },
            {
                name: 'Graphql',
                para: 'With Apollo server/client',
                logo: graphql,
            },
            {
                name: 'Postman',
                para: 'with API testing',
                logo: postman,
            },
            {
                name: 'HTML/CSS',
                para: 'with HTML5 concepts | CSS3 | SCSS | Responsive',
                logo: html,
            },
            {
                name: 'MongoDB developer',
                para: 'with NodeJs',
                logo: mongodb,
            },
            {
                name: 'MySql | Oracle',
                para: 'with relational data modeling with Java & NodeJs',
                logo: mysql,
            },
            {
                name: 'C | C++',
                para: 'with data structures & algorithms | OOP',
                logo: cpp,
            },
            {
                name: 'Java',
                para: 'with Oops | Collection | Swing',
                logo: java,
            },
            {
                name: 'Git | GitHub',
                para: 'with full git & github',
                logo: git,
            },
            {
                name: 'Adobe Photoshop',
                para: 'with UIUX designs',
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
        image1: hireme_person,
        image2: hireme_person2,
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
                icon: BsFacebook,
                link: 'https://www.facebook.com/in/erabhishek17jain/',
            },
            {
                text: 'erabhishek17jain',
                icon: BsInstagram,
                link: 'https://www.instagram.com/erabhishek17jain/',
            },
        ],
    },
    footer: {
        name: 'Abhishek Jain',
        text: 'All © Copy Right Reserved 2023',
    },
};

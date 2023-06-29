import { createElement, useRef } from 'react';
import { content } from '../constants/Content';
import { Toaster } from 'react-hot-toast';
import SendEmail from './SendEmail';

const Contact = () => {
    const { contact } = content;
    const form = useRef();

    return (
        <section className='bg-dark_primary text-white' id='contact'>
            <Toaster />
            <div className='md:container px-5 py-14'>
                <h2 className='title !text-white' data-aos='fade-down'>
                    {contact.title}
                </h2>
                <h4 className='subtitle' data-aos='fade-down'>
                    {contact.subtitle}
                </h4>
                <br />
                <div className='flex gap-10 md:flex-row flex-col'>
                    <SendEmail isTitle={false} />
                    <div className='flex-1 flex flex-col gap-5'>
                        {contact.social_media.map((content, i) => (
                            <div key={i} data-aos='fade-down' data-aos-delay={i * 400} className='flex items-center gap-2'>
                                <h4 className='text-white'>{createElement(content.icon)}</h4>
                                <a className='font-Poppins' href={content.link} target='_blank'>
                                    {content.text}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

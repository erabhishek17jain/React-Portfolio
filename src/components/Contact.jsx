import { createElement, useRef } from 'react';
import { content } from '../constants/Content';
import { Toaster } from 'react-hot-toast';
import SendEmail from './SendEmail';

const Contact = () => {
    const { contact } = content;
    const form = useRef();

    return (
        <section className='bg-dark_primary text-white' id='contact'>
            <div className='flex flex-col lg:flex-row'>
                <Toaster />
                <div className='lg:container px-5 pt-14 lg:py-14 w-full lg:w-1/3'>
                    <h2 className='title !text-white' data-aos='fade-down'>
                        {contact.title}
                    </h2>
                    <h4 className='subtitle' data-aos='fade-down'>
                        {contact.subtitle}
                    </h4>
                    <br />
                    <div className='flex gap-10 lg:flex-row flex-col'>
                        <SendEmail isTitle={false} />
                    </div>
                </div>
                <div className='lg:container px-5 py-10 lg:py-14 w-full lg:w-1/3'>
                    <h4 className='subtitle lg:mt-10 mb-4' data-aos='fade-down'>
                        {contact.followUs}
                    </h4>
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
                <div className='lg:container px-5 pb-14 lg:py-14 w-full lg:w-1/3'>
                    <h4 className='subtitle lg:mt-10' data-aos='fade-down'>
                        {contact.visitUs}
                    </h4>
                    <br />
                    <div className='flex gap-10 lg:flex-row flex-col'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14597.54704679696!2d78.7429526!3d23.8403962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d7121671656f%3A0x7088d05c6c551cd8!2sAbhishek%20Jain!5e0!3m2!1sen!2sin!4v1689876531377!5m2!1sen!2sin'
                            width='100%'
                            height='400'
                            loading='lazy'
                            style={{ border: 'none' }}
                            referrerPolicy='no-referrer-when-downgrade'></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import { content } from '../constants/Content';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const SendEmail = (props) => {
    const form = useRef();
    const { emails } = content;

    const sendEmail = (e, form) => {
        e.preventDefault();
        emailjs.sendForm('service_d7ozep3', 'template_up9jdow', form.current, 'oZRFB61hp2_4Mf_0J').the(
            (result) => {
                form.current.reset();
                toast.success('Email send Successfully');
            },
            (error) => {
                toast.error(error.text);
            }
        );
    };

    return (
        <form ref={form} onSubmit={(e) => sendEmail(e, form)} data-aos='fade-up' className='flex-1 flex flex-col gap-5'>
            <h4>{emails.title}</h4>
            <input type='text' name='from_name' placeholder='Name' required className='border border-slate-600 p-3 rounded' />
            <input
                type='email'
                name='user_email'
                pattern='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$'
                placeholder='Email Id'
                required
                className='border border-slate-600 p-3 rounded'
            />
            <textarea name='message' placeholder='Message' className='border border-slate-600 p-3 rounded h-44' required></textarea>
            <div className='flex justify-between'>
                <button className='btn self-start bg-white text-dark_primary'>{emails.submit}</button>
                <button onClick={props.closeModal} className='btn'>
                    {emails.close}
                </button>
            </div>
        </form>
    );
};

export default SendEmail;

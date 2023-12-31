import { useState } from 'react';
import { content } from '../constants/Content';
import Modal from 'react-modal';
import SendEmail from './SendEmail';
import { customStyles } from '../services/services';

Modal.setAppElement('#root');

const Hero = () => {
    const { hero } = content;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const downloadPdf = (name) => {
        fetch(name).then((response) => {
            response.blob().then((blob) => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = name;
                alink.click();
            });
        });
    };

    return (
        <section id='home' className='overflow-hidden'>
            <div className='min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center'>
                <div data-aos='slide-left' data-aos-delay='1200' className='absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10'>
                    <h1 className='rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]'>
                        {hero.firstName} <span className='text-dark_primary'>{hero.LastName}</span>
                    </h1>
                </div>
                <div className='pb-16 px-6 pt-5' data-aos='fade-down'>
                    <h2>{hero.title}</h2>
                    <br />
                    <div className='flex justify-end'>
                        <button className='btn mr-5' onClick={() => downloadPdf(hero.resumeName)}>
                            {hero.resumeBtnText}
                        </button>
                        <button
                            className='btn'
                            onClick={() => {
                                openModal();
                            }}>
                            {hero.hireBtnText}
                        </button>
                    </div>
                    <div className='flex flex-col gap-10 mt-10'>
                        {hero.hero_content.map((content, i) => (
                            <div
                                key={i}
                                data-aos='fade-down'
                                data-aos-delay={i * 300}
                                className={`flex items-center w-80 gap-5 ${i === 1 && ' flex-row-reverse text-right'}  `}>
                                <h3>{content.count}</h3>
                                <p>{content.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='md:h-[37rem] h-96'>
                    <img src={hero.image} data-aos='slide-up' alt='...' className='h-full object-cover' />
                </div>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <SendEmail closeModal={closeModal} />
            </Modal>
        </section>
    );
};

export default Hero;

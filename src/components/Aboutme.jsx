import { content } from '../constants/Content';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from '../services/services';

Modal.setAppElement('#root');

const Aboutme = () => {
    const { aboutMe } = content;
    const [activeIndex, setActiveIndex] = useState(0);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <section id='aboutme'>
            <div className='md:container px-5 pt-14'>
                <h2 className='title' data-aos='fade-down'>
                    {aboutMe.title}
                </h2>
                <h4 className='subtitle' data-aos='fade-down'>
                    {aboutMe.subtitle}
                </h4>
                {aboutMe.description.map((desc, i) => (
                    <div className='flex items-center flex-col-reverse' key={i}>
                        <p className='leading-7'>{desc.title}</p>
                        <br />
                    </div>
                ))}
                <br />
                <img src={aboutMe.image} alt='...' />
                <br />
            </div>
            <br />
            <div className='md:container px-5 pt-14'>
                <h2 className='title' data-aos='fade-down'>
                    {aboutMe.exTitle}
                </h2>
                <h4 className='subtitle' data-aos='fade-down'>
                    {aboutMe.exSubtitle}
                </h4>
                <br />
                <Swiper
                    centeredSlides={true}
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    data-aos='fade-up'
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1.4}
                    onSlideChange={(e) => {
                        setActiveIndex(e.realIndex);
                    }}
                    modules={[Pagination]}
                    className='md:h-96 h-[40rem] max-w-3xl'>
                    {aboutMe.exp_content.map((content, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className={` duration-500 bg-bg_light_primary mx-8 border-2 p-8 h-full rounded-2xl flex items-center gap-6 border-slate-200 md:flex-row flex-col ${
                                    activeIndex !== i && 'scale-75 blur-sm'
                                }`}>
                                <div className='flex sm:flex-col gap-2 sm:gap-0 justify-between'>
                                    <img src={content.company} alt='...' className='h-16 w-16 sm:w-20 rounded-full' />
                                    <br/>
                                    <img src={content.client} alt='...' className='h-16 w-16 sm:w-20 rounded-full' />
                                </div>
                                <div className='w-full'>
                                    <div className='flex items-center sm:items-start justify-between flex-col'>
                                        <h6 className='mb-2 sm:mb-0'>{content.companyName}</h6>
                                        <h5 className='flex flex-col items-center sm:items-start gap-2  sm:gap-0'>
                                            {content.position} <i>({content.duration})</i>
                                        </h5>
                                    </div>
                                    <br />
                                    <h6 className='text-center sm:text-left mb-2 sm:mb-0'>Client: {content.client_name}</h6>
                                    <h5 className='flex flex-col sm:flex-row gap-2 items-center sm:items-start justify-between'>
                                        <span> Project: {content.proj_name}</span>
                                        <button
                                            onClick={() => {
                                                // openModal();
                                            }}>
                                            <i>View More</i>
                                        </button>
                                    </h5>
                                </div>
                                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                                    <h6>{content.proj_name}</h6>
                                    <br />
                                    <p className='sm:text-base text-sm'>{content.proj_detail}</p>
                                </Modal>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <br />
            </div>
        </section>
    );
};

export default Aboutme;

import { content } from '../constants/Content';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { useState } from 'react';

const Testimonials = () => {
    const { testimonials } = content;
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <section id='testimonial'>
            <div className='md:container px-5 pt-14'>
                <h2 className='title' data-aos='fade-down'>
                    {testimonials.title}
                </h2>
                <h4 className='subtitle' data-aos='fade-down'>
                    {testimonials.subtitle}
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
                    spaceBetween={40}
                    slidesPerView={1.7}
                    onSlideChange={(e) => {
                        setActiveIndex(e.realIndex);
                    }}
                    modules={[Pagination]}
                    className='md:h-96 h-[40rem] max-w-3xl'>
                    {testimonials.testimonials_content.map((content, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className={` duration-500 bg-bg_light_primary mx-8 border-2 p-8 h-full rounded-2xl flex items-center gap-6 border-slate-200 md:flex-row flex-col ${
                                    activeIndex !== i && 'scale-75 blur-sm'
                                }`}>
                                <img src={content.img} alt='...' className='h-24' />
                                <div>
                                    <p className='sm:text-base text-sm h-25 overflow-y-scroll'>{content.review}</p>
                                    <br />
                                    <div className='flex flex-col sm:flex-row items-center justify-between'>
                                        <h5 className='mb-2'>{content.name}</h5>
                                        <h6>
                                            <i>Product: </i>
                                            {content.product}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;

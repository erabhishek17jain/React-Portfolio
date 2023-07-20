import { content } from '../constants/Content';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

const Projects = () => {
    const { projects } = content;
    return (
        <section className='bg-bg_light_primary' id='projects'>
            <div className='md:container px-5 pt-14 min-h-screen flex flex-col justify-between'>
                <div>
                    <h2 className='title' data-aos='fade-down'>
                        {projects.title}
                    </h2>
                    <h4 className='subtitle' data-aos='fade-down'>
                        {projects.subtitle}
                    </h4>
                    <br />
                </div>
                <div className='flex items-center lg:flex-row flex-col-reverse gap-5'>
                    <img src={projects.image} alt='...' data-aos='fade-right' className='max-w-[45vw] min-w-[22rem]' />
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        data-aos='fade-left'
                        spaceBetween={20}
                        modules={[Pagination]}
                        className='rounded-3xl pb-16 xl:max-w-xl xs:max-w-xs drop-shadow-primary self-start'
                        style={{ width: '100%' }}>
                        {projects.project_content.map((content, i) => (
                            <SwiperSlide key={i} className='bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit'>
                                <img src={content.image} alt='...' />
                                <div className='flex flex-col gap-1 mt-4 justify-between' style={{ height: '350px' }}>
                                    <div>
                                        <h5 className='font-bold font-Poppins'>{content.title}</h5>
                                        <div className='mt-2 h-64 overflow-y-scroll'>{content?.description}</div>
                                    </div>
                                    <div className='flex justify-between mt-4'>
                                        <a href={content.github} target='_blank' className='btn mr-5'>
                                            {projects.githubText}
                                        </a>
                                        <a href={content.liveUrl} target='_blank' className='btn'>
                                            {projects.liveUrlText}
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Projects;

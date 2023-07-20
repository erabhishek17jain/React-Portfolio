import { content } from '../constants/Content';

const Aboutme = () => {
    const { aboutMe } = content;

    return (
        <section  id='aboutme'>
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
        </section>
    );
};

export default Aboutme;

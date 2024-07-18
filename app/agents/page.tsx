import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import styles from './agents.module.css';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel'; 
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Agents = () => {
    return (
        <div>
            <Header />
            <section className={styles.agents_intro}>
                <h1>Meet Our Experienced Real Estate Agents</h1>
                <p>Our team of professional real estate agents is dedicated to helping you find your dream home. With extensive knowledge of the local market and a commitment to excellence, our agents provide unparalleled service to make your home buying or selling experience seamless and stress-free.</p>
            </section>

            <section className={styles.agent_profiles}>
                <h2>Our Agents</h2>
                <Carousel> 
                <div className={styles.agent_card}>
                    <Image src="/dummy-logo.png" width={190} height={100} alt='hero-section' className={styles.hero_image_section} />
                    <p>"Jane has over 10 years of experience in the real estate industry. Her expertise in the local market and her dedication to clients make her an invaluable asset to anyone looking to buy or sell a home."</p>
                    <Image src="/agent3.png" width={150} height={150} alt='hero-section' className={styles.hero_image_section} />
                    <h3>Jane Doe</h3>
                </div>
                <div className={styles.agent_card}>
                    <Image src="/dummy-logo.png" width={190} height={100} alt='hero-section' className={styles.hero_image_section} />
                    <p>"John is known for his exceptional negotiation skills and his ability to close deals quickly. He has a keen eye for finding the perfect property to meet his clients' needs."</p>
                    <Image src="/agent2.png" width={150} height={150} alt='hero-section' className={styles.hero_image_section} />
                    <h3>John Smith</h3>
                </div>
                </Carousel>
            </section>
            <section className={styles.testimonials}>
                <h2>What Our Clients Say</h2>
                <blockquote>
                    <p>"Jane was amazing! She helped us find our dream home and made the process so easy. We couldn't be happier!"</p>
                    <cite>- The Johnson Family</cite>
                </blockquote>
                <blockquote>
                    <p>"John was fantastic to work with. He found us a great investment property and guided us through every step of the purchase."</p>
                    <cite>- Mark and Lisa</cite>
                </blockquote>
            </section>

            <section className={styles.contact_info}>
                <h2>Contact Our Agents</h2>
                <p>Ready to start your real estate journey? Contact us today to speak with one of our experienced agents.</p>
                <p>Email: info@realestateagency.com</p>
                <p>Phone: (123) 456-7890</p>
            </section>

            <Footer />
        </div>
    );
};

export default Agents;

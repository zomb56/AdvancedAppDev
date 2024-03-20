import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
// import Sidebar from './Sidebar';
import '../About/About.css';

const About = () => {
    return(
        <>
        <Navbar/>
        <div className='main'>
        {/* <Sidebar/> */}
        <div className="mx-auto about-container">
            <h2 className='h1-responsive fw-bold text-center text-white mt-3 mb-5'>About ZenVista</h2>
            <p className='col-lg-10 mx-auto mb-5'>
            Welcome to our yoga academy, where we are dedicated to promoting
            health, wellness, and spiritual growth through the practice of
            yoga. Our academy offers a variety of classes, workshops, and
            retreats suitable for practitioners of all levels, from beginners
            to advanced yogis.
            </p>
            <p className='col-lg-10 mx-auto mb-5'>
            At our academy, we believe in the transformative power of yoga to
            improve both physical and mental well-being. Our experienced and
            passionate instructors are committed to guiding students on their
            yoga journey, providing personalized instruction and support in a
            welcoming and inclusive environment. We take data privacy and security seriously, ensuring that
                your information is safeguarded at all times. Read our <a href='/Privacy'>Privacy Policy</a> for more information.
            </p>
            <p className='col-lg-10 mx-auto mb-5'>
            Whether you are looking to deepen your practice, relieve stress,
            or simply find balance in your life, our academy offers a range of
            classes including Hatha, Vinyasa, Yin, and more. Additionally, we
            host specialized workshops and events focused on specific aspects
            of yoga, meditation, and mindfulness. Join us at our academy and experience the benefits of yoga for
            yourself. Explore our class schedule, meet our instructors, and
            discover the sense of community that makes our academy truly
            special.
            </p>

            <p className='col-lg-10 mx-auto mb-5'>
                If you have any questions or feedback, please don't hesitate to <a href="/Contact">Contact Us</a> or give us <a href="/Feedback">Feedback</a>.
                Make sure to also read the <a href='/Terms'>Terms and Conditions</a>.
                We appreciate your trust in our platform and look forward to serving you.
            </p>
        </div>
        </div>
        <Footer/>
        </>
      )
};

export default About;
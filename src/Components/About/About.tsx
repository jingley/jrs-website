import React from 'react';
import Layout from '../../Layout';
import './css/About.css'
import ImageGallery from 'react-image-gallery';

const About = () => {

    const images = [
        {
            original: require('../../imgs/frisbee/1.jpg')
        },
        {
            original: require('../../imgs/frisbee/2.jpg')
        },
        {
            original: require('../../imgs/frisbee/4.jpg')
        },
        {
            original: require('../../imgs/frisbee/5.jpg')
        },
        {
            original: require('../../imgs/frisbee/6.jpg')
        },
        {
            original: require('../../imgs/frisbee/7.jpg')
        },
        {
            original: require('../../imgs/frisbee/8.jpg')
        },
        {
            original: require('../../imgs/frisbee/9.jpg')
        },
        {
            original: require('../../imgs/frisbee/10.JPG')
        },
        {
            original: require('../../imgs/frisbee/11.JPG')
        },
        {
            original: require('../../imgs/frisbee/12.JPG')
        },
        {
            original: require('../../imgs/frisbee/13.JPG')
        },
        {
            original: require('../../imgs/frisbee/14.jpg')
        },
        {
            original: require('../../imgs/frisbee/17.jpg')
        },
    ]

    return (
        <Layout>
            <div className="About">
                <header className="Section-title">
                    <h1>About Me</h1>
                </header>
                <div className="About-body">
                    <section className="Intro">
                        <p>
                            Thank you for checking out my resume <span className="Standout-text">React</span> app! This component is about getting to know me a little.
                        </p>
                    </section>
                    <section>
                        <div className="Section">
                            <div className="Text">
                                <h1 id="about-title">My History With Ultimate Frisbee</h1>
                                <p id="about-text">For the last 5 years, I played Ultimate frisbee year-round. I played collegiality for the University of Georgia's team, Jojah, as well as captained the team for 2 years.
                                    We competed nationally 3 times in the last 4 years, and we won the regional championship 3 times as well. I also play for a summer club team, Murmur.
                            On top of my official teams, I have had the pleasure of playing around the country and the world: California, Wisconsin, Georgia, Florida, North Carolina,
                                    Tennessee, and <span className="Standout-text">South Korea</span>. That's probably what I love most about the sport: the ability to meet people of different experiences all over the world, and be able to connect through Ultimate.</p>
                            </div>
                            <div className="Images">
                                <ImageGallery items={images} showThumbnails={false}/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default About;
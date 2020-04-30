import React from 'react';
import Layout from '../../Layout';
import './css/About.css'
import ImageGallery from 'react-image-gallery';

const About = () => {

    const frisbeeImages = [
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
    ];

    const koreaImages = [
        {
            original: require('../../imgs/korea/1.jpg')
        },
        {
            original: require('../../imgs/korea/2.jpg')
        },
        {
            original: require('../../imgs/korea/3.jpg')
        },
        {
            original: require('../../imgs/korea/4.jpg')
        },
        {
            original: require('../../imgs/korea/5.jpg')
        },
        {
            original: require('../../imgs/korea/6.jpg')
        },
        {
            original: require('../../imgs/korea/7.jpg')
        },
        {
            original: require('../../imgs/korea/8.jpg')
        },
        {
            original: require('../../imgs/korea/9.jpg')
        },
        {
            original: require('../../imgs/korea/10.jpg')
        },
        {
            original: require('../../imgs/korea/11.jpg')
        },
        {
            original: require('../../imgs/korea/12.jpg')
        },
        {
            original: require('../../imgs/korea/13.jpg')
        },
        {
            original: require('../../imgs/korea/14.jpg')
        },
        {
            original: require('../../imgs/korea/15.jpg')
        },
        {
            original: require('../../imgs/korea/16.jpg')
        },
        {
            original: require('../../imgs/korea/17.jpg')
        },
        {
            original: require('../../imgs/korea/18.jpg')
        },
        {
            original: require('../../imgs/korea/19.jpg')
        },
    ];

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
                                <p id="about-text">For the last 5 years, I played Ultimate frisbee year-round. I played in the college level for the University of Georgia's team, Jojah, as well as captained the team for 2 years.
                                    We competed nationally 3 times in the last 4 years, and we won the regional championship 3 times as well. I also play for a summer club team, Murmur.
                            On top of my official teams, I have had the pleasure of playing around the country and the world: California, Wisconsin, Georgia, Florida, North Carolina,
                                    Tennessee, and <span className="Standout-text">South Korea</span>. That's probably what I love most about the sport: the ability to meet people of different experiences all over the world, and be able to connect through Ultimate.</p>
                            </div>
                            <div className="Images">
                                <ImageGallery items={frisbeeImages} showThumbnails={false}/>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="Section">
                            <div className="Text">
                                <h1 id="about-title">My Summer Abroad in South Korea</h1>
                                <p id="about-text">As a part of my University's degree requirements, I had to take 3 semesters of a foreign language. My roommate at the time, advised me to take Korean, and I did. This might have been the second
                                most influential decision I made at UGA (behind joining the Ultimate Frisbee club). I never imagined I would find such an interest in learning a new language and its culture. After
                                taking the 2 intro courses, I decided to go study abroad during the summer of 2018. Prior to this experience, I was blinded by my own reality to the world. It made no sense to me if people didn't see something like
                                I did. As I mentioned before, I got to play Frisbee in South Korea, and I met all of my friends there through that. These were South Korean natives and other people from across the world: Canada,
                                USA, Italy, Germany, Mexico, just to name a few. We all grew up in different places with different values, and that made the experiences we made together all the more special. What I respect the most about Korean culture is
                                their emphasis on family (extending to friends as well). All the people I met made this lonely foreigner feel right at home for the entirety of my trip. I look forward to returning to visit sometime soon :) <i>Oh, and don't
                                get me started on how insanely good Korean food is hahaha.</i></p>
                            </div>
                            <div className="Images">
                                <ImageGallery items={koreaImages} showThumbnails={false}/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default About;
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
                                <p id="about-text">For the last five years, I played Ultimate frisbee year-round for UGA’s collegiate-level team,
                                    Jojah In my final two years with the team, I also served as a team captain.  Our team competed nationally in
                                    three of the last four years, and we won the regional championship three times as well. I have also played for
                                    a summer club frisbee team, Murmur. Frisbee has afforded me opportunities to  play across the country and
                                    around the world. What I love most about the sport is the ability to meet people of varying cultures and
                                    backgrounds from all parts of the world.</p>
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
                                <p id="about-text">As a component of my degree requirements, I took three semesters of a foreign language.
                                    At the suggestion of my roommate, I chose to enroll in Korean language classes. This decision may have
                                    been one of the  most influential choices I made at UGA. I never imagined I would develop such a strong
                                    passion for learning a new language, in addition to a completely different culture. After taking the two
                                    introductory courses, I chose to study abroad during Summer, 2018. Prior to this experience, I was naïve
                                    to a world beyond western culture . It made no sense to me if people didn't see something precisely from my
                                    perspective. I had opportunities to play Frisbee in South Korea, which provided me an opportunity to make new
                                    friends.  Most of my new friends were native South Koreans, while other ones hailed from Canada, Italy,
                                    Germany, Mexico and other countries. We all grew up in different places with different values, and that
                                    made our experiences together all the more special. What I admire most about Korean culture is its emphasis
                                    on family, which includes not only one’s nuclear family, but also one’s friends. All the people I befriended
                                    made this lonely foreigner feel right at home for the entirety of my trip. I look forward to returning to visit
                                    sometime soon  Oh, and don't get me started on how insanely good Korean food is!</p>
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
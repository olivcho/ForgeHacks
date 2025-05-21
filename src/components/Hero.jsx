import React, { useState, useEffect } from 'react'
import "./Hero.css"

function Hero() {
    const words = ["builders.", "students.", "professionals.", "engineers.", "you."];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000); // Change word every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-container">
            <div className="hero-title-container">
                <h1 className="hero-title">ForgeHacks is for 
                    <span className="flip-text">{words[currentWordIndex]}</span>
                </h1>
            </div>
            <p>We know building alone is hard. ForgeHacks is a community-driven hackathon
                that connects you with makers, mentors, and investors who get it.</p>
            <iframe
                src="https://lu.ma/embed/event/evt-5L5GDEKngBTgA72/simple"
                width="1000"
                height="550"
                frameborder="0"
                className="iframe"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            ></iframe>
            {/* <div className="judges-container">
                <h2>Judges</h2>
                <div className="judge-container">
                    <h3>Coming soon.</h3>
                </div>
            </div> */}
            <p className="footer">Questions or sponsorships should be directed to <a href="mailto:help@forgehacks.io">help@forgehacks.io</a></p>
        </div>
    )
}

export default Hero;
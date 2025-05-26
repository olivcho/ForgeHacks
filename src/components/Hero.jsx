import React, { useState, useEffect } from 'react'
import "./Hero.css"
import CountdownTimer from './CountdownTimer'

function Hero() {
    const words = ["builders.", "students.", "professionals.", "engineers.", "you."];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const hackathonDate = "2025-08-02T10:00:00"; // Set this to your hackathon start date

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 4000); // Change word every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-container">
            <div className="hero-title-container">
                <h1 className="hero-title">ForgeHacks is for 
                    <span className="flip-text">{words[currentWordIndex]}</span>
                </h1>
            </div>
            <p>Building alone is hard. ForgeHacks is a community-driven hackathon
                that connects you with makers, mentors, and investors to help you get it done.</p>
            <CountdownTimer className="countdown-timer" targetDate={hackathonDate} />
            <button
                className="register-button noSelect"
                onClick={() => window.open("https://lu.ma/event/evt-5L5GDEKngBTgA72", "_blank")}
            >
                Secure Your Spot
                <img
                    className="arrow-up-right"
                    src="public/arrow-up-right.svg"
                    style={{width: "1.7rem", height: "1.7rem"}}/>
            </button>

            <iframe
                src="https://lu.ma/embed/event/evt-5L5GDEKngBTgA72/simple"
                className="iframe"
                frameborder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>
            <p className="footer">Questions or sponsorships should be directed to <a href="mailto:help@forgehacks.io">help@forgehacks.io</a></p>
        </div>
    )
}

export default Hero;
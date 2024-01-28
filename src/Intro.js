import { useEffect } from "react";
import { useState } from "react";
import './Intro.css'

export default function Intro(props) {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = [' Pranav', ' Front-End Developer', ' ReactNerd']; // Add more words as needed

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change word every 2 seconds (adjust as needed)

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position+20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const rotateValue = (scrollPosition / window.innerHeight) * 720; // Adjust as needed
    const moveValue = (scrollPosition / window.innerWidth) * 100; // Adjust as needed

    return (
        <section className="scroller show">
            {/* <img className="first-img" src={props.src}></img> */}
            <h1 className="main-text">
                Hey I am
                {words.map((word, index) => (
                    <span key={index} style={{ display: index === currentWordIndex ? 'inline' : 'none' }}>
                        {word}
                    </span>
                ))}

            </h1>
            <div className="desc">
                {/* <div
                    className="rotating-div box "
                    style={{
                        transform: `rotate(${rotateValue}deg)`,
                        left: `${moveValue}px`,
                      }}
                /> */}
                    {/* <div className="rotate-to-right box"></div> */}
                    {/* <div className="blocks block1 slide-to-right "></div>
                <div className="blocks block2 slide-to-right "></div>
                <div className="blocks block3 slide-to-right "></div>
                <div className="blocks block4 slide-to-right "></div> */}
                    <h2>About me</h2>
                    <p className="intro-para">
                        I am Pranav Tiwari, currently pursuing my BCA degree with a specialization in Front-End Development. I have a passion for creating functional and challenging websites. My primary goal is to secure a remote position, bringing not only professional success but also creating moments of joy for my family.<br></br><br></br>

                        In terms of technical skills, I am proficient in JavaScript and its library, React. Additionally, I have hands-on experience with HTML, CSS, and Python. My familiarity with GitHub showcases my ability to collaborate and manage version control effectively.<br></br><br></br>

                        I have a background in UI/UX, contributing to a well-rounded skill set. I am driven by the desire to excel and create meaningful digital experiences.<br></br><br></br>

                        My journey has been marked by continuous learning and improvement, and I am excited about the prospect of contributing to innovative projects in a remote work environment.<br></br><br></br>

                    </p>

                </div>

        </section>
    )
}




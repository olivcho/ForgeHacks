import './Sponsors.css';
import Marquee from 'react-fast-marquee';

const sponsors = [
    {
        image: "/static/Reach Capital.jpg",
        url: "https://reachcapital.com"
    },
    {
        image: "/static/Composite.svg",
        url: "https://composite.com"
    },
    {
        image: "/static/WomenWhoAI.png",
        url: "https://womenwho.ai"
    },
    {
        image: "/static/Swsh.png",
        url: "https://joinswsh.com"
    },
    {
        image: "/static/augmentcode.png",
        url: "https://augmentcode.com"
    },
    {
        image: "/static/breakvc.png",
        url: "https://breakvc.com"
    }
];

function Sponsors() {
    return (
        <section className="sponsors">

            <h2 className="sponsors-title">Meet Our Sponsors</h2>
            <Marquee
                speed={50}
                direction="right"
            >
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="sponsor">
                        <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={sponsor.image} 
                                alt="Sponsor logo" 
                                className={sponsor.image.includes('Swsh.png') ? 'swsh-logo' : ''}
                            />
                        </a>
                    </div>
                ))}
            </Marquee>
        </section>
    )
}

export default Sponsors;
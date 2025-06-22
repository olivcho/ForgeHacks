import './Tracks.css'

function Tracks() {
    return (
        <div className="tracks-container">
            <h1>Tracks</h1>
            <div className="tracks-grid">
                <div className="track-card">
                    <h2 className="track-main-title">Metro</h2>
                    <h3 className="track-subtitle">AI for Public Good</h3>
                    <p className="track-description">
                        Create a product that meaningfully improves the lives of San Francisco residents 
                        (includes public transportation, education access, community building, healthcare equity, 
                        employment, civic engagement, etc)
                    </p>
                </div>
                <div className="track-card">
                    <h2 className="track-main-title">Health</h2>
                    <h3 className="track-subtitle">AI for Healthy Living</h3>
                    <p className="track-description">
                        Create a product that guides users toward healthier habits, whether that be mentally, 
                        physically, or emotionally.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tracks;
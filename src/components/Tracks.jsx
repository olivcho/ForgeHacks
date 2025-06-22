import './Tracks.css'

function Tracks() {
    return (
        <div className="tracks-container">
            <h1>Tracks</h1>
            <div className="tracks-grid">
                <div className="track-card">
                    <h2 className="track-main-title">Metro</h2>
                    <h3 className="track-subtitle">AI for Public Good</h3>
                </div>
                <div className="track-card">
                    <h2 className="track-main-title">Health</h2>
                    <h3 className="track-subtitle">AI for Healthy Living</h3>
                </div>
            </div>
        </div>
    )
}

export default Tracks;
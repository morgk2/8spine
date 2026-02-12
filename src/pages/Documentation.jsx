import { Link } from 'react-router-dom'
import '../index.css'

function Documentation() {
    return (
        <div className="legal-page">
            <div className="noise-overlay"></div>

            <header className="legal-header">
                <Link to="/" className="back-link">&larr; Back</Link>
                <img src="/logo.png" alt="8SPINE" className="legal-logo" />
            </header>

            <main className="legal-content">
                <h1 className="legal-title">Documentation</h1>
                <p className="legal-date">Getting started with 8SPINE</p>

                <section>
                    <h2>What is 8SPINE?</h2>
                    <p>
                        8SPINE is a modular music player that lets you play, catalog, and collect music from multiple sources. It supports local files, self-hosted servers, and community-created modules.
                    </p>
                </section>

                <section>
                    <h2>Getting Started</h2>
                    <ul>
                        <li><strong>Download the App:</strong> Get 8SPINE on <Link to="/download">iOS or Android</Link>.</li>
                        <li><strong>Import Music:</strong> Add your locally stored music files or connect to a self-hosted music server.</li>
                        <li><strong>Add Modules:</strong> Extend functionality by installing modules from the community.</li>
                    </ul>
                </section>

                <section>
                    <h2>Modules</h2>
                    <p>Modules are community-created extensions that add new features to 8SPINE:</p>
                    <ul>
                        <li><strong>Music File Modules:</strong> Connect to various music databases and sources you have access to.</li>
                        <li><strong>Animated Cover Modules:</strong> Display animated album artwork and visualizations while playing.</li>
                    </ul>
                    <div className="highlight-box">
                        <p>To add a module, use the <code>eightspine://</code> URI scheme with the module URL. Modules are loaded directly into the app.</p>
                    </div>
                </section>

                <section>
                    <h2>Connecting to a Server</h2>
                    <p>8SPINE can connect to self-hosted music servers:</p>
                    <ul>
                        <li><strong>Subsonic API:</strong> Compatible with Navidrome, Airsonic, and other Subsonic-compatible servers.</li>
                        <li><strong>Direct Connection:</strong> Enter your server URL, username, and password in the app settings.</li>
                    </ul>
                    <p>All connections are made directly between your device and your server. 8SPINE never relays or stores your credentials.</p>
                </section>

                <section>
                    <h2>Metadata Matching</h2>
                    <p>
                        8SPINE uses Spotify, Last.fm, and Apple Music APIs to automatically fetch album artwork, artist images, and song metadata for your library. This happens automatically when you import music.
                    </p>
                </section>

                <section>
                    <h2>Support</h2>
                    <p>Need help? Join our community:</p>
                    <ul>
                        <li><strong>Discord:</strong> <a href="https://discord.gg/CJjgAKEvVF" target="_blank" rel="noopener noreferrer">Join the 8SPINE Discord</a></li>
                        <li><strong>Email:</strong> <span className="contact-box" style={{ display: 'inline-block', marginTop: '8px' }}>anothermoumen6@gmail.com</span></li>
                    </ul>
                </section>
            </main>

            <div className="legal-footer">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Use</Link>
            </div>
        </div>
    )
}

export default Documentation

import { Link } from 'react-router-dom'
import '../index.css'

function Privacy() {
    return (
        <div className="legal-page">
            <div className="noise-overlay"></div>

            <header className="legal-header">
                <Link to="/" className="back-link">&larr; Back</Link>
                <img src="/logo.png" alt="8SPINE" className="legal-logo" />
            </header>

            <main className="legal-content">
                <h1 className="legal-title">Privacy Policy</h1>
                <p className="legal-date">Effective Date: December 4, 2025</p>

                <section>
                    <h2>1. Our Commitment</h2>
                    <p>
                        8SPINE is designed to give you direct control over your music playback experience. We believe your listening habits and data are exclusively yours. Our commitment is simple: <strong>We do not store, track, or sell your personal data.</strong>
                    </p>
                </section>

                <section>
                    <h2>2. Zero Data Storage</h2>
                    <p>8SPINE operates without centralized user accounts or servers. We do not collect, store, or transmit:</p>
                    <ul>
                        <li><strong>User Identifiers:</strong> Your name, email address, physical address, or phone number.</li>
                        <li><strong>Activity Logs:</strong> Your music playback history, search queries, or content preferences.</li>
                        <li><strong>Location Data:</strong> Any geographical information.</li>
                    </ul>
                    <p>All application state is stored locally on your device and is not accessible by us.</p>
                </section>

                <section>
                    <h2>3. Local & Hosted Files</h2>
                    <p>The primary function of 8SPINE is to play music files that you own and control.</p>
                    <ul>
                        <li><strong>Local Files:</strong> We only interact with files at the device level. We do not transmit file contents, names, or paths to any external server.</li>
                        <li><strong>Hosted Files:</strong> Connections to self-hosted servers are established directly between your device and that server. We do not act as a relay or log your credentials.</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Third-Party Integrations</h2>
                    <div className="highlight-box">
                        <p>8SPINE uses Spotify, Last.fm, and Apple Music APIs solely for metadata matching—retrieving album artwork, artist information, and song details. We do not store any data obtained from these services.</p>
                    </div>
                    <ul>
                        <li><strong>Authorization:</strong> When connecting to third-party services, you are directed to their secure login pages. We never see or store your credentials.</li>
                        <li><strong>Token Usage:</strong> Authorization tokens are stored locally on your device only.</li>
                        <li><strong>Third-Party Policies:</strong> Your use of these services is governed by their respective privacy policies.</li>
                    </ul>
                </section>

                <section>
                    <h2>5. Policy Changes</h2>
                    <p>
                        We may update this Privacy Policy from time to time. Changes will be reflected in the "Effective Date" above. Given our zero-data policy, changes would primarily relate to new optional features.
                    </p>
                </section>

                <section>
                    <h2>6. Contact</h2>
                    <p>Questions about this policy? Contact us:</p>
                    <div className="contact-box">anothermoumen6@gmail.com</div>
                </section>
            </main>

            <div className="legal-footer">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Use</Link>
            </div>
        </div>
    )
}

export default Privacy

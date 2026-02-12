import { Link } from 'react-router-dom'
import '../index.css'

function Terms() {
    return (
        <div className="legal-page">
            <div className="noise-overlay"></div>

            <header className="legal-header">
                <Link to="/" className="back-link">&larr; Back</Link>
                <img src="/logo.png" alt="8SPINE" className="legal-logo" />
            </header>

            <main className="legal-content">
                <h1 className="legal-title">Terms of Use</h1>
                <p className="legal-date">Effective Date: December 5, 2025</p>

                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By downloading, installing, or using 8SPINE ("the App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the App.
                    </p>
                </section>

                <section>
                    <h2>2. Description of Service</h2>
                    <p>8SPINE is a modular music playing, cataloging, and collecting application. The App allows users to:</p>
                    <ul>
                        <li><strong>Import Local Files:</strong> Play music files stored locally on your device.</li>
                        <li><strong>Connect to Personal Servers:</strong> Stream music from your own self-hosted servers and databases.</li>
                        <li><strong>Use Modules:</strong> Extend functionality through user-created modules for music files and animated covers.</li>
                        <li><strong>Metadata Matching:</strong> The App uses Spotify, Last.fm, and Apple Music APIs to retrieve album artwork, artist information, and song metadata.</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Legal Use Only</h2>
                    <div className="warning-box">
                        <p><strong>8SPINE is designed exclusively for playing legally purchased or owned music.</strong> The App is intended for personal music collections that you have lawfully acquired.</p>
                    </div>
                    <p>You agree to use 8SPINE only for:</p>
                    <ul>
                        <li>Music you have legally purchased or downloaded</li>
                        <li>Music you own the rights to</li>
                        <li>Music from services you have legitimate access to</li>
                        <li>Content that does not infringe on any copyright or intellectual property rights</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Prohibited Activities</h2>
                    <p>The following activities are strictly prohibited:</p>
                    <ul>
                        <li><strong>Piracy:</strong> Using 8SPINE to play, distribute, or access pirated or illegally obtained music.</li>
                        <li><strong>Copyright Infringement:</strong> Playing copyrighted content without proper authorization or licensing.</li>
                        <li><strong>Illegal Distribution:</strong> Sharing or distributing copyrighted material through the App or its modules.</li>
                        <li><strong>Malicious Modules:</strong> Creating or distributing modules designed to facilitate piracy or illegal activities.</li>
                    </ul>
                </section>

                <section>
                    <h2>5. Modules</h2>
                    <p>8SPINE supports user-created modules for extending functionality:</p>
                    <ul>
                        <li><strong>Music File Modules:</strong> Connect to various music sources and databases.</li>
                        <li><strong>Animated Cover Modules:</strong> Display animated album artwork and visualizations.</li>
                    </ul>
                    <div className="highlight-box">
                        <p>Module creators are solely responsible for ensuring their modules comply with all applicable laws and do not facilitate copyright infringement. We reserve the right to disable or remove any modules that violate these terms.</p>
                    </div>
                </section>

                <section>
                    <h2>6. Disclaimer of Liability</h2>
                    <p>
                        <strong>8SPINE claims no responsibility for user misuse of the application.</strong> Users are solely responsible for ensuring that their use of the App complies with all applicable laws and regulations.
                    </p>
                    <p>We are not liable for:</p>
                    <ul>
                        <li>Any copyright infringement committed by users</li>
                        <li>Content accessed through user-configured servers or modules</li>
                        <li>Third-party modules created by the community</li>
                        <li>Any legal consequences arising from misuse of the App</li>
                    </ul>
                </section>

                <section>
                    <h2>7. Active Enforcement</h2>
                    <p>
                        We are committed to preventing the misuse of 8SPINE for piracy. We actively work to identify and shut down any modules, servers, or content sources that facilitate access to copyrighted material without authorization.
                    </p>
                    <p>
                        If you become aware of any infringing content or modules, please report them to us immediately.
                    </p>
                </section>

                <section>
                    <h2>8. Third-Party Services</h2>
                    <p>
                        8SPINE integrates with third-party services (Spotify, Last.fm, Apple Music) for metadata matching purposes only. Your use of these services is subject to their respective terms of service and privacy policies.
                    </p>
                </section>

                <section>
                    <h2>9. Termination</h2>
                    <p>
                        We reserve the right to terminate or suspend access to 8SPINE for any user who violates these Terms of Use, particularly regarding copyright infringement and piracy.
                    </p>
                </section>

                <section>
                    <h2>10. Changes to Terms</h2>
                    <p>
                        We may modify these Terms of Use at any time. Continued use of the App after changes constitutes acceptance of the new terms. The "Effective Date" above will be updated accordingly.
                    </p>
                </section>

                <section>
                    <h2>11. Contact</h2>
                    <p>For questions about these terms or to report violations:</p>
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

export default Terms

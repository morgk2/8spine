import '../index.css'
import { useState, useEffect } from 'react'

function Download() {
    const [apkUrl, setApkUrl] = useState("https://github.com/morgk2/8spine/releases/download/v0.9.9-alpha/app-release-0.9.9.apk")
    const [version, setVersion] = useState("v0.9.9")

    useEffect(() => {
        fetch('https://api.github.com/repos/morgk2/8spine/releases/latest')
            .then(response => response.json())
            .then(data => {
                if (data.assets) {
                    const apkAsset = data.assets.find(asset => asset.name.endsWith('.apk'))
                    if (apkAsset) {
                        setApkUrl(apkAsset.browser_download_url)
                    }
                }
                if (data.tag_name) {
                    setVersion(data.tag_name)
                }
            })
            .catch(error => console.error('Error fetching latest release:', error))
    }, [])

    return (
        <div className="download-page">
            <div className="noise-overlay"></div>

            <div className="download-content">
                <a href="/" className="back-link">&larr; BACK</a>

                <div className="logo-container">
                    <img src="/logo.png" alt="8SPINE" className="logo" />
                </div>

                <h1 className="download-title">GET 8SPINE</h1>
                <p className="download-subtitle">CURRENTLY IN OPEN BETA — {version}</p>

                <div className="download-cards">
                    <a
                        href="https://testflight.apple.com/join/WpRgRCDm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-card"
                    >
                        <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                        </div>
                        <div className="card-info">
                            <span className="card-platform">iOS</span>
                            <span className="card-action">Download on TestFlight</span>
                            <span className="card-version">Latest</span>
                        </div>
                        <span className="card-arrow">&rarr;</span>
                    </a>

                    <a
                        href={apkUrl}
                        className="download-card"
                    >
                        <div className="card-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
                                <path d="M17.6 11.48l1.89-3.27c.11-.18.04-.42-.14-.53-.18-.11-.42-.04-.53.14l-1.92 3.32C15.34 10.42 13.74 10 12 10c-1.74 0-3.34.42-4.9 1.14L5.18 7.82c-.11-.18-.35-.25-.53-.14-.18.11-.25.35-.14.53l1.89 3.27C3.12 13.18 1.04 16.18 1 19.5h22c-.04-3.32-2.12-6.32-5.4-8.02zM7 17.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
                            </svg>
                        </div>
                        <div className="card-info">
                            <span className="card-platform">Android</span>
                            <span className="card-action">Download APK</span>
                            <span className="card-version">{version}</span>
                        </div>
                        <span className="card-arrow">&rarr;</span>
                    </a>
                </div>

                <div className="download-footer">
                    <p>Join the community on <a href="https://discord.gg/CJjgAKEvVF" target="_blank" rel="noopener noreferrer">Discord</a></p>
                </div>
            </div>
        </div>
    )
}

export default Download

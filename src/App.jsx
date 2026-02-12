import { useNavigate } from 'react-router-dom'
import './index.css'

function App() {
  const navigate = useNavigate()

  return (
    <div className="landing-container">
      <div className="noise-overlay"></div>

      <div className="left-panel">
        <div className="logo-container">
          <img src="/logo.png" alt="8SPINE" className="logo" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            DISCOVER<br />
            MUSIC<br />
            AGAIN
          </h1>

          <div className="cta-container">
            <button
              className="btn btn-primary"
              onClick={() => navigate('/download')}
            >
              DOWNLOAD NOW
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => window.location.href = '/documentation.html'}
            >
              DOCUMENTATION
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => window.open('https://discord.gg/CJjgAKEvVF', '_blank')}
            >
              DISCORD
            </button>
          </div>
        </div>
      </div>

      <div className="right-panel">
        <div className="transition-overlay"></div>
      </div>
    </div>
  )
}

export default App

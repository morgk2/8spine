import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

function App() {
  const navigate = useNavigate()
  const [albums, setAlbums] = useState([])
  const [displayAlbums, setDisplayAlbums] = useState([])

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://api.deezer.com/playlist/3155776842/tracks?limit=100'))
        const outerData = await response.json()
        const data = JSON.parse(outerData.contents)
        if (data.data && Array.isArray(data.data)) {
          const albumList = data.data.map(track => track.album)
          const uniqueAlbums = Array.from(new Map(albumList.map(item => [item.id, item])).values())
          setAlbums(uniqueAlbums)
          const shuffled = [...uniqueAlbums].sort(() => 0.5 - Math.random())
          setDisplayAlbums(shuffled.slice(0, 32))
        }
      } catch (error) {
        console.error("Failed to fetch albums", error)
      }
    }
    fetchAlbums()
  }, [])

  useEffect(() => {
    const updateGrid = () => {
      const panel = document.querySelector('.right-panel')
      if (panel) {
        const width = panel.offsetWidth
        const isMobile = window.innerWidth <= 768
        const cols = isMobile ? 3 : 4
        const gap = isMobile ? 8 : 12
        const padding = isMobile ? 8 : 12
        const availableWidth = width - (padding * 2) - ((cols - 1) * gap)
        const itemSize = availableWidth / cols
        const rowHeight = itemSize + gap
        const panelHeight = panel.offsetHeight - (padding * 2)
        const rows = Math.ceil(panelHeight / rowHeight)
        const totalItems = rows * cols

        if (totalItems !== displayAlbums.length) {
          const current = albums.length > 0 ? albums : []
          setDisplayAlbums(current.slice(0, totalItems))
        }
      }
    }

    updateGrid()
    window.addEventListener('resize', updateGrid)
    if (albums.length > 0) updateGrid()
    return () => window.removeEventListener('resize', updateGrid)
  }, [albums])

  const targetCount = displayAlbums.length > 0 ? displayAlbums.length : 16
  const filledItems = [...displayAlbums]
  while (filledItems.length < targetCount) {
    filledItems.push({
      id: `placeholder-${filledItems.length}`,
      color: `hsl(0, 0%, ${Math.random() * 15 + 10}%)`,
      isPlaceholder: true
    })
  }

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
        <div className="grid-container">
          {filledItems.map((item, index) => (
            <div key={item.id || index} className="grid-item" style={{ backgroundColor: item.color || '#111' }}>
              {item.cover_big && (
                <img
                  src={item.cover_big}
                  alt={item.title}
                  className="album-cover"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                />
              )}
              <div className="glitch-layer"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

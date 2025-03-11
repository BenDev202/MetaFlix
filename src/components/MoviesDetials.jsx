import "./movie-details.css"
import { Play, Star, TrendingUp, ArrowRight } from "react"

export default function MovieDetails() {
  return (
    <div className="movie-page">
      <div className="movie-container">
        <header className="movie-header">
          <h1 className="movie-title">Squid Game 2</h1>
          <div className="movie-rating-container">
            <div className="rating-badge">
              <Star className="star-icon" size={16} fill="#FFD700" stroke="#FFD700" />
              <span className="rating">8.9</span>
              <span className="rating-count">/10 (200K)</span>
            </div>
            <div className="trending-badge">
              <TrendingUp size={16} />
              <span>1</span>
            </div>
          </div>
        </header>

        <div className="movie-meta">
          <span className="year">2024</span>
          <span className="separator">•</span>
          <span className="rating-pg">PG-13</span>
          <span className="separator">•</span>
          <span className="duration">2h 46m</span>
        </div>

        <div className="movie-media">
          <div className="movie-poster">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modal-1iUo9lFJuPCUUaXbYisEURJSk37aRg.png"
              alt="Squid Game 2 Poster"
              className="poster-image"
            />
          </div>
          <div className="movie-trailer">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/modal-1iUo9lFJuPCUUaXbYisEURJSk37aRg.png"
              alt="Squid Game 2 Banner"
              className="trailer-image"
            />
            <button className="play-button">
              <Play className="play-icon" size={18} />
              <span>Trailer</span>
              <span className="trailer-duration">00:31</span>
            </button>
          </div>
        </div>

        <div className="movie-genres">
          <h3 className="section-title">Genres</h3>
          <div className="genre-tags">
            <span className="genre-tag">Adventure</span>
            <span className="genre-tag">Action</span>
            <span className="genre-tag">Drama</span>
          </div>
        </div>

        <div className="visit-homepage">
          <a href="#" className="homepage-button">
            Visit Homepage <ArrowRight size={16} />
          </a>
        </div>

        <div className="movie-details-grid">
          <div className="detail-row">
            <h3 className="detail-label">Overview</h3>
            <p className="detail-value overview-text">
              Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a
              tempting prize awaits with deadly high stakes: a survival game that has a whopping 45.6 billion-won prize
              at stake.
            </p>
          </div>

          <div className="detail-row">
            <h3 className="detail-label">Release date</h3>
            <p className="detail-value">December 26, 2024 (Worldwide)</p>
          </div>

          <div className="detail-row">
            <h3 className="detail-label">Countries</h3>
            <p className="detail-value countries">
              <span>United Stated</span>
              <span>•</span>
              <span>Canada</span>
              <span>•</span>
              <span>UAE</span>
              <span>•</span>
              <span>Hungary</span>
              <span>•</span>
              <span>Italy</span>
              <span>•</span>
              <span>New Zealand</span>
            </p>
          </div>

          <div className="detail-row">
            <h3 className="detail-label">Status</h3>
            <p className="detail-value">Released</p>
          </div>

          <div className="detail-row">
            <h3 className="detail-label">Language</h3>
            <p className="detail-value languages">
              <span>English</span>
              <span>•</span>
              <span>Korean</span>
              <span>•</span>
              <span>Hindi</span>
              <span>•</span>
              <span>Arabic</span>
              <span>•</span>
              <span>German</span>
              <span>•</span>
              <span>Spanish</span>
            </p>
          </div>

          <div className="detail-row">
            <h3 className="detail-label">Budget</h3>
            <p className="detail-value">$21.4 million</p>
          </div>

          <div className="detail-row">
            <h3 className="detail-label">Revenue</h3>
            <p className="detail-value">$900 Million</p>
          </div>

          <div className="detail-row">
            <h3 className="detail-label">Tagline</h3>
            <p className="detail-value">45.6 Billion Won is Child's Play</p>
          </div>

          <div className="detail-row">
            <h3 className="detail-label">Production Companies</h3>
            <p className="detail-value companies">
              <span>Legendary Entertainment</span>
              <span>•</span>
              <span>Warner Bros. Entertainment</span>
              <span>•</span>
              <span>Villeneuve Films</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


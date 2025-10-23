import React from 'react'
import './HeroSection.css'

function HeroSection({ data, onButtonHover, onStartClick, isVisible, onPersonalOfferClick, onAnalyticsClick, onVideoCasesClick }) {
  return (
    <section className={`hero-section ${!isVisible ? 'hidden' : ''}`}>
      <div className="hero-content">
        <h1 className="hero-greeting">
          Hello <span className="hero-name">{data.clientName}</span>
        </h1>
        <p className="hero-subtitle">
          {data.subtitle}
        </p>
        
        {/* Mobile Navigation */}
        <div className="mobile-nav">
          <button className="mobile-nav-btn" onClick={onPersonalOfferClick}>
            Personal Offer
          </button>
          <button className="mobile-nav-btn" onClick={onAnalyticsClick}>
            Analytics
          </button>
          <button className="mobile-nav-btn" onClick={onVideoCasesClick}>
            Video Cases
          </button>
        </div>

        <div className="hero-cta">
          <button 
            className="start-button"
            onMouseEnter={() => onButtonHover(true)}
            onMouseLeave={() => onButtonHover(false)}
            onClick={onStartClick}
          >
            <span className="button-text">Start</span>
            <span className="button-glow"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection


import React from 'react'
import './MobileNavigation.css'

function MobileNavigation({ isVisible, onPersonalOfferClick, onAnalyticsClick, onVideoCasesClick }) {
  if (!isVisible) return null

  return (
    <div className="mobile-nav-fixed">
      <button className="mobile-nav-btn mobile-nav-btn-primary" onClick={onPersonalOfferClick}>
        Personal Offer
      </button>
      <button className="mobile-nav-btn" onClick={onAnalyticsClick}>
        Analytics
      </button>
      <button className="mobile-nav-btn" onClick={onVideoCasesClick}>
        Video Cases
      </button>
    </div>
  )
}

export default MobileNavigation


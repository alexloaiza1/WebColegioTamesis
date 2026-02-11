import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export const useGoogleAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-M0WEETSV22', {
        page_path: location.pathname + location.search,
      })
    }
  }, [location])
}

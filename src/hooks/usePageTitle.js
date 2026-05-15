import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/': 'Thantwyl | Home',
  '/projects': 'Thantwyl | Projects',
  '/about': 'Thantwyl | About',
  '/contact': 'Thantwyl | Contact',
}

export const usePageTitle = () => {
  const location = useLocation()

  useEffect(() => {
    const title = pageTitles[location.pathname] || 'Thantwyl - Developer Portfolio'
    document.title = title
  }, [location.pathname])
}

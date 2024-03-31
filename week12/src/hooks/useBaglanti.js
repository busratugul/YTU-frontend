import { useState, useEffect } from 'react'

function useBaglanti() {
  const [baglanti, setBaglanti] = useState(navigator.onLine)

  useEffect(() => {
    const kontrol = setInterval(() => {
        setBaglanti(navigator.onLine)
    }, 1000)
    return () => clearInterval(kontrol)
  }, [])

  return baglanti
}

export default useBaglanti
import { useState, useEffect } from "react";
function useResize() { //bu hook pencere boyutları değiştiğinde genişlik ve yükseklik döndürür.

    const [size, setSize] = useState([0, 0]);

    useEffect(() => {
      const updateSize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
  
      window.addEventListener('resize', updateSize);
      updateSize();
  
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  
    return size;
    
}

export default useResize
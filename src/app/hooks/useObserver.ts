import { useEffect, useState, RefObject } from 'react'


export default function useObserver(ref:RefObject<HTMLElement>, rootMargin = "250") {
    const [isVisible, setIsVisible] = useState(false);

    const options = {
        root: null, 
        rootMargin: `${rootMargin}px`,
        threshold: 1.0
    }

    const focusHandler = (entries:IntersectionObserverEntry[]) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {
        if(ref?.current){
            let observer = new IntersectionObserver(focusHandler, options);
            if(ref.current) observer.observe(ref.current)
    
            return () => {
                if(ref.current) return observer.unobserve(ref.current)
            }
        }
    },[ref])

  return [ isVisible ]
}

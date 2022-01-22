import { useCallback, useEffect, useRef, useState } from 'react'

export default function useResize() {
    let observer = useRef().current
    const initialState = { width: null, height: null }
    const [currentSize, setCurrentSize] = useState(initialState)

    function getSize(entries) {
        const element = entries[0].target

        if(!element) return

        let width = element.offsetWidth ?? 0
        let height = element.offsetHeight ?? 0

        setCurrentSize({ width, height })
    }

    const target = useCallback(element => {
        if(element) {
            observer = new ResizeObserver(getSize)
            observer.observe(element)
        }
    }, [])

    useEffect(() => {
        return () => {
            if(observer) observer.disconnect()
        }
    }, [])

    return [ target, currentSize ]
}
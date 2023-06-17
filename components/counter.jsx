"use client"

import { useCallback, useEffect, useRef } from "react"

const Counter = ({ interval = 100, className }) => {
  const inputRef = useRef(null)

  const increment = useCallback(() => {
    setTimeout(() => {
      inputRef.current.innerHTML++
      increment()
    }, interval)
  }, [])

  useEffect(() => {
    increment()
  }, [increment])

  return (
    <span className={`font-bold flex justify-between ${className}`}>
      <span ref={inputRef}>0</span><span className="text-gray-400">Ft</span>
    </span>
  )
}

export default Counter

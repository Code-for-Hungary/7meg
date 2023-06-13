"use client"

import { useEffect, useRef } from "react"

const Counter = ({ interval = 100 }) => {
  const inputRef = useRef(null)

  const increment = () => {
    setTimeout(() => {
      inputRef.current.innerHTML++
      increment()
    }, interval)
  }

  useEffect(() => {
    increment()
  }, [increment])

  return (
    <span className="text-xl font-bold flex justify-between">
      <span ref={inputRef}>0</span><span className="text-gray-400">HUF</span>
    </span>
  )
}

export default Counter

"use client"

import { useCallback, useEffect, useRef } from "react"

const thouseandSeparator = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

const Counter = ({ interval = 100, amount = 1, unit="Ft", className }) => {
  const inputRef = useRef(null)
  const value = useRef(0)

  const increment = useCallback(() => {
    setTimeout(() => {
      value.current = value.current + parseFloat(amount)
      inputRef.current.innerHTML = thouseandSeparator(parseInt(value.current))
      increment()
    }, interval)
  }, [])

  useEffect(() => {
    increment()
  }, [increment])

  return (
    <span className={`font-bold flex justify-between ${className}`}>
      <span ref={inputRef}>0</span><span className="text-gray-400">{unit}</span>
    </span>
  )
}

export default Counter

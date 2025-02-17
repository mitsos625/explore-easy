"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CarouselProps {
  items: {
    title: string
    content: React.ReactNode
    icon: React.ReactNode
  }[]
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const observerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = items.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index)
          }
        },
        { threshold: 0.5 },
      )
    })

    const currentRefs = observerRefs.current
    currentRefs.forEach((ref, index) => {
      if (ref) observers[index].observe(ref)
    })

    return () => {
      currentRefs.forEach((ref, index) => {
        if (ref) observers[index].unobserve(ref)
      })
    }
  }, [items])

  return (
    <div className="relative">
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) {
              observerRefs.current[index] = el
            }
          }}
          className="min-h-screen flex items-center justify-center p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: activeIndex === index ? 1 : 0, y: activeIndex === index ? 0 : 50 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-center"
          >
            <div className="flex justify-center mb-6">{item.icon}</div>
            <h2 className="text-4xl font-bold mb-4 text-explore-accent">{item.title}</h2>
            <div className="text-lg text-explore-accent">{item.content}</div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default Carousel


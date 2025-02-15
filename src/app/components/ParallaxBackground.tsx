"use client"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const ParallaxBackground = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      const offset = 10
      if (ref.current) {
        ;(ref.current as HTMLElement).style.transform = `translate(${moveX / offset}px, ${moveY / offset}px)`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div ref={ref} className="absolute inset-0 z-0" style={{ y }}>
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="/placeholder.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-70"></div>
    </motion.div>
  )
}

export default ParallaxBackground


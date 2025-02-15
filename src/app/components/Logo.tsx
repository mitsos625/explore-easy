import Image from "next/image"
import type React from "react"

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return <Image src="/logo.png" alt="ExploreEasy Logo" width={150} height={50} className={className} />
}

export default Logo


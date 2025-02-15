import type React from "react"

interface SlideProps {
  title: string
  content: React.ReactNode
}

const Slide: React.FC<SlideProps> = ({ title, content }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-8">
      <h2 className="text-4xl font-bold mb-8 text-green-600">{title}</h2>
      <div className="text-lg">{content}</div>
    </div>
  )
}

export default Slide


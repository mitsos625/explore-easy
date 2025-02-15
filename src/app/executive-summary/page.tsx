import Link from "next/link"

export default function ExecutiveSummary() {
  return (
    <div className="min-h-screen p-24">
      <h1 className="text-3xl font-bold mb-4">Executive Summary</h1>
      <p className="mb-4">
        ExploreEasy is a cutting-edge travel application designed to revolutionize the way people plan and experience
        their journeys. By leveraging advanced AI and user-friendly interfaces, we aim to simplify travel planning and
        enhance the overall travel experience for our users.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  )
}


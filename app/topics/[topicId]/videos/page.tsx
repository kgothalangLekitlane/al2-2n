"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Play, Clock, CheckCircle } from "lucide-react"

export default function VideosPage() {
  const params = useParams()
  const topicId = params.topicId as string

  // Add this near the top of the component, after the params declaration
  const [topicInfo] = useState({
    name: "Algebraic Expressions",
    subjectName: "Mathematics",
    gradeName: "Grade 10",
  })

  // Mock data for now
  const [videos] = useState([
    {
      id: "1",
      title: "Introduction to Algebraic Expressions",
      description: "Learn the basics of variables, coefficients, and terms in algebra",
      duration: "12:34",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Video+1",
      completed: false,
    },
    {
      id: "2",
      title: "Simplifying Algebraic Expressions",
      description: "Master the techniques for combining like terms and simplifying expressions",
      duration: "15:22",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Video+2",
      completed: true,
    },
    {
      id: "3",
      title: "Factoring Algebraic Expressions",
      description: "Understand different factoring methods and when to use them",
      duration: "18:45",
      thumbnail: "/placeholder.svg?height=180&width=320&text=Video+3",
      completed: false,
    },
  ])
  const [loading] = useState(false)

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <nav className="text-sm breadcrumbs mb-4">
          <Link href="/grades" className="text-blue-600 hover:text-blue-800">
            All Grades
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href={`/grades/10/subjects`} className="text-blue-600 hover:text-blue-800">
            {topicInfo.gradeName} Subjects
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href={`/subjects/1/topics`} className="text-blue-600 hover:text-blue-800">
            {topicInfo.subjectName} Topics
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{topicInfo.name} Videos</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{topicInfo.name} Videos</h1>
        <p className="text-lg text-gray-600">Watch video lessons to master algebraic expressions</p>
      </div>

      {/* Videos List */}
      {videos.length > 0 ? (
        <div className="space-y-6">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="md:flex">
                {/* Video Thumbnail */}
                <div className="md:w-80 relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all cursor-pointer">
                      <Play className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  {video.completed && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <span className="text-sm text-gray-500 ml-4">#{index + 1}</span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{video.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{video.duration}</span>
                      {video.completed && (
                        <>
                          <span className="mx-2">•</span>
                          <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                          <span className="text-green-600">Completed</span>
                        </>
                      )}
                    </div>

                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      {video.completed ? "Watch Again" : "Watch Now"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <Play className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Videos Available</h3>
          <p className="text-gray-600">Videos will appear here once they are added to this topic.</p>
        </div>
      )}
    </div>
  )
}

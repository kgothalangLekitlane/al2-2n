"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { BookOpen, ArrowRight, Video, Clock } from "lucide-react"

export default function TopicsPage() {
  const params = useParams()
  const subjectId = params.subjectId as string

  // Add this near the top of the component, after the params declaration
  const [subjectInfo] = useState({
    name: "Mathematics",
    gradeName: "Grade 10", // This should come from the actual data
  })

  // Mock data for now
  const [topics] = useState([
    {
      id: "1",
      name: "Algebraic Expressions",
      description: "Understanding variables, coefficients, and algebraic manipulation",
      videoCount: 5,
      duration: "2.5 hours",
    },
    {
      id: "2",
      name: "Functions and Graphs",
      description: "Linear, quadratic, and exponential functions with graphing",
      videoCount: 7,
      duration: "3.2 hours",
    },
    {
      id: "3",
      name: "Trigonometry",
      description: "Trigonometric ratios, identities, and applications",
      videoCount: 6,
      duration: "2.8 hours",
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
            {subjectInfo.gradeName} Subjects
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{subjectInfo.name} Topics</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{subjectInfo.name} Topics</h1>
        <p className="text-lg text-gray-600">Select a topic to access video lessons and learning materials</p>
      </div>

      {/* Topics Grid */}
      {topics.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Link
              key={topic.id}
              href={`/topics/${topic.id}/videos`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${
                      index % 3 === 0
                        ? "bg-blue-100 text-blue-600"
                        : index % 3 === 1
                          ? "bg-green-100 text-green-600"
                          : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {topic.name}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{topic.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Video className="h-4 w-4 mr-1" />
                    <span>{topic.videoCount} videos</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{topic.duration}</span>
                  </div>
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Topics Available</h3>
          <p className="text-gray-600">Topics will appear here once they are added to this subject.</p>
        </div>
      )}
    </div>
  )
}

"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { BookOpen, ArrowRight, Users, Clock } from "lucide-react"

export default function SubjectsPage() {
  const params = useParams()
  const gradeId = params.gradeId as string

  // Mock data for now
  const [subjects] = useState([
    {
      id: "1",
      name: "Mathematics",
      description: "Comprehensive mathematics curriculum covering algebra, geometry, and calculus",
      topicCount: 12,
      estimatedHours: 45,
    },
    {
      id: "2",
      name: "Physical Sciences",
      description: "Physics and chemistry fundamentals with practical applications",
      topicCount: 8,
      estimatedHours: 32,
    },
    {
      id: "3",
      name: "Life Sciences",
      description: "Biology and life sciences covering cells, genetics, and ecology",
      topicCount: 10,
      estimatedHours: 38,
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
          <span className="text-gray-600">Grade {gradeId} Subjects</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Grade {gradeId} Subjects</h1>
        <p className="text-lg text-gray-600">Choose a subject to explore topics and learning materials</p>
      </div>

      {/* Subjects Grid */}
      {subjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <Link
              key={subject.id}
              href={`/subjects/${subject.id}/topics`}
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
                  {subject.name}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{subject.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{subject.topicCount} topics</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{subject.estimatedHours}h</span>
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
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Subjects Available</h3>
          <p className="text-gray-600">Subjects will appear here once they are added to this grade.</p>
        </div>
      )}
    </div>
  )
}

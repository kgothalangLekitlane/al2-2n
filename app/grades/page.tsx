"use client"

import { useState } from "react"
import Link from "next/link"
import { GraduationCap, ArrowRight, BookOpen, Users } from "lucide-react"

export default function GradesPage() {
  // Mock data for now to avoid build issues
  const [grades] = useState([
    { id: "1", name: "Grade 10", description: "Foundation year for high school mathematics and sciences" },
    { id: "2", name: "Grade 11", description: "Advanced concepts building on Grade 10 knowledge" },
    { id: "3", name: "Grade 12", description: "Final year preparation for university entrance" },
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
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <GraduationCap className="h-8 w-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Grade</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select your grade level to access tailored curriculum and learning materials designed for your academic
          journey.
        </p>
      </div>

      {/* Grades Grid */}
      {grades.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grades.map((grade, index) => (
            <Link
              key={grade.id}
              href={`/grades/${grade.id}/subjects`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${
                      index % 4 === 0
                        ? "bg-blue-100 text-blue-600"
                        : index % 4 === 1
                          ? "bg-green-100 text-green-600"
                          : index % 4 === 2
                            ? "bg-purple-100 text-purple-600"
                            : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {grade.name}
                </h3>

                <p className="text-gray-600 mb-4">{grade.description}</p>

                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>Multiple subjects available</span>
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
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Grades Available</h3>
          <p className="text-gray-600">Grades will appear here once they are added to the system.</p>
        </div>
      )}

      {/* Info Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Structured Learning Path</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Each grade level contains carefully curated subjects and topics that build upon previous knowledge, ensuring
            a comprehensive and progressive learning experience.
          </p>
        </div>
      </div>
    </div>
  )
}

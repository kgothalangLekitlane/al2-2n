import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, Video, Award, ArrowRight, Play, Star, TrendingUp, Clock, Target } from "lucide-react"

export default function HomePage() {
  const stats = [
    { number: "500+", label: "Video Lessons", icon: Video, color: "text-blue-600" },
    { number: "50+", label: "Subjects", icon: BookOpen, color: "text-green-600" },
    { number: "10K+", label: "Students", icon: Users, color: "text-purple-600" },
    { number: "98%", label: "Success Rate", icon: Award, color: "text-orange-600" },
  ]

  const recentActivity = [
    { title: "Mathematics - Algebra", progress: 75, time: "2 hours ago" },
    { title: "Physics - Mechanics", progress: 60, time: "1 day ago" },
    { title: "Chemistry - Organic", progress: 90, time: "3 days ago" },
  ]

  const featuredCourses = [
    { title: "Advanced Mathematics", students: 1200, rating: 4.8, image: "📐" },
    { title: "Modern Physics", students: 800, rating: 4.9, image: "⚛️" },
    { title: "Organic Chemistry", students: 950, rating: 4.7, image: "🧪" },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome to Alameda Learn</h1>
            <p className="text-muted-foreground mt-2">Continue your learning journey and explore new subjects</p>
          </div>
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/grades">
                Browse Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.number}</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest learning progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm font-medium">{activity.progress}%</div>
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all" style={{ width: `${activity.progress}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>Jump into your learning</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline" asChild>
              <Link href="/grades">
                <BookOpen className="mr-2 h-4 w-4" />
                Browse All Grades
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Video className="mr-2 h-4 w-4" />
              Watch Featured Videos
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Award className="mr-2 h-4 w-4" />
              Take Practice Test
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Join Study Group
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Featured Courses */}
      <Card>
        <CardHeader>
          <CardTitle>Featured Courses</CardTitle>
          <CardDescription>Popular courses from our curriculum</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredCourses.map((course, index) => (
              <div key={index} className="rounded-lg border p-4 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{course.image}</div>
                <h3 className="font-semibold mb-2">{course.title}</h3>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>{course.students} students</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <Button size="sm" className="w-full">
                  <Play className="mr-2 h-3 w-3" />
                  Start Learning
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Users,
  TrendingUp,
  DollarSign,
  Video,
  MessageSquare,
  Award,
  Clock,
} from "lucide-react";
import CourseFormModal from "@/components/course-form/CourseFormModal";

const InstructorDashboard: React.FC = () => {
  const stats = [
    {
      title: "My Courses",
      value: "3",
      icon: BookOpen,
      color: "text-blue-600",
    },
    {
      title: "Total Students",
      value: "100",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Monthly Revenue",
      value: "₦200K",
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      title: "Course Rating",
      value: "2.8",
      icon: Award,
      color: "text-orange-600",
    },
  ];

  const courses = [
    {
      title: "Digital Marketing Mastery",
      students: 320,
      revenue: "₦180K",
      progress: 85,
      status: "Active",
    },
    {
      title: "Web Development Fundamentals",
      students: 245,
      revenue: "₦140K",
      progress: 92,
      status: "Active",
    },
    {
      title: "Fashion Design Basics",
      students: 189,
      revenue: "₦95K",
      progress: 67,
      status: "Draft",
    },
  ];

  const recentActivity = [
    {
      type: "enrollment",
      message: "New student enrolled in Digital Marketing",
      time: "2 hours ago",
    },
    {
      type: "completion",
      message: "Student completed Web Development module",
      time: "4 hours ago",
    },
    {
      type: "review",
      message: "Received 5-star review for Fashion Design",
      time: "1 day ago",
    },
    {
      type: "message",
      message: "New message from student about assignment",
      time: "2 days ago",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  // Modal state for Create Course
  const [showCreateModal, setShowCreateModal] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground dark:text-white p-6 transition-colors duration-300">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Instructor Dashboard
          </h1>
          <p className="text-gray-600 dark:text-white">
            Manage your courses and track student progress
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              variants={cardVariants}
              whileHover={{
                y: -4,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {stat.value}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Courses */}
          <motion.div variants={cardVariants}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-blue-600" />
                    My Courses
                  </CardTitle>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="sm" onClick={() => setShowCreateModal(true)}>
                      Create New
                    </Button>
                  </motion.div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <motion.div
                      key={course.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, ease: "easeOut" }}
                      className="p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {course.title}
                        </h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            course.status === "Active"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                          }`}
                        >
                          {course.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                        <span>{course.students} students</span>
                        <span>{course.revenue} revenue</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200">
                          <span>Course Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div variants={cardVariants}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, ease: "easeOut" }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div
                        className={`p-2 rounded-full ${
                          activity.type === "enrollment"
                            ? "bg-blue-100"
                            : activity.type === "completion"
                            ? "bg-green-100"
                            : activity.type === "review"
                            ? "bg-yellow-100"
                            : "bg-purple-100"
                        }`}
                      >
                        {activity.type === "enrollment" && (
                          <Users className="h-4 w-4 text-blue-600" />
                        )}
                        {activity.type === "completion" && (
                          <Award className="h-4 w-4 text-green-600" />
                        )}
                        {activity.type === "review" && (
                          <Award className="h-4 w-4 text-yellow-600" />
                        )}
                        {activity.type === "message" && (
                          <MessageSquare className="h-4 w-4 text-purple-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900 dark:text-white">
                          {activity.message}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {activity.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="mt-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full dark:bg-gray-900 dark:text-white dark:border-gray-700 dark:hover:bg-gray-800"
                  >
                    View All Activity
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>

      {/* Create Course Modal/Drawer (Step Form Skeleton) */}
      <CourseFormModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
};

export default InstructorDashboard;

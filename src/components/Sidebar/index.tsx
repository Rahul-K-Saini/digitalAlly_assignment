import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  HelpCircle,
  BarChart2,
  Settings,
} from "lucide-react";

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen bg-white p-4 w-20 md:w-60 text-gray-600 border-r">
      <div className="mb-8">
        <h1 className="text-2xl font-bold truncate">Quyl.</h1>
      </div>
      <nav className="space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center p-3 rounded-lg hover:bg-gray-300 gap-3 transition-colors"
        >
          <LayoutDashboard className="w-5 h-5 flex-shrink-0" />
          <span className="hidden md:inline">Dashboard</span>
        </Link>
        <Link
          href="/students"
          className="flex items-center p-3 rounded-lg bg-gray-300 text-black font-bold gap-3"
        >
          <Users className="w-5 h-5 flex-shrink-0" />
          <span className="hidden md:inline">Students</span>
        </Link>
        <Link
          href="/chapter"
          className="flex items-center p-3 rounded-lg hover:bg-gray-300 gap-3 transition-colors"
        >
          <BookOpen className="w-5 h-5 flex-shrink-0" />
          <span className="hidden md:inline">Chapter</span>
        </Link>
        <Link
          href="/help"
          className="flex items-center p-3 rounded-lg hover:bg-gray-300 gap-3 transition-colors"
        >
          <HelpCircle className="w-5 h-5 flex-shrink-0" />
          <span className="hidden md:inline">Help</span>
        </Link>
        <Link
          href="/reports"
          className="flex items-center p-3 rounded-lg hover:bg-gray-300 gap-3 transition-colors"
        >
          <BarChart2 className="w-5 h-5 flex-shrink-0" />
          <span className="hidden md:inline">Reports</span>
        </Link>
        <Link
          href="/settings"
          className="flex items-center p-3 rounded-lg hover:bg-gray-300 gap-3 transition-colors"
        >
          <Settings className="w-5 h-5 flex-shrink-0" />
          <span className="hidden md:inline">Settings</span>
        </Link>
      </nav>
    </div>
  );
}
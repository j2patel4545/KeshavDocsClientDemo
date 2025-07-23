import React, { useState } from "react";
import { TbLogout } from "react-icons/tb";

import {
  FaPlusCircle,
  FaEdit,
  FaTrashAlt,
  FaCog,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaSignOutAlt,
} from "react-icons/fa";

import CreateSubject from "./components/CreateSubject.jsx";
import AddTopics from "./components/AddTopics.jsx";
import UpdateSubject from "./components/UpdateSubject.jsx";
import DeleteSubject from "./components/DeleteSubject.jsx";
import Settings from "./components/Settings.jsx";
import Profile from "./components/Profile.jsx";
import Header from "components/ui/Header.jsx";

const navItems = [
  { id: "create", label: "Create Subject & Topic", icon: <FaPlusCircle /> },
  { id: "addtopics", label: "Add Topics", icon: <FaPlusCircle /> },
  { id: "update", label: "Update Subject & Topic", icon: <FaEdit /> },
  { id: "delete", label: "Delete Subject & Topic", icon: <FaTrashAlt /> },
  { id: "settings", label: "Settings", icon: <FaCog /> },
  { id: "profile", label: "Profile", icon: <FaUserCircle /> },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("create");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "create":
        return <CreateSubject />;
      case "addtopics":
        return <AddTopics />;
      case "update":
        return <UpdateSubject />;
      case "delete":
        return <DeleteSubject />;
      case "settings":
        return <Settings darkMode={darkMode} setDarkMode={setDarkMode} />;
      case "profile":
        return <Profile />;
      default:
        return <CreateSubject />;
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex h-screen font-sans bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
        {/* Sidebar */}
        <aside
          className={`${sidebarOpen ? "w-64" : "w-16"
            } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col`}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-indigo-600 dark:text-white">
                Admin Panel
              </h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 focus:outline-none"
            >
              {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Nav Items + Logout */}
          <div className="flex flex-col flex-1 overflow-y-auto mt-4 justify-between">
            <ul>
              {navItems.map(({ id, label, icon }) => (
                <li
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center cursor-pointer px-4 py-3 mx-2 rounded-lg mb-2 transition
                    ${activeTab === id
                      ? "bg-indigo-100 dark:bg-indigo-600 text-indigo-700 dark:text-white font-semibold"
                      : "text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600"
                    }`}
                >
                  <span className="text-lg">{icon}</span>
                  {sidebarOpen && <span className="ml-3">{label}</span>}
                </li>
              ))}
            </ul>

            {/* Logout Button */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
  <button
    onClick={() => {
      if (window.confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("admin_token");
        window.location.href = "/admin-signin";
      }
    }}
  >
   <TbLogout />

  </button>
</div>

          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-colors">
          <Header />
          <div className="pt-12 px-8">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

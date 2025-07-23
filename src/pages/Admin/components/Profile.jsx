import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserShield,
  FaEdit,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f4f4f8] to-[#e0e0ec] dark:from-[#0e0e0e] dark:to-[#1a1a1a] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-5xl bg-white/30 dark:bg-[#1a1a1a]/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl rounded-3xl overflow-hidden p-10"
      >
        {/* Glowing Animated Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-2xl opacity-20 rounded-3xl z-[-1] animate-pulse" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Avatar Section */}
          <div className="relative flex justify-center">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 p-[3px] animate-spin-slow shadow-[0_0_20px_5px_rgba(255,0,255,0.2)]">
                <div className="w-full h-full bg-white dark:bg-[#121212] rounded-full flex items-center justify-center">
                  <span className="text-[72px]">👤</span>
                </div>
              </div>
              {/* Edit Icon */}
              <button className="absolute -bottom-3 -right-3 bg-gradient-to-r from-pink-600 to-purple-600 p-2 rounded-full shadow-xl hover:scale-105 transition-transform">
                <FaEdit className="text-white text-sm" />
              </button>
            </div>
          </div>

          {/* Info Section */}
          <div className="col-span-2 text-gray-800 dark:text-gray-100 space-y-3">
            <h1 className="text-4xl font-bold">Jetal Admin</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Super Administrator
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <ProfileItem icon={<FaEnvelope />} label="Email" value="jetal@example.com" color="text-pink-500" />
              <ProfileItem icon={<FaPhone />} label="Phone" value="+91-9876543210" color="text-green-500" />
              <ProfileItem icon={<FaMapMarkerAlt />} label="Location" value="Mumbai, India" color="text-blue-500" />
              <ProfileItem icon={<FaCalendarAlt />} label="Joined" value="July 2023" color="text-yellow-500" />
              <ProfileItem icon={<FaUserShield />} label="Access" value="Full Admin Rights" color="text-purple-500" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProfileItem({ icon, label, value, color }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white/50 dark:bg-[#1f1f1f]/50 rounded-xl shadow-sm backdrop-blur-md hover:shadow-lg transition">
      <span className={`text-xl ${color}`}>{icon}</span>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">{label}</p>
        <p className="text-base font-medium text-gray-800 dark:text-gray-100">{value}</p>
      </div>
    </div>
  );
}

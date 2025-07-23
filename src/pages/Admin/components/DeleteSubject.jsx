import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const API_BASE = "https://keshavdocsserverr-4.onrender.com/api/subject";

export default function DeleteSubject() {
  const [subjects, setSubjects] = useState([]);
  const [expandedSubjects, setExpandedSubjects] = useState({});

  // Fetch all subjects on mount
  const fetchSubjects = async () => {
    try {
      const res = await axios.get(`${API_BASE}s`);
      setSubjects(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to fetch subjects", err);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  // Delete Subject
  const deleteSubject = async (id) => {
    if (window.confirm("Are you sure to delete this subject?")) {
      try {
        await axios.delete(`${API_BASE}/${id}`);
        alert("Subject deleted ✅");
        fetchSubjects();
      } catch (err) {
        alert("Failed to delete subject ❌");
        console.error(err);
      }
    }
  };

  // Delete Topic
  const deleteTopic = async (subjectId, topicId) => {
    if (window.confirm("Are you sure to delete this topic?")) {
      try {
        await axios.delete(`${API_BASE}/${subjectId}/topic/${topicId}`);
        alert("Topic deleted ✅");
        fetchSubjects();
      } catch (err) {
        alert("Failed to delete topic ❌");
        console.error(err);
      }
    }
  };

  // Toggle expand/collapse
  const toggleExpand = (id) => {
    setExpandedSubjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">
        🗑️ Delete Subjects & Topics
      </h2>

      {subjects.length === 0 ? (
        <div className="text-center mt-10 italic text-gray-500 dark:text-gray-400">
          🚫 No subjects available to delete.
        </div>
      ) : (
        subjects.map((subject) => (
          <div
            key={subject._id}
            className="bg-white dark:bg-gray-800 p-5 rounded shadow mb-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleExpand(subject._id)}
                  className="text-xl"
                >
                  {expandedSubjects[subject._id] ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                  {subject.subject}
                </h3>
              </div>
              <button
                onClick={() => deleteSubject(subject._id)}
                className="text-red-600 hover:text-red-800"
                title="Delete Subject"
              >
                <FaTrashAlt size={18} />
              </button>
            </div>

            {/* Topics */}
            {expandedSubjects[subject._id] &&
              subject.topic?.length > 0 && (
                <ul className="mt-4 ml-8 text-sm list-disc dark:text-gray-300 text-gray-700">
                  {subject.topic.map((t) => (
                    <li key={t._id} className="flex justify-between items-center mb-1">
                      <div>
                        <span className="font-medium">{t.name}</span> –{" "}
                        <span className="text-gray-500">{t.description?.slice(0, 50)}...</span>
                      </div>
                      <button
                        onClick={() => deleteTopic(subject._id, t._id)}
                        className="text-red-500 hover:text-red-700"
                        title="Delete Topic"
                      >
                        <FaTrashAlt />
                      </button>
                    </li>
                  ))}
                </ul>
              )}

            {expandedSubjects[subject._id] && subject.topic?.length === 0 && (
              <p className="ml-8 mt-3 text-gray-500 italic">
                No topics in this subject.
              </p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

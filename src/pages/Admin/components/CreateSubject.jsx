import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

export default function CreateSubject() {
  const [subjectName, setSubjectName] = useState("");
  const [allSubjects, setAllSubjects] = useState([]);

  const API_URL = "https://keshavdocsserverr-4.onrender.com/api/subject";

  const fetchSubjects = async () => {
    try {
      const res = await axios.get("https://keshavdocsserverr-4.onrender.com/api/subjects");
      console.log(res.data);
      setAllSubjects(res.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
      setAllSubjects([]);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  const addSubject = async () => {
    if (!subjectName.trim()) return alert("Enter subject name");

    const newSubject = {
      subject: subjectName,
      topic: [],
    };

    try {
      const res = await axios.post(API_URL, newSubject);
      if (res.status === 200 || res.status === 201) {
        alert("Subject added ✅");
        setSubjectName("");
        fetchSubjects();
      } else {
        alert("Failed to create subject");
      }
    } catch (error) {
      console.error("Error creating subject:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300">
        🎓 Create Subject
      </h2>

      {/* Create Subject Input */}
      <div className="flex gap-2 mb-10">
        <input
          type="text"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          placeholder="Enter Subject"
          className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 flex-grow dark:bg-gray-700 dark:text-white focus:outline-none"
        />
        <button
          onClick={addSubject}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 flex items-center gap-2 transition"
        >
          <FaPlus /> Add
        </button>
      </div>

      {/* Subjects Grid */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">
          📚 All Subjects
        </h3>

        {Array.isArray(allSubjects) && allSubjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allSubjects.map((s, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  📘 {s.subject}
                </h4>

                {Array.isArray(s.topic) && s.topic.length > 0 ? (
                  <ul className="list-disc ml-6 text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    {s.topic.map((t, j) => (
                      <li key={j}>└─ {t.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic text-sm">No topics yet</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-10 text-gray-500 dark:text-gray-400 italic">
            🚫 No subjects found. Please add one!
          </div>
        )}
      </div>
    </div>
  );
}

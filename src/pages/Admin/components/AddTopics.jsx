import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

export default function AddTopics() {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [topic, setTopic] = useState({
    name: "",
    index_number: "",
    description: "",
    code: "",
  });

  const fetchSubjects = async () => {
    try {
      const res = await axios.get("https://keshavdocsserverr-4.onrender.com/api/subjects");
      setSubjects(res.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTopic({
      ...topic,
      [name]: name === "index_number" ? Number(value) : value,
    });
  };

  const addTopic = async () => {
    if (!selectedSubjectId) return alert("Please select a subject");

    const { name, index_number, description, code } = topic;

    if (!name.trim() || index_number === "" || !description.trim() || !code.trim()) {
      return alert("Please fill all fields");
    }

    try {
      const res = await axios.post(
        `https://keshavdocsserverr-4.onrender.com/api/subject/${selectedSubjectId}/topic`,
        {
          name,
          index_number: Number(index_number),
          description,
          code,
        }
      );

      if (res.status === 200 || res.status === 201) {
        alert("Topic added successfully ✅");
        setTopic({ name: "", index_number: "", description: "", code: "" });
        fetchSubjects();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error adding topic:", error);
      alert("Error adding topic");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
        ➕ Add Detailed Topic to Subject
      </h2>

      {/* Subject Dropdown */}
      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
          Choose Subject
        </label>
        <select
          value={selectedSubjectId}
          onChange={(e) => setSelectedSubjectId(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
        >
          <option value="">-- Select Subject --</option>
          {subjects.map((s) => (
            <option key={s._id} value={s._id}>
              {s.subject}
            </option>
          ))}
        </select>
      </div>

      {/* Topic Inputs */}
      <div className="grid gap-4 mb-6">
        <input
          name="name"
          value={topic.name}
          onChange={handleChange}
          type="text"
          placeholder="Topic Name"
          className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
        />
        <input
          name="index_number"
          value={topic.index_number}
          onChange={handleChange}
          type="number"
          placeholder="Index Number"
          className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
        />
        <textarea
          name="description"
          value={topic.description}
          onChange={handleChange}
          placeholder="Topic Description"
          rows={3}
          className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
        />
        <textarea
          name="code"
          value={topic.code}
          onChange={handleChange}
          placeholder="Topic Code (e.g. HTML, JS)"
          rows={5}
          className="font-mono border border-gray-300 dark:border-gray-700 px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-green-300"
        />
      </div>

      <button
        onClick={addTopic}
        className="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 px-6 py-2 rounded hover:opacity-90 transition-all flex items-center gap-2 border border-gray-700 dark:border-gray-300"
      >
        <FaPlus /> Add Topic
      </button>

      {/* Preview Topics */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-200">
          📘 Preview Topics in Subjects
        </h3>
        {subjects.map((sub) => (
          <div
            key={sub._id}
            className="mb-6 p-4 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              {sub.subject}
            </h4>
            {Array.isArray(sub.topic) && sub.topic.length > 0 ? (
              <ul className="ml-6 list-disc text-sm text-gray-600 dark:text-gray-300">
                {[...sub.topic]
                  .sort((a, b) => a.index_number - b.index_number)
                  .map((t, i) => (
                    <li key={i}>
                      {`${t.index_number}. ${t.name} - ${t.description}`}
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                No topics yet.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

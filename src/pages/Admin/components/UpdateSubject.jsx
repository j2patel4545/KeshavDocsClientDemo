import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSave } from "react-icons/fa";

export default function UpdateSubject() {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState("");
  const [subjectName, setSubjectName] = useState("");

  const [selectedTopicId, setSelectedTopicId] = useState("");
  const [topicForm, setTopicForm] = useState({
    name: "",
    description: "",
    code: "",
    index_number: "", // ✅ Added
  });

  const API = "http://localhost:7867/api/subject";

  const fetchSubjects = async () => {
    try {
      const res = await axios.get(`${API}s`);
      setSubjects(res.data);
    } catch (err) {
      alert("Failed to load subjects");
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  useEffect(() => {
    const sub = subjects.find((s) => s._id === selectedSubjectId);
    if (sub) {
      setSubjectName(sub.subject);
    } else {
      setSubjectName("");
      setSelectedTopicId("");
      setTopicForm({ name: "", description: "", code: "", index_number: "" });
    }
  }, [selectedSubjectId]);

  useEffect(() => {
    const subject = subjects.find((s) => s._id === selectedSubjectId);
    const topic = subject?.topic.find((t) => t._id === selectedTopicId);
    if (topic) {
      setTopicForm({
        name: topic.name,
        description: topic.description,
        code: topic.code,
        index_number: topic.index_number || "", // ✅ load existing index_number
      });
    } else {
      setTopicForm({ name: "", description: "", code: "", index_number: "" });
    }
  }, [selectedTopicId, selectedSubjectId]);

  const updateSubjectName = async () => {
    if (!subjectName.trim()) return alert("Enter valid name");
    try {
      await axios.put(`${API}/${selectedSubjectId}`, {
        subject: subjectName,
      });
      alert("Subject updated ✅");
      fetchSubjects();
    } catch {
      alert("Failed to update subject");
    }
  };

  const updateTopic = async () => {
    if (!selectedTopicId || !topicForm.name.trim())
      return alert("Select topic and fill details");

    try {
      await axios.put(
        `${API}/${selectedSubjectId}/topic/${selectedTopicId}`,
        {
          ...topicForm,
          index_number: Number(topicForm.index_number), // ✅ ensure number
        }
      );
      alert("Topic updated ✅");
      fetchSubjects();
    } catch (err) {
      alert("Failed to update topic");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">🛠 Update Subject & Topic</h2>

      {/* Select Subject */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Choose Subject</label>
        <select
          value={selectedSubjectId}
          onChange={(e) => setSelectedSubjectId(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select Subject --</option>
          {subjects.map((s) => (
            <option key={s._id} value={s._id}>
              {s.subject}
            </option>
          ))}
        </select>
      </div>

      {/* Subject Name Update */}
      {selectedSubjectId && (
        <div className="mb-8">
          <label className="block mb-1 font-medium">Edit Subject Name</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
              className="flex-grow border rounded px-3 py-2"
            />
            <button
              onClick={updateSubjectName}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <FaSave /> Save
            </button>
          </div>
        </div>
      )}

      {/* Select Topic */}
      {selectedSubjectId && (
        <div className="mb-4">
          <label className="block mb-1 font-medium">Choose Topic</label>
          <select
            value={selectedTopicId}
            onChange={(e) => setSelectedTopicId(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">-- Select Topic --</option>
            {subjects
              .find((s) => s._id === selectedSubjectId)
              ?.topic.map((t) => (
                <option key={t._id} value={t._id}>
                  {t.index_number}. {t.name}
                </option>
              ))}
          </select>
        </div>
      )}

      {/* Topic Form */}
      {selectedTopicId && (
        <div className="bg-white dark:bg-gray-800 p-5 rounded shadow mt-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">🔧 Edit Topic</h3>
          <input
            type="text"
            placeholder="Topic Name"
            value={topicForm.name}
            onChange={(e) =>
              setTopicForm((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Index Number"
            value={topicForm.index_number}
            onChange={(e) =>
              setTopicForm((prev) => ({ ...prev, index_number: e.target.value }))
            }
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            rows={3}
            placeholder="Description"
            value={topicForm.description}
            onChange={(e) =>
              setTopicForm((prev) => ({ ...prev, description: e.target.value }))
            }
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            rows={5}
            placeholder="Code"
            value={topicForm.code}
            onChange={(e) =>
              setTopicForm((prev) => ({ ...prev, code: e.target.value }))
            }
            className="w-full mb-4 p-2 border font-mono rounded bg-gray-50"
          />
          <button
            onClick={updateTopic}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <FaSave /> Update Topic
          </button>
        </div>
      )}
    </div>
  );
}

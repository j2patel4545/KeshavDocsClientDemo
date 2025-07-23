import React, { useState, useEffect } from "react";
import axios from "axios";
import MacbookCodeCard from "./MacbookCodeCard.jsx";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "Context/ThemeContext.jsx";

function Dashboard() {
    const [subjects, setSubjects] = useState([]);
    const [selectedSubjectIndex, setSelectedSubjectIndex] = useState(0);
    const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile only
    const { theme, toggleTheme } = useTheme();

   useEffect(() => {
    const fetchSubjects = async () => {
        try {
            const res = await axios.get("https://keshavdocsserverr-4.onrender.com/api/subjects");

            // Sort each subject's topics based on index_number
            const sortedSubjects = res.data.map((subject) => {
                const sortedTopics = [...subject.topic].sort(
                    (a, b) => a.index_number - b.index_number
                );
                return { ...subject, topic: sortedTopics };
            });

            setSubjects(sortedSubjects);
            console.log(sortedSubjects);

        } catch (err) {
            console.error("❌ Failed to fetch subjects:", err);
        }
    };
    fetchSubjects();
}, []);

    if (subjects.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen text-xl text-purple-600 dark:text-purple-400">
                ⏳ Loading Subjects...
            </div>
        );
    }

    const selectedSubject = subjects[selectedSubjectIndex];
    const topics = selectedSubject.topic || [];
    const currentTopic = topics[selectedTopicIndex] || {};

    const handlePrev = () => {
        if (selectedTopicIndex > 0) {
            setSelectedTopicIndex(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (selectedTopicIndex < topics.length - 1) {
            setSelectedTopicIndex(prev => prev + 1);
        }
    };

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (!value.trim()) return setSearchResults([]);

        const results = [];

        subjects.forEach((subj, subjIndex) => {
            if (subj.subject.toLowerCase().includes(value.toLowerCase())) {
                results.push({ type: 'subject', name: subj.subject, subjectIndex: subjIndex });
            }
            subj.topic.forEach((topic, topicIndex) => {
                if (topic.name.toLowerCase().includes(value.toLowerCase())) {
                    results.push({
                        type: 'topic',
                        name: `${subj.subject} → ${topic.name}`,
                        subjectIndex: subjIndex,
                        topicIndex: topicIndex
                    });
                }
            });
        });

        setSearchResults(results);
    };

    const handleSearchSelect = (result) => {
        setSelectedSubjectIndex(result.subjectIndex);
        setSelectedTopicIndex(result.topicIndex || 0);
        setSearchQuery('');
        setSearchResults([]);
        setIsMenuOpen(false); // close sidebar if mobile
    };

    return (
        <div className="flex w-screen min-h-screen dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden text-gray-800 dark:text-gray-100">

            {/* Sidebar */}
            <aside className={`
                w-64 bg-white dark:bg-zinc-900 shadow-md flex flex-col fixed h-screen z-40
                transition-transform duration-300
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0
            `}>
                <div className="p-4 bg-white/80 dark:bg-zinc-800/70 backdrop-blur sticky top-0 z-10 border-b dark:border-zinc-700">
                    <Link to="/" className="flex items-center  space-x-3 group">
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                                <span className="text-white font-bold text-lg font-mono">K</span>
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-bold group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors duration-300">
                                KeshavDovs
                            </span>
                            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium tracking-wide">
                                Developer Academy
                            </div>
                        </div>
                    </Link>
                </div>

           <div className="flex-1 overflow-y-auto p-4 space-y-4">
  {subjects.map((subj, subjIndex) => (
    <div key={subj._id}>
      <button
        onClick={() => {
          setSelectedSubjectIndex(subjIndex);
          setSelectedTopicIndex(0);
        }}
        className={`w-full text-left px-4 py-2 font-semibold rounded-md transition 
          bg-gradient-to-br from-secondary-100 to-accent-50
          hover:dark:bg-zinc-700 
          dark:bg-zinc-700 dark:bg-none dark:text-white
          ${selectedSubjectIndex === subjIndex ? 'bg-gradient-to-br from-secondary-200 to-accent-100 dark:bg-zinc-700' : ''}
        `}
      >
        {subj.subject}
      </button>

      {selectedSubjectIndex === subjIndex && (
        <div className="pl-4 mt-2 space-y-1">
          {subj.topic.map((topic, index) => (
            <button
              key={index}
              onClick={() => setSelectedTopicIndex(index)}
              className={`block w-full text-left px-3 py-1 text-sm rounded-md 
                bg-gradient-to-br from-secondary-100 to-accent-50 
                hover:dark:bg-zinc-700 
                dark:bg-zinc-800 dark:bg-none dark:text-white
                ${selectedTopicIndex === index ? 'bg-gradient-to-br from-secondary-200 to-accent-100 dark:bg-zinc-800' : ''}
              `}
            >
              {index + 1}. {topic.name}
            </button>
          ))}
        </div>
      )}
    </div>
  ))}
</div>

            </aside>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <main className="sm:ml-64 flex-1 left-0 min-w-0 overflow-y-auto p-6 sm:p-10   bg-gray-100 dark:bg-zinc-900">
                <header className="border-b dark:border-zinc-700 items-center sm:px-9 px-5 mt-0 z-30 sm:ml-0 -ml-6 top-0 h-20 flex fixed backdrop-blur-2xl sm:w-[75%] w-full shadow-sm justify-between bg-white dark:bg-zinc-800/70">
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 dark:text-white focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <Link to="/" className="sm:flex hidden h-full w-16">
                        <FaHome className="h-18 w-8 text-blue-500" />
                    </Link>

                    {/* Search bar */}
                    <div className="relative w-1/2">
                        <input
                            type="text"
                            placeholder="Search subject or topic..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        {searchResults.length > 0 && (
                            <div className="absolute w-full bg-white dark:bg-zinc-800 shadow-lg rounded-md mt-1 z-50 max-h-60 overflow-y-auto">
                                {searchResults.map((result, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleSearchSelect(result)}
                                        className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-zinc-700 cursor-pointer text-sm"
                                    >
                                        {result.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Theme toggle */}
                    <div>
                        <label class="inline-flex items-center relative">
                            <input
                                className="peer hidden"
                                id="toggle"
                                type="checkbox"
                                onChange={toggleTheme}
                                checked={theme === 'dark'}
                            />              <div
                                class="relative w-[70px] h-[33px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[30px] after:h-[30px] after:bg-gradient-to-r from-blue-500 to-blue-200 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[1.7px] after:left-[3.5px] active:after:w-[10px] peer-checked:after:left-[67px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
                            ></div>
                            <svg
                                height="0"
                                width="70"
                                viewBox="0 0 24 24"
                                data-name="Layer 1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                class="fill-white peer-checked:opacity-60 absolute w-4 h-4 left-[11px]"
                            >
                                <path
                                    d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                                ></path>
                            </svg>
                            <svg
                                height="430"
                                width="430"
                                viewBox="0 0 24 24"
                                data-name="Layer 1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                class="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-4 h-4 right-[9px]"
                            >
                                <path
                                    d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                                ></path>
                            </svg>
                        </label>
                    </div>
                </header>

                <div className="max-w-5xl pt-24 mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        {selectedSubject.subjectf}  {currentTopic.name}
                    </h1>
                    <p className="text-gray-600 dark:text-zinc-300 mb-6">
                        {currentTopic.description}
                    </p>

                    <MacbookCodeCard
                        title={currentTopic.name}
                        description={currentTopic.description}
                        code={currentTopic.code}
                    />

                    <div className="flex justify-between mt-6">
                        <button
                            onClick={handlePrev}
                            disabled={selectedTopicIndex === 0}
                            className={`px-4 py-2 rounded-md text-white ${
                                selectedTopicIndex === 0
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-gradient-to-br from-secondary-500 to-accent-500"
                            }`}
                        >
                            ⬅️ Prev
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={selectedTopicIndex === topics.length - 1}
                            className={`px-4 py-2 rounded-md text-white ${
                                selectedTopicIndex === topics.length - 1
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-gradient-to-br from-secondary-500 to-accent-500"
                            }`}
                        >
                            Next ➡️
                        </button>
                    </div>
                </div>
            </main>
           
        </div>
    );
}

export default Dashboard;

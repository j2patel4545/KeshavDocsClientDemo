import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Copy } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

function MacbookCodeCard({ title, description, code }) {
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code.toString()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <>
      {isMinimized && (
        <motion.div
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 bg-zinc-700 text-white px-4 py-2 rounded-full shadow cursor-pointer hover:bg-zinc-600"
          initial={{ opacity: 0, y: 50, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          onClick={() => setIsMinimized(false)}
        >
          🗑️ Click to Restore
        </motion.div>
      )}

      {isClosed && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsClosed(false)}
            className="px-4 py-1 text-sm bg-red-600 text-white rounded-full shadow hover:bg-red-700"
          >
            🔁 Restore Window
          </button>
        </div>
      )}

      <AnimatePresence>
        {!isClosed && !isMinimized && (
          <div
            key="macbook-card"
            layout
            initial={{ opacity: 0, y: -100, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              width: isFullscreen ? '100%' : 'auto',
              height: isFullscreen ? '90vh' : 'auto',
            }}
            exit={{
              opacity: 0,
              scale: 0.3,
              y: 400,
              x: '-50%',
              left: '50%',
              position: 'fixed',
              bottom: 80,
              transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className={`relative rounded-xl overflow-hidden shadow-2xl bg-[#1e1e1e] text-white ${
              isFullscreen ? 'fixed top-4 left-4 right-4 bottom-4 z-50' : ''
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] text-white">
              <div className="flex gap-2">
                <div
                  className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
                  onClick={() => setIsClosed(true)}
                />
                <div
                  className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"
                  onClick={() => setIsMinimized(true)}
                />
                <div
                  className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                />
              </div>
              <div className="text-xs text-gray-300">{title}</div>
              <button onClick={handleCopy} title="Copy code to clipboard">
                {copied ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-white" />
                )}
              </button>
            </div>

            {/* Content */}
            <div className={`p-4 space-y-4 overflow-y-auto ${isFullscreen ? 'max-h-[80vh]' : ''}`}>
              {/* <h2 className="text-xl font-semibold text-zinc-100">{title}</h2> */}
              {/* <p className="text-zinc-300">{description}</p> */}

              <div className="rounded-md overflow-hidden">
                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
                  wrapLines
                  wrapLongLines
                  customStyle={{
                    background: '#1e1e1e',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                  }}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MacbookCodeCard;

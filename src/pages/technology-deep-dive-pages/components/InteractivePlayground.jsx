import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractivePlayground = ({ selectedTech }) => {
  const [activeTab, setActiveTab] = useState('code');
  const [code, setCode] = useState(selectedTech?.defaultCode || '');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const tabs = [
    { id: 'code', label: 'Code Editor', icon: 'Code' },
    { id: 'preview', label: 'Live Preview', icon: 'Eye' },
    { id: 'console', label: 'Console', icon: 'Terminal' }
  ];

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutput(`// Output for ${selectedTech?.name || 'JavaScript'}\n// Code executed successfully!\nconsole.log('Hello from ${selectedTech?.name || 'JavaScript'}!');`);
      setIsRunning(false);
    }, 1500);
  };

  const resetCode = () => {
    setCode(selectedTech?.defaultCode || '');
    setOutput('');
  };

  return (
    <div className="bg-primary-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-primary-800 px-6 py-4 border-b border-primary-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-error-500 rounded-full"></div>
              <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
              <div className="w-3 h-3 bg-success-500 rounded-full"></div>
            </div>
            <h3 className="text-white font-semibold">
              {selectedTech?.name || 'Interactive'} Playground
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              iconName="RotateCcw"
              onClick={resetCode}
              className="text-primary-300 hover:text-white hover:bg-primary-700"
            >
              Reset
            </Button>
            <Button
              variant="success"
              size="sm"
              iconName="Play"
              loading={isRunning}
              onClick={runCode}
              className="bg-success-600 hover:bg-success-700"
            >
              Run Code
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary-700 text-white' :'text-primary-300 hover:text-white hover:bg-primary-700'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="h-96">
        {activeTab === 'code' && (
          <div className="h-full">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full bg-primary-900 text-accent-100 p-6 font-mono text-sm resize-none border-none outline-none"
              placeholder={`// Start coding in ${selectedTech?.name || 'JavaScript'}...\n// Try modifying the code below and click 'Run Code' to see the output`}
              spellCheck={false}
            />
          </div>
        )}

        {activeTab === 'preview' && (
          <div className="h-full bg-background p-6 flex items-center justify-center">
            <div className="text-center">
              <Icon name="Monitor" size={48} className="text-primary-300 mb-4 mx-auto" />
              <h4 className="text-lg font-semibold text-text-primary mb-2">Live Preview</h4>
              <p className="text-text-secondary">
                Your {selectedTech?.name || 'code'} output will appear here
              </p>
            </div>
          </div>
        )}

        {activeTab === 'console' && (
          <div className="h-full bg-primary-900 p-6">
            <div className="font-mono text-sm">
              {output ? (
                <pre className="text-accent-100 whitespace-pre-wrap">{output}</pre>
              ) : (
                <div className="text-primary-400">
                  <p>// Console output will appear here</p>
                  <p>// Click 'Run Code' to execute your program</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractivePlayground;
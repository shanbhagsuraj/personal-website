import React from "react";
import { useState } from "react";
import { Sun, Moon, Linkedin, Twitter, Github } from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-neutral-100 text-blue-900'}`}>
      <button
        className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      
      <h1 className="text-4xl font-bold">Suraj Shanbhag</h1>
      <p className="text-lg mt-4 text-center max-w-2xl">
        Welcome to my personal space on the internet. Connect with me through my social media and explore more about me.
      </p>
      <div className="mt-6 flex space-x-4">
        <a href="https://www.linkedin.com/in/surajshanbhag" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center space-x-1">
  <Linkedin size={20} /> <span>LinkedIn</span>
</a>
<a href="https://twitter.com/surajshanbhag88" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center space-x-1">
  <Twitter size={20} /> <span>Twitter</span>
</a>
<a href="https://github.com/shanbhagsuraj" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center space-x-1">
  <Github size={20} /> <span>GitHub</span>
</a>
      </div>
    </div>
  );
}
'use client';
import { useState } from 'react';

export default function SearchPage() {
  // State for tracking which platform is selected
  const [platform, setPlatform] = useState('instagram');
  // State for storing search input
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching ${platform} for: ${searchQuery}`);
    // Add your search logic here
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {/* Platform Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            platform === 'instagram' 
              ? 'bg-pink-500 text-white' 
              : 'bg-gray-200'
          }`}
          onClick={() => setPlatform('instagram')}
        >
          Instagram
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            platform === 'tiktok' 
              ? 'bg-black text-white' 
              : 'bg-gray-200'
          }`}
          onClick={() => setPlatform('tiktok')}
        >
          TikTok
        </button>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={`Search ${platform}...`}
          className="w-full p-2 border rounded-lg"
        />
        <button 
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search {platform}
        </button>
      </form>
    </div>
  );
}
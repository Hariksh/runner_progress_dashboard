import React, { useState } from 'react';
import Header from './components/Header.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import ProgressCard from './components/ProgressCard.jsx';
import ActivityCard from './components/ActivityCard.jsx';
import LeaderboardCard from './components/LeaderboardCard.jsx';
import MotivationCard from './components/MotivationCard.jsx';
import DataEditor from './components/DataEditor.jsx';
import { Settings } from 'lucide-react';

const initialMockData = {
  "runner": "Rahul Sharma",
  "challenge": "IRL Season 1",
  "tier": "RoadWarrior",
  "target_distance": 100,
  "completed_distance": 62,
  "weekly_runs": [5,8,0,6,7],
  "rank": 18
};

function App() {
  const [data, setData] = useState(initialMockData);
  const [isEditing, setIsEditing] = useState(false);
  const [progress, setProgress] = useState(data.completed_distance);

  const handleSaveData = (newData) => {
    setData(newData);
    setProgress(newData.completed_distance);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <Header runner={data.runner} tier={data.tier} />
      
      <main className="desktop-dashboard">
        <section className="main-content">
          <ProgressCard target={data.target_distance} completed={data.completed_distance} />
          <ActivityCard weeklyRuns={data.weekly_runs} />
        </section>

        <aside className="sidebar">
          <ProfileCard runner={data.runner} challenge={data.challenge} tier={data.tier} rank={data.rank} />
          <LeaderboardCard runnerRank={data.rank} />
          <MotivationCard progress={progress} />
        </aside>
      </main>

      <button 
        onClick={() => setIsEditing(true)}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '56px',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 10px 15px -3px rgba(34, 197, 94, 0.4)',
          transition: 'transform 0.2s',
          zIndex: 90
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        title="Customize Dashboard Data"
      >
        <Settings size={24} />
      </button>

      {isEditing && (
        <DataEditor 
          data={data} 
          onSave={handleSaveData} 
          onClose={() => setIsEditing(false)} 
        />
      )}
    </div>
  );
}

export default App;

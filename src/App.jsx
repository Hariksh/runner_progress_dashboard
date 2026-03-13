import React, { useState } from 'react';
import Header from './components/Header.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import ProgressCard from './components/ProgressCard.jsx';
import ActivityCard from './components/ActivityCard.jsx';
import LeaderboardCard from './components/LeaderboardCard.jsx';
import MotivationCard from './components/MotivationCard.jsx';

function App() {
  const [progress, setProgress] = useState(62);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <main className="desktop-dashboard">
        {/* Main Content Column */}
        <section className="main-content">
          <ProgressCard />
          <ActivityCard />
        </section>

        {/* Sidebar Column */}
        <aside className="sidebar">
          <ProfileCard />
          <LeaderboardCard />
          <MotivationCard progress={progress} />
        </aside>
      </main>
    </div>
  );
}

export default App;

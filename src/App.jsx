import React from 'react';
import Header from './components/Header.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import ProgressCard from './components/ProgressCard.jsx';
import ActivityCard from './components/ActivityCard.jsx';
import LeaderboardCard from './components/LeaderboardCard.jsx';
import MotivationCard from './components/MotivationCard.jsx';
import BottomNav from './components/BottomNav.jsx';

function App() {
  return (
    <div className="dashboard-container">
      <Header />
      <ProfileCard />
      <ProgressCard />
      <ActivityCard />
      <LeaderboardCard />
      <MotivationCard />
      <BottomNav />
    </div>
  );
}

export default App;

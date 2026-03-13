import React from 'react';
import { LayoutDashboard, Activity, User } from 'lucide-react';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <div className="nav-item active">
        <LayoutDashboard size={24} />
        <span>Dashboard</span>
      </div>
      <div className="nav-item">
        <Activity size={24} />
        <span>Activity</span>
      </div>
      <div className="nav-item">
        <User size={24} />
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default BottomNav;

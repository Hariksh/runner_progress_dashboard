import React from 'react';
import { Bell } from 'lucide-react';
import runnerAvatar from '../assets/runner_avatar.png';

const Header = () => {
  return (
    <header className="top-header">
      <div className="header-title">
        <span role="img" aria-label="runner">🏃</span> Runner Progress Dashboard
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <Bell size={20} className="text-muted" style={{ cursor: 'pointer' }} />
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #E5E7EB' }}>
          <img src={runnerAvatar} alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </header>
  );
};

export default Header;

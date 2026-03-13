import React from 'react';
import runnerAvatar from '../assets/runner_avatar.png';

const ProfileCard = () => {
  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
        <div className="avatar-container">
          <img 
            src={runnerAvatar} 
            alt="Rahul Sharma" 
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '3px solid #F1F5F9' }} 
          />
          <div className="status-indicator"></div>
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Rahul Sharma</h3>
          <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '12px' }}>IRL Season 1</p>
          <span className="badge">RoadWarrior</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

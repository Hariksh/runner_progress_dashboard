import React from 'react';
import runnerAvatar from '../assets/runner_avatar.png';

const ProfileCard = () => {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div className="avatar">
          <img 
            src={runnerAvatar} 
            alt="Rahul Sharma" 
            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
          />
          <div className="status-indicator"></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h3 style={{ fontSize: '1.25rem' }}>Rahul Sharma</h3>
          <p className="text-muted" style={{ fontSize: '0.875rem' }}>IRL Season 1</p>
          <div className="badge" style={{ marginTop: '4px' }}>RoadWarrior</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

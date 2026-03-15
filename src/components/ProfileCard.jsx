import React from 'react';
import runnerAvatar from '../assets/runner_avatar.png';

const ProfileCard = ({ runner = "Runner", challenge = "Challenge", tier = "Tier", rank = 0 }) => {
  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{ position: 'relative', marginBottom: '24px' }}>
          <div className="avatar-profile">
            <img src={runnerAvatar} alt="Rahul Sharma" />
          </div>
          <div className="status-dot"></div>
        </div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', letterSpacing: '-0.01em' }}>{runner}</h3>
          <p className="text-muted" style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '20px' }}>{challenge} Athlete</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <span className="badge">{tier}</span>
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', gap: '16px', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-color)' }}>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rank</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 800 }}>#{rank}</p>
          </div>
          <div style={{ borderLeft: '1px solid var(--border-color)' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tier</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 800 }}>Pro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

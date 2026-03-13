import React from 'react';
import { Trophy } from 'lucide-react';

const LeaderboardCard = () => {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Trophy size={20} className="text-green" />
          <h3 style={{ fontSize: '1rem' }}>Leaderboard Snapshot</h3>
        </div>
        <a href="#" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--primary)', textDecoration: 'none' }}>View All</a>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{ fontSize: '2rem', fontWeight: 800 }} className="text-green">#18</span>
        <span className="text-muted" style={{ fontSize: '0.875rem', fontWeight: 600 }}>Your Rank</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', backgroundColor: '#F8FAFC', borderRadius: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
          <span className="text-muted">Top Runner</span>
          <span style={{ fontWeight: 700 }}>124 KM</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
          <span className="text-muted">Next Rank in</span>
          <span style={{ fontWeight: 700 }}>3 KM</span>
        </div>
      </div>

      <p style={{ fontSize: '0.875rem', fontWeight: 500, textAlign: 'center' }}>
        "Run <span className="text-green" style={{ fontWeight: 700 }}>3 KM</span> more to reach Rank #17"
      </p>
    </div>
  );
};

export default LeaderboardCard;

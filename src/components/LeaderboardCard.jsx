import React from 'react';
import { Trophy, ArrowUpRight } from 'lucide-react';

const LeaderboardCard = () => {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <Trophy size={20} className="text-green" />
        <h3 style={{ fontSize: '1rem', margin: 0 }}>Leaderboard Snapshot</h3>
      </div>
      
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <p className="text-muted" style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>YOUR RANK</p>
        <p className="text-green" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>#18</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', backgroundColor: '#F9FAFB', borderRadius: '12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
          <span className="text-muted">Top Distance</span>
          <span style={{ fontWeight: 700 }}>124 KM</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
          <span className="text-muted">Next Rank</span>
          <span style={{ fontWeight: 700 }}>+3 KM</span>
        </div>
      </div>

      <p style={{ fontSize: '0.875rem', fontWeight: 500, textAlign: 'center', marginBottom: '16px', color: '#374151' }}>
        Run <span className="text-green" style={{ fontWeight: 700 }}>3 KM</span> more to reach Rank #17
      </p>

      <a href="#" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '4px', 
        fontSize: '0.875rem', 
        fontWeight: 600, 
        color: 'var(--primary)', 
        textDecoration: 'none',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #DCFCE7',
        transition: 'background 0.2s'
      }}>
        View Leaderboard <ArrowUpRight size={16} />
      </a>
    </div>
  );
};

export default LeaderboardCard;

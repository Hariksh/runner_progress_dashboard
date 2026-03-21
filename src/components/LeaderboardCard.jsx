import React from 'react';
import { Trophy, ChevronRight, Crown } from 'lucide-react';

const LeaderboardCard = ({ runnerRank = 0 }) => {
  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
        <div style={{ padding: '8px', borderRadius: '8px', background: '#FEF9C3' }}>
          <Trophy size={18} style={{ color: '#A16207' }} />
        </div>
        <h3 style={{ margin: 0, fontSize: '1rem' }}>Standings</h3>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
        <p className="text-muted" style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Current Position</p>
        <div style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.05em', color: 'var(--text-main)', display: 'flex', alignItems: 'baseline' }}>
          <span className="text-green">#</span>{runnerRank}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid var(--border-color)' }}>
          <Crown size={16} className="text-muted" />
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600 }} className="text-muted">Top Distance</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>124.0 KM</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid var(--border-color)' }}>
          <TrendingUpIcon size={16} className="text-green" />
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600 }} className="text-muted">Next Rank</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>3.0 KM to go</p>
          </div>
        </div>
      </div>

      <button style={{ 
        width: '100%',
        padding: '12px',
        borderRadius: '10px',
        background: 'transparent',
        border: '1px solid var(--border-color)',
        color: 'var(--text-main)',
        fontSize: '0.85rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s'
      }}>
        View Full Standings <ChevronRight size={16} />
      </button>
    </div>
  );
};

const TrendingUpIcon = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

export default LeaderboardCard;

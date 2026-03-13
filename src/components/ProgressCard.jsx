import React from 'react';

const ProgressCard = () => {
  const percentage = 62;
  const target = 100;
  const completed = 62;
  const remaining = 38;

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="card">
      <div className="progress-container">
        <div className="progress-circle">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="transparent"
              stroke="#E2E8F0"
              strokeWidth="10"
            />
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="transparent"
              stroke="var(--primary)"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
            />
            <text
              x="60"
              y="60"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontWeight: 800, fontSize: '1.5rem', fill: 'var(--text-main)', fontFamily: 'Poppins' }}
            >
              {percentage}%
            </text>
          </svg>
        </div>

        <div style={{ width: '100%' }}>
          <div className="progress-bar-horizontal">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '0.75rem', fontWeight: 600 }} className="text-muted">
            <span>0 KM</span>
            <span>Target: {target} KM</span>
          </div>
        </div>

        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
          <div>
            <p className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Completed</p>
            <p className="text-green" style={{ fontSize: '1.5rem', fontWeight: 800 }}>{completed} KM</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Remaining</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 800 }}>{remaining} KM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;

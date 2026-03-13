import React, { useState, useEffect } from 'react';

const ProgressCard = () => {
  const target = 100;
  const completed = 62;
  const remaining = 38;
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Smooth animation from 0 to 62
    const timer = setTimeout(() => {
      setPercentage(62);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="card">
      <h3 style={{ fontSize: '1.25rem' }}>Progress Overview</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', padding: '20px 0' }}>
        {/* Animated Circular Progress */}
        <div className="progress-circle" style={{ width: '180px', height: '180px' }}>
          <svg width="180" height="180" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r={radius} fill="transparent" stroke="#F1F5F9" strokeWidth="8" />
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="transparent"
              stroke="var(--primary)"
              strokeWidth="8"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="animate-fill"
              transform="rotate(-90 60 60)"
              style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
            />
            <text x="60" y="60" textAnchor="middle" dominantBaseline="middle" style={{ fontWeight: 800, fontSize: '1.5rem', fill: 'var(--text-main)', fontFamily: 'Poppins' }}>
              {Math.round(percentage)}%
            </text>
          </svg>
        </div>

        {/* Animated Horizontal Progress with Tooltip */}
        <div style={{ width: '100%', position: 'relative' }} className="tooltip-trigger">
          <div className="tooltip">Completed: {completed} KM | Remaining: {remaining} KM</div>
          <div style={{ height: '12px', background: '#F1F5F9', borderRadius: '99px', overflow: 'hidden' }}>
            <div 
              className="animate-line" 
              style={{ 
                height: '100%', 
                background: 'var(--primary)', 
                width: `${percentage}%`,
                transition: 'width 1s ease-out'
              }} 
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.875rem', fontWeight: 600 }} className="text-muted">
            <span>0 KM</span>
            <span>Target {target} KM</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '100%', gap: '24px', paddingTop: '24px', borderTop: '1px solid #F1F5F9' }}>
          <div>
            <p className="text-muted" style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '4px' }}>COMPLETED</p>
            <p className="text-green" style={{ fontSize: '1.75rem', fontWeight: 800 }}>{completed} KM</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="text-muted" style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '4px' }}>REMAINING</p>
            <p style={{ fontSize: '1.75rem', fontWeight: 800 }}>{remaining} KM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;

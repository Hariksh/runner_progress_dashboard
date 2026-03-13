import React, { useState, useEffect } from 'react';
import { Target, CheckCircle2, Clock } from 'lucide-react';

const ProgressCard = () => {
  const target = 100;
  const completed = 62;
  const remaining = 38;
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercentage(62);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h3 style={{ margin: 0 }}>Progress Analysis</h3>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>
          Updated 2 mins ago
        </span>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr', gap: '48px', alignItems: 'center' }}>
        {/* Animated Circular Progress */}
        <div style={{ position: 'relative', width: '200px', height: '200px' }}>
          <svg width="200" height="200" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'var(--primary)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#4ADE80', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r={radius} fill="transparent" stroke="#F1F5F9" strokeWidth="6" />
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="transparent"
              stroke="url(#progressGradient)"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
              style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
            />
          </svg>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <p style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.025em' }}>
              {Math.round(percentage)}<span style={{ fontSize: '1.25rem', verticalAlign: 'top', fontWeight: 600 }}>%</span>
            </p>
            <p className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginTop: '4px' }}>Complete</p>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }}></div>
              <p style={{ fontSize: '0.85rem', fontWeight: 600 }} className="text-muted">CURRENT JOURNEY</p>
            </div>
            <div style={{ position: 'relative' }} className="tooltip-trigger">
              <div className="tooltip">Analysis: {completed}km of {target}km goal finished</div>
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${percentage}%`,
                    transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
                  }} 
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.8rem', fontWeight: 600 }} className="text-muted">
                <span>0 KM</span>
                <span className="text-main">TARGET {target} KM</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--primary-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <CheckCircle2 size={16} className="text-green" />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary-dark)', textTransform: 'uppercase' }}>Finished</span>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-dark)' }}>{completed}km</p>
            </div>
            <div style={{ padding: '16px', borderRadius: '12px', background: '#F8FAFC', border: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Clock size={16} className="text-muted" />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>To Go</span>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: 800 }}>{remaining}km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;

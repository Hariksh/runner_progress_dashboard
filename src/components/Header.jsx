import React from 'react';
import { Bell, Activity, User } from 'lucide-react';

const Header = ({ runner = "Rahul Sharma", tier = "Pro Athlete" }) => {
  return (
    <header className="top-header">
      <div className="header-brand">
        <Activity size={24} className="text-green" />
        <span>Performance Dashboard</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={20} className="text-muted" />
          <span style={{ position: 'absolute', top: '-4px', right: '-4px', width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', border: '2px solid white' }}></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '24px', borderLeft: '1px solid var(--border-color)' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 700, lineHeight: 1 }}>{runner}</p>
            <p style={{ fontSize: '0.75rem', fontWeight: 500 }} className="text-muted">{tier}</p>
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={20} className="text-muted" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

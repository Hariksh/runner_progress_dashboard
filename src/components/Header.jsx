import React from 'react';
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', padding: '10px 0' }}>
      <h2 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span role="img" aria-label="runner"></span> Runner Progress Dashboard
      </h2>
      <div style={{ position: 'absolute', right: 0 }}>
        <Bell size={24} className="text-muted" />
      </div>
    </header>
  );
};

export default Header;

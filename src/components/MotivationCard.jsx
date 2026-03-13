import React from 'react';

const MotivationCard = ({ progress = 62 }) => {
  let message = "🔥 You’re over halfway there! Keep pushing toward the finish line. Every step counts.";
  
  if (progress < 30) {
    message = "Great start! Keep going! Every step counts toward your goal. 🏃";
  } else if (progress > 90) {
    message = "Almost finished! Push to the finish line! You're so close to victory. 🏁";
  }

  return (
    <div className="card" style={{ backgroundColor: '#DCFCE7', border: 'none', textAlign: 'center' }}>
      <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#166534', lineHeight: 1.6 }}>
        {message}
      </p>
    </div>
  );
};

export default MotivationCard;

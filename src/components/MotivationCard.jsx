import React from 'react';
import { Sparkles } from 'lucide-react';

const MotivationCard = ({ progress = 62 }) => {
  let message = "You're consistently outperforming expectations. Maintain this momentum to reach the finish line as a top contender.";
  
  if (progress < 30) {
    message = "Outstanding start to the challenge. Every kilometer tracked is a step closer to your season goals.";
  } else if (progress > 90) {
    message = "Peak performance achieved. You are in the final sprint of the challenge. Finish strong and claim your rank.";
  }

  return (
    <div className="card" style={{ 
      background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)', 
      border: 'none', 
      color: 'white',
      padding: '24px'
    }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <div style={{ padding: '8px', borderRadius: '8px', background: 'rgba(255,255,255,0.2)' }}>
          <Sparkles size={20} color="white" />
        </div>
        <div>
          <p style={{ fontSize: '0.9rem', fontWeight: 600, lineHeight: 1.5, color: 'rgba(255,255,255,0.95)' }}>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotivationCard;

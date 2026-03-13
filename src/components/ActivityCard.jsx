import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const data = [
  { day: 'Mon', distance: 5 },
  { day: 'Tue', distance: 8 },
  { day: 'Wed', distance: 0, label: 'Rest' },
  { day: 'Thu', distance: 6 },
  { day: 'Fri', distance: 7 },
];

const ActivityCard = () => {
  return (
    <div className="card">
      <h3 style={{ fontSize: '1.25rem' }}>Weekly Activity</h3>
      <div style={{ height: 300, width: '100%', marginTop: '20px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6B7280', fontSize: 13, fontWeight: 500 }}
              dy={15}
            />
            <Tooltip 
              cursor={{ fill: '#F3F4F6', radius: 4 }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div style={{ background: '#111827', color: 'white', padding: '8px 12px', borderRadius: '8px', fontSize: '13px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                      <span style={{ fontWeight: 700 }}>{payload[0].value === 0 ? 'Rest Day' : `${payload[0].value} KM`}</span>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="distance" radius={[6, 6, 0, 0]} barSize={40}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.distance > 0 ? 'var(--primary)' : '#E5E7EB'} 
                  style={{ transition: 'fill 0.3s ease', cursor: 'pointer' }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #F1F5F9', textAlign: 'center' }}>
        <p style={{ fontSize: '0.875rem' }} className="text-muted">
          Average: <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>6.5 km/day</span> (excluding rest day)
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;

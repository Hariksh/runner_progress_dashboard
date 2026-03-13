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
      <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>Weekly Activity</h3>
      <div style={{ height: 200, width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748B', fontSize: 12, fontWeight: 600 }}
              dy={10}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div style={{ background: '#1E293B', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                      {payload[0].value === 0 ? 'Rest' : `${payload[0].value} KM`}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="distance" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.distance > 0 ? 'var(--primary)' : '#E2E8F0'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '8px' }} className="text-muted">
        Average: <b>6.5 km/day</b> (excluding rest day)
      </p>
    </div>
  );
};

export default ActivityCard;

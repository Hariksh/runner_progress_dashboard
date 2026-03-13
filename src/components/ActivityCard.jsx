import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { day: 'Mon', distance: 5 },
  { day: 'Tue', distance: 8 },
  { day: 'Wed', distance: 0 },
  { day: 'Thu', distance: 6 },
  { day: 'Fri', distance: 7 },
];

const ActivityCard = () => {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ padding: '8px', borderRadius: '8px', background: 'var(--primary-light)' }}>
            <TrendingUp size={20} className="text-green" />
          </div>
          <h3 style={{ margin: 0 }}>Activity Metrics</h3>
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          {[1, 2, 3].map(i => <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E2E8F0' }}></div>)}
        </div>
      </div>

      <div style={{ height: 320, width: '100%' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity={1}/>
                <stop offset="100%" stopColor="var(--primary)" stopOpacity={0.6}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--text-muted)', fontSize: 12, fontWeight: 600 }}
              dy={15}
            />
            <Tooltip 
              cursor={{ fill: '#F8FAFC', radius: 4 }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div style={{ background: '#1E293B', color: 'white', padding: '12px 16px', borderRadius: '12px', fontSize: '0.8rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', marginBottom: '4px' }}>Daily Distance</p>
                      <p style={{ fontWeight: 800, fontSize: '1.2rem' }}>{payload[0].value === 0 ? 'Rest' : `${payload[0].value} KM`}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="distance" radius={[4, 4, 4, 4]} barSize={44}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.distance > 0 ? 'url(#barGradient)' : '#F1F5F9'} 
                  style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
          Average Performance: <span style={{ color: 'var(--text-main)', fontWeight: 700 }}>6.5 km/day</span>
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;

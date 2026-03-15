import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

const DataEditor = ({ data, onSave, onClose }) => {
  const [formData, setFormData] = useState({ ...data });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  const handleRunChange = (index, value) => {
    const newRuns = [...formData.weekly_runs];
    newRuns[index] = Number(value);
    setFormData(prev => ({
      ...prev,
      weekly_runs: newRuns
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '24px'
    }}>
      <div className="card" style={{ width: '100%', maxWidth: '600px', maxHeight: '90vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>Customize Dashboard Data</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
            <X size={24} />
          </button>
        </div>

        <div style={{ display: 'grid', gap: '20px' }}>
          {/* Personal Info */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Runner Name</label>
              <input type="text" name="runner" value={formData.runner} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Challenge</label>
              <input type="text" name="challenge" value={formData.challenge} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Tier</label>
              <input type="text" name="tier" value={formData.tier} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Rank</label>
              <input type="number" name="rank" value={formData.rank} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* Progress */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Target Distance (KM)</label>
              <input type="number" name="target_distance" value={formData.target_distance} onChange={handleChange} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Completed Distance (KM)</label>
              <input type="number" name="completed_distance" value={formData.completed_distance} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          {/* Weekly Runs */}
          <div>
            <label style={labelStyle}>Weekly Runs (Mon - Fri)</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, idx) => (
                <div key={day} style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px', textAlign: 'center' }}>{day}</p>
                  <input 
                    type="number" 
                    value={formData.weekly_runs[idx]} 
                    onChange={(e) => handleRunChange(idx, e.target.value)}
                    style={{...inputStyle, textAlign: 'center', padding: '10px 4px'}} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '32px' }}>
          <button onClick={onClose} style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'white', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 600 }}>
            Cancel
          </button>
          <button onClick={handleSave} style={{ padding: '10px 24px', borderRadius: '8px', border: 'none', background: 'var(--primary)', color: 'white', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Save size={18} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--text-main)',
  marginBottom: '6px'
};

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  border: '1px solid var(--border-color)',
  fontSize: '0.95rem',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s'
};

export default DataEditor;

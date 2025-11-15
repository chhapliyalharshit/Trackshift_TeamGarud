import React from 'react';

export const TelemetrySummary = ({ cars, currentLap, maxLaps, raceTime }) => {
  if (!cars || cars.length === 0) return null;

  const leader = cars[0];
  const topThree = cars.slice(0, 3);

  return (
    <div className="telemetry-summary">
      <div className="telemetry-header">
        <h2>LIVE TELEMETRY</h2>
      </div>
      
      <div className="telemetry-grid">
        {/* Race Status */}
        <div className="telemetry-card">
          <div className="telemetry-label">LAP</div>
          <div className="telemetry-value">{currentLap}/{maxLaps}</div>
        </div>

        {/* Time */}
        <div className="telemetry-card">
          <div className="telemetry-label">TIME</div>
          <div className="telemetry-value">
            {Math.floor(raceTime / 60)}:{Math.floor(raceTime % 60).toString().padStart(2, '0')}
          </div>
        </div>

        {/* Leader */}
        <div className="telemetry-card leader-card">
          <div className="telemetry-label">LEADER</div>
          <div className="telemetry-value" style={{ color: leader?.color }}>
            {leader?.name}
          </div>
        </div>

        {/* Gaps */}
        <div className="telemetry-card">
          <div className="telemetry-label">GAP 1-2</div>
          <div className="telemetry-value">
            {topThree[0] && topThree[1] ? `+${topThree[1].interval?.toFixed(2) || '-'}` : '-'}
          </div>
        </div>
      </div>
    </div>
  );
};

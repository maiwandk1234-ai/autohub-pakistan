import React, { useState } from 'react';
import { Scale, Check, X, ShieldCheck, Zap, Fuel, ArrowRight } from 'lucide-react';
import { formatPKR, formatMileage } from '../utils/formatters';

export default function ComparePage({ cars, navigate, initialCarA = 'car-2', initialCarB = 'car-1' }) {
  const [carAId, setCarAId] = useState(initialCarA);
  const [carBId, setCarBId] = useState(initialCarB);
  const [carCId, setCarCId] = useState('');

  const carA = cars.find(c => c.id === carAId) || cars[0];
  const carB = cars.find(c => c.id === carBId) || cars[1];
  const carC = carCId ? cars.find(c => c.id === carCId) : null;

  const compareCars = [carA, carB, carC].filter(Boolean);

  const presets = [
    { label: 'Civic RS vs Corolla Grande', a: 'car-2', b: 'car-1' },
    { label: 'KIA Sportage vs Hyundai Tucson', a: 'car-4', b: 'car-5' },
    { label: 'Suzuki Swift vs Toyota Yaris', a: 'car-6', b: 'car-7' }
  ];

  return (
    <div style={{ background: 'var(--bg-main)', padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
            <Scale size={15} /> Side-by-Side Analysis
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)' }}>
            Compare Cars in Pakistan
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Compare pricing, engine power, fuel economy, boot space, and safety equipment side by side to make the right buying decision.
          </p>
        </div>

        {/* Quick Presets */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>Popular Showdowns:</span>
          {presets.map((p, idx) => (
            <button
              key={idx}
              className="filter-chip"
              onClick={() => {
                setCarAId(p.a);
                setCarBId(p.b);
                setCarCId('');
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Car Selectors & Cards Header */}
        <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', marginBottom: '2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `260px repeat(${compareCars.length}, 1fr)`,
            borderBottom: '1px solid var(--border-color)',
            background: '#f8fafc'
          }}>
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-red)', textTransform: 'uppercase' }}>
                AutoHub Comparison
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800 }}>
                Vehicle Showdown
              </h3>
            </div>

            {/* Vehicle 1 Selector */}
            <div style={{ padding: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>
              <label className="search-field-label" style={{ marginBottom: '0.4rem', display: 'block' }}>Vehicle 1</label>
              <select 
                className="search-select" 
                style={{ paddingLeft: '0.85rem', marginBottom: '1rem' }}
                value={carAId}
                onChange={(e) => setCarAId(e.target.value)}
              >
                {cars.map(c => (
                  <option key={c.id} value={c.id}>{c.year} {c.title}</option>
                ))}
              </select>

              <div style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: '#0f172a', marginBottom: '0.75rem' }}>
                <img src={carA.images[0]} alt={carA.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800 }}>{carA.title}</h4>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-red)' }}>
                {formatPKR(carA.price)}
              </div>
              <button 
                className="btn btn-outline-red btn-sm" 
                style={{ marginTop: '0.5rem', width: '100%' }}
                onClick={() => navigate('car-details', { id: carA.id })}
              >
                View Full Listing
              </button>
            </div>

            {/* Vehicle 2 Selector */}
            <div style={{ padding: '1.5rem', borderLeft: '1px solid var(--border-color)' }}>
              <label className="search-field-label" style={{ marginBottom: '0.4rem', display: 'block' }}>Vehicle 2</label>
              <select 
                className="search-select" 
                style={{ paddingLeft: '0.85rem', marginBottom: '1rem' }}
                value={carBId}
                onChange={(e) => setCarBId(e.target.value)}
              >
                {cars.map(c => (
                  <option key={c.id} value={c.id}>{c.year} {c.title}</option>
                ))}
              </select>

              <div style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: '#0f172a', marginBottom: '0.75rem' }}>
                <img src={carB.images[0]} alt={carB.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800 }}>{carB.title}</h4>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-red)' }}>
                {formatPKR(carB.price)}
              </div>
              <button 
                className="btn btn-outline-red btn-sm" 
                style={{ marginTop: '0.5rem', width: '100%' }}
                onClick={() => navigate('car-details', { id: carB.id })}
              >
                View Full Listing
              </button>
            </div>

            {/* Optional Vehicle 3 Selector */}
            {carC && (
              <div style={{ padding: '1.5rem', borderLeft: '1px solid var(--border-color)', position: 'relative' }}>
                <button 
                  onClick={() => setCarCId('')}
                  style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--text-muted)' }}
                  title="Remove 3rd car"
                >
                  <X size={18} />
                </button>
                <label className="search-field-label" style={{ marginBottom: '0.4rem', display: 'block' }}>Vehicle 3</label>
                <select 
                  className="search-select" 
                  style={{ paddingLeft: '0.85rem', marginBottom: '1rem' }}
                  value={carCId}
                  onChange={(e) => setCarCId(e.target.value)}
                >
                  {cars.map(c => (
                    <option key={c.id} value={c.id}>{c.year} {c.title}</option>
                  ))}
                </select>

                <div style={{ width: '100%', height: '140px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: '#0f172a', marginBottom: '0.75rem' }}>
                  <img src={carC.images[0]} alt={carC.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 800 }}>{carC.title}</h4>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-red)' }}>
                  {formatPKR(carC.price)}
                </div>
                <button 
                  className="btn btn-outline-red btn-sm" 
                  style={{ marginTop: '0.5rem', width: '100%' }}
                  onClick={() => navigate('car-details', { id: carC.id })}
                >
                  View Full Listing
                </button>
              </div>
            )}
          </div>

          {/* Comparison Rows */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Section: Engine & Performance */}
            <div style={{ background: '#f1f5f9', padding: '0.75rem 1.5rem', fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Engine & Powertrain
            </div>

            <ComparisonRow 
              label="Engine Displacement"
              compareCars={compareCars}
              getValue={(c) => c.engineCapacity}
            />
            <ComparisonRow 
              label="Horsepower Output"
              compareCars={compareCars}
              getValue={(c) => c.specs?.horsepower || 'N/A'}
              highlight="higher"
            />
            <ComparisonRow 
              label="Torque"
              compareCars={compareCars}
              getValue={(c) => c.specs?.torque || 'N/A'}
            />
            <ComparisonRow 
              label="Transmission Type"
              compareCars={compareCars}
              getValue={(c) => c.transmission}
            />
            <ComparisonRow 
              label="Fuel Type"
              compareCars={compareCars}
              getValue={(c) => c.fuelType}
            />

            {/* Section: Economy & Practicality */}
            <div style={{ background: '#f1f5f9', padding: '0.75rem 1.5rem', fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Fuel Economy & Capacity
            </div>

            <ComparisonRow 
              label="Claimed Fuel Mileage"
              compareCars={compareCars}
              getValue={(c) => c.specs?.fuelEconomy || 'N/A'}
            />
            <ComparisonRow 
              label="Fuel Tank Capacity"
              compareCars={compareCars}
              getValue={(c) => c.specs?.fuelTank || 'N/A'}
            />
            <ComparisonRow 
              label="Boot / Luggage Space"
              compareCars={compareCars}
              getValue={(c) => c.specs?.bootSpace || 'N/A'}
            />
            <ComparisonRow 
              label="Seating Capacity"
              compareCars={compareCars}
              getValue={(c) => c.specs?.seating || '5 Persons'}
            />

            {/* Section: Verification & Inspection */}
            <div style={{ background: '#f1f5f9', padding: '0.75rem 1.5rem', fontWeight: 800, fontSize: '0.9rem', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Inspection Score & Certification
            </div>

            <ComparisonRow 
              label="AutoHub Inspection Score"
              compareCars={compareCars}
              getValue={(c) => c.inspectionScore ? `${c.inspectionScore} / 10` : 'Not Inspected'}
            />
            <ComparisonRow 
              label="Assembly Origin"
              compareCars={compareCars}
              getValue={(c) => c.assembly}
            />
            <ComparisonRow 
              label="Sunroof Available"
              compareCars={compareCars}
              getValue={(c) => (c.features || []).some(f => f.toLowerCase().includes('sunroof')) ? 'Yes (Panoramic/Electric)' : 'No'}
            />
            <ComparisonRow 
              label="Push Start"
              compareCars={compareCars}
              getValue={(c) => (c.features || []).some(f => f.toLowerCase().includes('push') || f.toLowerCase().includes('smart key')) ? 'Yes' : 'No'}
            />
          </div>
        </div>

        {/* Verdict Banner */}
        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              <ShieldCheck size={16} /> AutoHub Editorial Recommendation
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              {carA.model} vs {carB.model} — Which Should You Buy?
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '0.95rem', maxWidth: '750px', lineHeight: '1.6' }}>
              If you prioritize driving thrill, cutting-edge technology, and highway overtaking power, the <strong>{carA.title}</strong> is the sharper driver's choice. If your priorities are softer ride over potholes, lower parts costs, and legendary Pakistani resale value, the <strong>{carB.title}</strong> remains the safest long-term bet.
            </p>
          </div>

          <button 
            className="btn btn-primary btn-lg"
            onClick={() => navigate('used-cars')}
          >
            Explore Market Listings
          </button>
        </div>
      </div>
    </div>
  );
}

function ComparisonRow({ label, compareCars, getValue }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `260px repeat(${compareCars.length}, 1fr)`,
      borderBottom: '1px solid var(--border-color)',
      padding: '1rem 1.5rem',
      alignItems: 'center',
      background: '#ffffff'
    }}>
      <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        {label}
      </div>
      {compareCars.map((car, idx) => (
        <div key={idx} style={{ paddingLeft: '1rem', borderLeft: '1px solid var(--border-color)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary)' }}>
          {getValue(car)}
        </div>
      ))}
    </div>
  );
}

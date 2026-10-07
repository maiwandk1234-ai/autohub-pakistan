import React, { useState } from 'react';
import { Calculator, CheckCircle2, Building2 } from 'lucide-react';
import { formatExactPKR, formatPKR } from '../utils/formatters';

export default function FinanceCalculator({ initialPrice = 5000000 }) {
  const [carPrice, setCarPrice] = useState(initialPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(30);
  const [tenureYears, setTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(17.5); // Average Pakistani bank car financing rate
  const [showApplicationSuccess, setShowApplicationSuccess] = useState(false);

  // Financial calculations
  const downPaymentAmount = Math.round((carPrice * downPaymentPercent) / 100);
  const loanAmount = carPrice - downPaymentAmount;
  const totalMonths = tenureYears * 12;
  const monthlyRate = (interestRate / 100) / 12;
  
  // EMI formula
  const monthlyInstallment = loanAmount > 0
    ? Math.round(
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      )
    : 0;

  const totalPayable = (monthlyInstallment * totalMonths) + downPaymentAmount;

  const handleApply = (e) => {
    e.preventDefault();
    setShowApplicationSuccess(true);
    setTimeout(() => setShowApplicationSuccess(false), 5000);
  };

  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid var(--border-color)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.75rem',
      boxShadow: 'var(--shadow-md)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
        <div style={{ background: 'var(--accent-blue-light)', color: 'var(--accent-blue)', padding: '8px', borderRadius: '8px' }}>
          <Calculator size={20} />
        </div>
        <div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700 }}>
            AutoHub Car Finance Calculator
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Estimate monthly installments with partner banks (Meezan, Alfalah, HBL)
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
        {/* Down payment slider */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            <span>Down Payment ({downPaymentPercent}%)</span>
            <span style={{ color: 'var(--brand-red)' }}>{formatExactPKR(downPaymentAmount)}</span>
          </div>
          <input 
            type="range" 
            min="15" 
            max="70" 
            step="5"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--brand-red)' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>15%</span>
            <span>70%</span>
          </div>
        </div>

        {/* Tenure selection */}
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            Financing Tenure: {tenureYears} Years ({totalMonths} Months)
          </label>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {[1, 2, 3, 4, 5, 7].map((yr) => (
              <button
                key={yr}
                type="button"
                className={`filter-chip ${tenureYears === yr ? 'active' : ''}`}
                style={{ flex: 1, textAlign: 'center' }}
                onClick={() => setTenureYears(yr)}
              >
                {yr}Y
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result summary card */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#ffffff',
        borderRadius: 'var(--radius-md)',
        padding: '1.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        <div>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8' }}>
            Estimated Monthly Installment
          </span>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: '#38bdf8' }}>
            {formatExactPKR(monthlyInstallment)} <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#cbd5e1' }}>/ month</span>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
            Financed Amount: <strong>{formatExactPKR(loanAmount)}</strong>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
            Markup: {interestRate}% KIBOR linked
          </div>
        </div>
      </div>

      {showApplicationSuccess ? (
        <div style={{ background: '#ecfdf5', border: '1px solid #10b981', color: '#065f46', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
          <CheckCircle2 size={18} color="#10b981" />
          <span>Financing pre-approval request submitted! Our banking partner will call you within 2 business hours.</span>
        </div>
      ) : (
        <button 
          className="btn btn-emerald" 
          style={{ width: '100%' }}
          onClick={handleApply}
        >
          <Building2 size={16} /> Apply for Islamic / Conventional Auto Finance
        </button>
      )}
    </div>
  );
}

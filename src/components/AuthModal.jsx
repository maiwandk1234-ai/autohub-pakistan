import React, { useState } from 'react';
import { User, X, Phone, Mail, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { PAKISTANI_CITIES } from '../data/pakistaniLocations';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  if (!isOpen) return null;

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [authMethod, setAuthMethod] = useState('phone'); // 'phone' | 'email'
  const [phone, setPhone] = useState('0300-8452199');
  const [email, setEmail] = useState('usman.khan@gmail.com');
  const [fullName, setFullName] = useState('Muhammad Usman');
  const [city, setCity] = useState('Lahore');
  const [otpStep, setOtpStep] = useState(false);
  const [otpCode, setOtpCode] = useState('4829');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpStep) {
      setOtpStep(true);
      return;
    }

    // Verify simulation
    const userData = {
      isLoggedIn: true,
      name: mode === 'register' ? fullName : (phone.includes('8452199') ? 'Usman Khan' : 'Pakistani Car Enthusiast'),
      phone: phone,
      email: authMethod === 'email' ? email : `${phone.replace(/[^0-9]/g, '')}@autohub.pk`,
      city: city
    };

    onLoginSuccess(userData);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--brand-red-light)', color: 'var(--brand-red)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <User size={24} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800 }}>
            {mode === 'login' ? 'Sign In to AutoHub' : 'Create Free Account'}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Buy, sell, and save your favorite Pakistani vehicles
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {!otpStep ? (
            <div>
              {mode === 'register' && (
                <>
                  <div style={{ marginBottom: '1rem' }}>
                    <label className="search-field-label">Full Name</label>
                    <input 
                      type="text" 
                      className="search-input" 
                      style={{ paddingLeft: '0.85rem' }}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>

                  <div style={{ marginBottom: '1rem' }}>
                    <label className="search-field-label">Your City</label>
                    <select 
                      className="search-select" 
                      style={{ paddingLeft: '0.85rem' }}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      {PAKISTANI_CITIES.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <button
                  type="button"
                  className={`btn btn-sm ${authMethod === 'phone' ? 'btn-dark' : 'btn-secondary'}`}
                  style={{ flex: 1 }}
                  onClick={() => setAuthMethod('phone')}
                >
                  <Phone size={14} /> Mobile Phone
                </button>
                <button
                  type="button"
                  className={`btn btn-sm ${authMethod === 'email' ? 'btn-dark' : 'btn-secondary'}`}
                  style={{ flex: 1 }}
                  onClick={() => setAuthMethod('email')}
                >
                  <Mail size={14} /> Email Address
                </button>
              </div>

              {authMethod === 'phone' ? (
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="search-field-label">Pakistani Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="03XX-XXXXXXX" 
                    className="search-input"
                    style={{ paddingLeft: '0.85rem' }}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    We'll send a 4-digit verification SMS code
                  </span>
                </div>
              ) : (
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="search-field-label">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="yourname@domain.com" 
                    className="search-input"
                    style={{ paddingLeft: '0.85rem' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ) : (
            <div>
              <div style={{ background: '#ecfdf5', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.85rem', color: '#065f46', textAlign: 'center' }}>
                Enter the 4-digit code sent to <strong>{authMethod === 'phone' ? phone : email}</strong>
              </div>

              <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <label className="search-field-label" style={{ marginBottom: '0.5rem', display: 'block' }}>Verification Code</label>
                <input 
                  type="text" 
                  maxLength={4}
                  className="search-input"
                  style={{ textAlign: 'center', fontSize: '1.5rem', letterSpacing: '0.5rem', fontWeight: 800, width: '160px', margin: '0 auto' }}
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-emerald" style={{ width: '100%' }}>
                <Check size={18} /> Verify & Log In
              </button>
            </div>
          )}
        </form>

        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
          {mode === 'login' ? (
            <span>
              Don't have an AutoHub account?{' '}
              <button 
                type="button"
                onClick={() => { setMode('register'); setOtpStep(false); }}
                style={{ color: 'var(--brand-red)', fontWeight: 700 }}
              >
                Sign Up Now
              </button>
            </span>
          ) : (
            <span>
              Already registered?{' '}
              <button 
                type="button"
                onClick={() => { setMode('login'); setOtpStep(false); }}
                style={{ color: 'var(--brand-red)', fontWeight: 700 }}
              >
                Sign In
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

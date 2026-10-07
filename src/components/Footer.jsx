import React from 'react';
import { Car, ShieldCheck, PhoneCall, Mail, MapPin, Globe, Share2 } from 'lucide-react';

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div className="brand-logo" style={{ color: '#ffffff', marginBottom: '1rem' }}>
              <div className="brand-logo-icon">
                <Car size={24} strokeWidth={2.5} />
              </div>
              <div>
                <div className="brand-logo-text" style={{ color: '#ffffff' }}>
                  AUTOHUB<span style={{ color: 'var(--brand-red)' }}>.PK</span>
                </div>
                <span className="brand-tagline" style={{ color: '#94a3b8' }}>Automotive Marketplace</span>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1.25rem', color: '#94a3b8' }}>
              Pakistan's trusted digital automotive marketplace to find, buy, inspect, compare, and sell verified cars, motorbikes, and auto parts in Karachi, Lahore, Islamabad, and nationwide.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="#fb" style={{ color: '#94a3b8', background: 'rgba(255,255,255,0.06)', padding: '8px', borderRadius: '50%', display: 'flex' }} aria-label="Facebook">
                <Globe size={16} />
              </a>
              <a href="#share" style={{ color: '#94a3b8', background: 'rgba(255,255,255,0.06)', padding: '8px', borderRadius: '50%', display: 'flex' }} aria-label="Share">
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Cars By City */}
          <div>
            <h4 className="footer-col-title">Cars by City</h4>
            <ul className="footer-links">
              <li><button className="footer-link" onClick={() => navigate('used-cars', { city: 'Lahore' })}>Cars in Lahore</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { city: 'Karachi' })}>Cars in Karachi</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { city: 'Islamabad' })}>Cars in Islamabad</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { city: 'Rawalpindi' })}>Cars in Rawalpindi</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { city: 'Faisalabad' })}>Cars in Faisalabad</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { city: 'Peshawar' })}>Cars in Peshawar</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { city: 'Multan' })}>Cars in Multan</button></li>
            </ul>
          </div>

          {/* Cars By Make */}
          <div>
            <h4 className="footer-col-title">Cars by Make</h4>
            <ul className="footer-links">
              <li><button className="footer-link" onClick={() => navigate('used-cars', { make: 'Toyota' })}>Toyota Pakistan</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { make: 'Honda' })}>Honda Pakistan</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { make: 'Suzuki' })}>Suzuki Pakistan</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { make: 'KIA' })}>KIA Lucky Motors</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { make: 'Hyundai' })}>Hyundai Nishat</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { make: 'Haval' })}>Haval Sazgar</button></li>
              <li><button className="footer-link" onClick={() => navigate('used-cars', { make: 'Changan' })}>Changan Master</button></li>
            </ul>
          </div>

          {/* Explore Sections */}
          <div>
            <h4 className="footer-col-title">Explore AutoHub</h4>
            <ul className="footer-links">
              <li><button className="footer-link" onClick={() => navigate('used-cars')}>Used Cars Portal</button></li>
              <li><button className="footer-link" onClick={() => navigate('new-cars')}>New Cars Showroom</button></li>
              <li><button className="footer-link" onClick={() => navigate('bikes')}>Used & New Bikes</button></li>
              <li><button className="footer-link" onClick={() => navigate('auto-parts')}>Auto Parts & Accessories</button></li>
              <li><button className="footer-link" onClick={() => navigate('compare')}>Car Comparison</button></li>
              <li><button className="footer-link" onClick={() => navigate('reviews')}>Owner Reviews</button></li>
              <li><button className="footer-link" onClick={() => navigate('news')}>Automotive News</button></li>
            </ul>
          </div>

          {/* Contact & Services */}
          <div>
            <h4 className="footer-col-title">Customer Support</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} color="var(--brand-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>AutoHub Tower, Gulberg III, Main Boulevard, Lahore, Pakistan</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <PhoneCall size={16} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                <span>042-111-288-648</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} color="var(--brand-red)" style={{ flexShrink: 0 }} />
                <span>support@autohub.com.pk</span>
              </div>
              <div style={{ marginTop: '0.5rem', padding: '0.75rem', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontWeight: 700, fontSize: '0.8rem' }}>
                  <ShieldCheck size={14} /> AutoHub Certified
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                  150+ check points digital inspection report on demand.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} AutoHub Pakistan (Pvt.) Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#64748b' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Safety Guidelines</span>
            <span>Site Map</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck, Check } from 'lucide-react';
import { formatPKR } from '../utils/formatters';

export default function WhatsAppModal({ isOpen, onClose, vehicle, seller }) {
  if (!isOpen || !vehicle) return null;

  const defaultMsg = `Salam ${seller?.name || 'Seller'}, I am interested in your ${vehicle.year} ${vehicle.title} listed on AutoHub Pakistan for ${formatPKR(vehicle.price)}. Is it still available for inspection?`;
  const [message, setMessage] = useState(defaultMsg);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setSentSuccess(true);
    // Also try opening WhatsApp web / mobile app if seller has a number
    const phone = seller?.whatsapp || '923001234567';
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setSentSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ background: '#25D366', color: '#ffffff', width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MessageSquare size={24} />
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800 }}>
              Chat with Seller on WhatsApp
            </h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Direct connection with {seller?.name || 'Vehicle Owner'}
            </span>
          </div>
        </div>

        <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '0.85rem', marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <img 
            src={vehicle.images?.[0] || 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=200&auto=format&fit=crop&q=80'} 
            alt={vehicle.title} 
            style={{ width: '64px', height: '48px', objectFit: 'cover', borderRadius: '4px' }}
          />
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{vehicle.year} {vehicle.title}</div>
            <div style={{ color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.95rem' }}>{formatPKR(vehicle.price)} • {vehicle.city}</div>
          </div>
        </div>

        <form onSubmit={handleSend}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem', color: 'var(--text-secondary)' }}>
            Your Message:
          </label>
          <textarea 
            rows="4"
            className="search-input"
            style={{ padding: '0.75rem', resize: 'vertical', width: '100%', marginBottom: '1.25rem' }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#10b981', marginBottom: '1.25rem' }}>
            <ShieldCheck size={16} />
            <span>AutoHub Safe Messenger: Never send token money before physical vehicle inspection.</span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-emerald"
              disabled={sentSuccess}
              style={{ background: '#25D366' }}
            >
              {sentSuccess ? (
                <>
                  <Check size={18} /> Opening WhatsApp...
                </>
              ) : (
                <>
                  <Send size={18} /> Send via WhatsApp
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

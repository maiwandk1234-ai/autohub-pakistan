import React, { useState } from 'react';
import { ShoppingBag, X, Trash2, Plus, Minus, CheckCircle, Truck } from 'lucide-react';
import { formatExactPKR } from '../utils/formatters';
import { PAKISTANI_CITIES } from '../data/pakistaniLocations';

export default function CartModal({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null;

  const [step, setStep] = useState('cart'); // 'cart' | 'checkout' | 'success'
  const [formData, setFormData] = useState({
    name: 'Hamza Farooq',
    phone: '0300-9876543',
    city: 'Lahore',
    address: 'House 42-B, Sector C, DHA Phase 6',
    paymentMethod: 'cod'
  });

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? (subtotal > 20000 ? 0 : 450) : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setStep('success');
    onClearCart();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {step === 'cart' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <ShoppingBag size={22} color="var(--brand-red)" />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800 }}>
                Auto Parts Cart ({cart.reduce((n, i) => n + i.quantity, 0)} Items)
              </h3>
            </div>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <ShoppingBag size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Your Cart is Empty</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Explore top Pakistani auto parts, genuine oils, LED lights, and custom accessories.
                </p>
                <button className="btn btn-primary" onClick={onClose}>
                  Browse Auto Parts
                </button>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '350px', overflowY: 'auto', paddingRight: '0.5rem', marginBottom: '1.5rem' }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.75rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)' }}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: 'var(--radius-sm)' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: '0.925rem', marginBottom: '0.2rem' }}>
                          {item.name}
                        </div>
                        <div style={{ color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.95rem' }}>
                          {formatExactPKR(item.price)}
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', padding: '0.2rem 0.4rem' }}>
                        <button onClick={() => onUpdateQuantity(item.id, -1)} style={{ padding: '2px' }}>
                          <Minus size={14} />
                        </button>
                        <span style={{ fontWeight: 700, minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} style={{ padding: '2px' }}>
                          <Plus size={14} />
                        </button>
                      </div>

                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        style={{ color: '#ef4444', padding: '0.4rem' }}
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Subtotal:</span>
                    <span style={{ fontWeight: 700 }}>{formatExactPKR(subtotal)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>TCS / Leopards Courier Delivery:</span>
                    <span>{deliveryFee === 0 ? <strong style={{ color: '#10b981' }}>FREE (Orders over 20k)</strong> : formatExactPKR(deliveryFee)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', fontSize: '1.15rem' }}>
                    <strong>Total Amount:</strong>
                    <strong style={{ color: 'var(--brand-red)' }}>{formatExactPKR(grandTotal)}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                  <button className="btn btn-secondary" onClick={onClose}>
                    Continue Shopping
                  </button>
                  <button className="btn btn-primary" onClick={() => setStep('checkout')}>
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {step === 'checkout' && (
          <form onSubmit={handleCheckoutSubmit}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <Truck size={22} color="var(--brand-red)" />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800 }}>
                Delivery Details & Payment
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label className="search-field-label">Full Name</label>
                <input 
                  type="text" 
                  className="search-input" 
                  style={{ paddingLeft: '0.85rem' }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="search-field-label">Mobile Number</label>
                <input 
                  type="text" 
                  className="search-input" 
                  style={{ paddingLeft: '0.85rem' }}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label className="search-field-label">City</label>
              <select 
                className="search-select"
                style={{ paddingLeft: '0.85rem' }}
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              >
                {PAKISTANI_CITIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label className="search-field-label">Complete Street Address / House #</label>
              <textarea 
                rows="2"
                className="search-input"
                style={{ padding: '0.75rem', resize: 'none', width: '100%' }}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
              />
            </div>

            <div style={{ background: '#ecfdf5', border: '1px solid #10b981', padding: '0.85rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle size={18} color="#10b981" />
              <span style={{ fontSize: '0.875rem', color: '#065f46', fontWeight: 600 }}>
                Payment Method: Cash on Delivery (COD) across Pakistan. Pay after parcel verification!
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button type="button" className="btn btn-secondary" onClick={() => setStep('cart')}>
                Back to Cart
              </button>
              <button type="submit" className="btn btn-emerald btn-lg">
                Confirm Order ({formatExactPKR(grandTotal)})
              </button>
            </div>
          </form>
        )}

        {step === 'success' && (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Order Placed Successfully!
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Shukriya! Your order <strong>#AH-{Math.floor(100000 + Math.random() * 900000)}</strong> has been confirmed. You will receive an SMS tracking code once dispatched via Leopards Courier to <strong>{formData.city}</strong>.
            </p>
            <button className="btn btn-primary" onClick={onClose}>
              Continue Exploring AutoHub
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

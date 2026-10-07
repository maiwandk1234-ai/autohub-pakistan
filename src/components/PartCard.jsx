import React from 'react';
import { Star, ShoppingCart, Check, ShieldCheck } from 'lucide-react';
import { formatExactPKR } from '../utils/formatters';

export default function PartCard({ part, onAddToCart, onOpenDetails }) {
  const discountPercent = part.originalPrice 
    ? Math.round(((part.originalPrice - part.price) / part.originalPrice) * 100) 
    : 0;

  return (
    <div className="vehicle-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="card-media-wrapper" style={{ cursor: 'pointer' }} onClick={() => onOpenDetails && onOpenDetails(part)}>
        <img 
          src={part.image} 
          alt={part.name} 
          className="card-img" 
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=600&auto=format&fit=crop&q=80';
          }}
        />

        <div className="card-badges">
          {discountPercent > 0 && (
            <span className="badge-featured" style={{ background: '#16a34a' }}>
              {discountPercent}% OFF
            </span>
          )}
          {part.badge && (
            <span className="badge-certified">
              {part.badge}
            </span>
          )}
        </div>
      </div>

      <div className="card-body">
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-red)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          {part.category}
        </div>

        <h3 
          className="card-title" 
          style={{ fontSize: '1rem', cursor: 'pointer', minHeight: '2.7rem' }}
          onClick={() => onOpenDetails && onOpenDetails(part)}
          title={part.name}
        >
          {part.name}
        </h3>

        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', background: 'var(--bg-subtle)', padding: '0.35rem 0.6rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <ShieldCheck size={14} color="#10b981" />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{part.compatibility}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
            {formatExactPKR(part.price)}
          </span>
          {part.originalPrice && (
            <span style={{ fontSize: '0.875rem', textDecoration: 'line-through', color: 'var(--text-muted)' }}>
              {formatExactPKR(part.originalPrice)}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', color: '#f59e0b' }}>
            <Star size={13} fill="#f59e0b" />
            <span style={{ fontWeight: 700, marginLeft: '3px' }}>{part.rating}</span>
          </div>
          <span>({part.reviewsCount} reviews)</span>
        </div>

        <div className="card-footer" style={{ borderTop: 'none', padding: 0 }}>
          <button 
            className="btn btn-primary" 
            style={{ width: '100%', fontSize: '0.875rem', padding: '0.55rem 1rem' }}
            onClick={() => onAddToCart(part)}
          >
            <ShoppingCart size={15} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

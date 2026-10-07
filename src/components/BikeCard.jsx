import React from 'react';
import { Heart, MapPin, Gauge, Fuel, Calendar, Zap } from 'lucide-react';
import { formatExactPKR, formatMileage, timeAgo } from '../utils/formatters';

export default function BikeCard({ 
  bike, 
  onViewDetails, 
  isFavorite = false, 
  onToggleFavorite 
}) {
  const primaryImage = (bike.images && bike.images[0]) || 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=900&auto=format&fit=crop&q=80';

  return (
    <div className="vehicle-card">
      <div className="card-media-wrapper">
        <img 
          src={primaryImage} 
          alt={bike.title} 
          className="card-img" 
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=900&auto=format&fit=crop&q=80';
          }}
        />

        <div className="card-badges">
          {bike.featured && <span className="badge-featured">Featured Bike</span>}
          <span className="badge-certified" style={{ background: '#0284c7' }}>
            <Zap size={12} /> {bike.engineCapacity}
          </span>
        </div>

        <button 
          className={`card-favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(bike);
          }}
          title={isFavorite ? "Remove from favorites" : "Save bike"}
        >
          <Heart size={18} fill={isFavorite ? 'var(--brand-red)' : 'none'} />
        </button>
      </div>

      <div className="card-body">
        <h3 
          className="card-title" 
          style={{ cursor: 'pointer' }}
          onClick={() => onViewDetails(bike.id)}
          title={bike.title}
        >
          {bike.year} {bike.title}
        </h3>

        <div className="card-price">
          {formatExactPKR(bike.price)}
        </div>

        <div className="card-location">
          <MapPin size={14} color="var(--brand-red)" />
          <span>{bike.city}</span>
          {bike.registeredCity && <span style={{ color: 'var(--text-muted)' }}>• Reg. {bike.registeredCity}</span>}
        </div>

        <div className="card-specs-row">
          <div className="card-spec-item" title="Model Year">
            <Calendar size={13} color="var(--text-muted)" />
            <span>{bike.year}</span>
          </div>
          <div className="card-spec-item" title="Mileage">
            <Gauge size={13} color="var(--text-muted)" />
            <span>{formatMileage(bike.mileage)}</span>
          </div>
          <div className="card-spec-item" title="Starting">
            <Zap size={13} color="var(--text-muted)" />
            <span>{bike.startingType}</span>
          </div>
        </div>

        <div className="card-footer">
          <span className="card-time">{timeAgo(bike.createdAt)}</span>
          <button 
            className="btn btn-outline-red btn-sm"
            onClick={() => onViewDetails(bike.id)}
          >
            View Bike Details
          </button>
        </div>
      </div>
    </div>
  );
}

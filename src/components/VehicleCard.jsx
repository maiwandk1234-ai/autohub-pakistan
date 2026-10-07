import React from 'react';
import { Heart, MapPin, Gauge, Fuel, Calendar, Cog, ShieldCheck, Scale } from 'lucide-react';
import { formatPKR, formatMileage, timeAgo } from '../utils/formatters';

export default function VehicleCard({ 
  car, 
  onViewDetails, 
  isFavorite = false, 
  onToggleFavorite,
  isCompared = false,
  onToggleCompare,
  layout = 'grid' 
}) {
  const primaryImage = (car.images && car.images[0]) || 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop&q=80';

  if (layout === 'list') {
    return (
      <div className="vehicle-card" style={{ flexDirection: 'row', alignItems: 'stretch' }}>
        <div className="card-media-wrapper" style={{ width: '300px', flexShrink: 0, aspectRatio: 'auto' }}>
          <img 
            src={primaryImage} 
            alt={car.title} 
            className="card-img" 
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop&q=80';
            }}
          />
          <div className="card-badges">
            {car.featured && <span className="badge-featured">Featured</span>}
            {car.certified && (
              <span className="badge-certified">
                <ShieldCheck size={12} /> AutoHub Certified
              </span>
            )}
          </div>
          <button 
            className={`card-favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(car);
            }}
            title={isFavorite ? "Remove from favorites" : "Save vehicle"}
          >
            <Heart size={18} fill={isFavorite ? 'var(--brand-red)' : 'none'} />
          </button>
        </div>

        <div className="card-body" style={{ flex: 1, padding: '1.25rem 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h3 
                className="card-title" 
                style={{ cursor: 'pointer', fontSize: '1.25rem', marginBottom: '0.25rem' }}
                onClick={() => onViewDetails(car.id)}
              >
                {car.year} {car.title}
              </h3>
              <div className="card-location">
                <MapPin size={14} color="var(--brand-red)" />
                <span>{car.city} {car.locationArea ? `• ${car.locationArea}` : ''}</span>
                {car.registeredCity && (
                  <span style={{ color: 'var(--text-muted)' }}>(Reg. {car.registeredCity})</span>
                )}
              </div>
            </div>
            <div className="card-price" style={{ fontSize: '1.5rem' }}>
              {formatPKR(car.price)}
            </div>
          </div>

          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0.5rem 0', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {car.description}
          </p>

          <div className="card-specs-row" style={{ marginTop: 'auto', marginBottom: '1rem' }}>
            <div className="card-spec-item">
              <Calendar size={14} color="var(--text-muted)" />
              <span>{car.year}</span>
            </div>
            <div className="card-spec-item">
              <Gauge size={14} color="var(--text-muted)" />
              <span>{formatMileage(car.mileage)}</span>
            </div>
            <div className="card-spec-item">
              <Fuel size={14} color="var(--text-muted)" />
              <span>{car.fuelType}</span>
            </div>
            <div className="card-spec-item">
              <Cog size={14} color="var(--text-muted)" />
              <span>{car.transmission}</span>
            </div>
            <div className="card-spec-item">
              <span>{car.engineCapacity}</span>
            </div>
          </div>

          <div className="card-footer">
            <span className="card-time">{timeAgo(car.createdAt)}</span>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {onToggleCompare && (
                <button 
                  className={`btn btn-sm ${isCompared ? 'btn-dark' : 'btn-secondary'}`}
                  onClick={() => onToggleCompare(car.id)}
                  title="Compare with other cars"
                >
                  <Scale size={14} /> {isCompared ? 'Comparing' : 'Compare'}
                </button>
              )}
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => onViewDetails(car.id)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default Grid Layout
  return (
    <div className="vehicle-card">
      <div className="card-media-wrapper">
        <img 
          src={primaryImage} 
          alt={car.title} 
          className="card-img" 
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop&q=80';
          }}
        />

        <div className="card-badges">
          {car.featured && <span className="badge-featured">Featured</span>}
          {car.certified && (
            <span className="badge-certified">
              <ShieldCheck size={12} /> Certified
            </span>
          )}
        </div>

        {car.inspectionScore && (
          <div className="card-inspection-pill">
            <span>Score:</span>
            <span className="score">{car.inspectionScore}/10</span>
          </div>
        )}

        <button 
          className={`card-favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(car);
          }}
          title={isFavorite ? "Remove from favorites" : "Save vehicle"}
        >
          <Heart size={18} fill={isFavorite ? 'var(--brand-red)' : 'none'} />
        </button>
      </div>

      <div className="card-body">
        <h3 
          className="card-title" 
          style={{ cursor: 'pointer' }}
          onClick={() => onViewDetails(car.id)}
          title={car.title}
        >
          {car.year} {car.title}
        </h3>

        <div className="card-price">
          {formatPKR(car.price)}
        </div>

        <div className="card-location">
          <MapPin size={14} color="var(--brand-red)" />
          <span>{car.city}</span>
          {car.locationArea && <span style={{ color: 'var(--text-muted)' }}>• {car.locationArea}</span>}
        </div>

        <div className="card-specs-row">
          <div className="card-spec-item" title="Model Year">
            <Calendar size={13} color="var(--text-muted)" />
            <span>{car.year}</span>
          </div>
          <div className="card-spec-item" title="Mileage">
            <Gauge size={13} color="var(--text-muted)" />
            <span>{formatMileage(car.mileage)}</span>
          </div>
          <div className="card-spec-item" title="Fuel Type">
            <Fuel size={13} color="var(--text-muted)" />
            <span>{car.fuelType}</span>
          </div>
          <div className="card-spec-item" title="Transmission">
            <Cog size={13} color="var(--text-muted)" />
            <span>{car.transmission}</span>
          </div>
        </div>

        <div className="card-footer">
          <span className="card-time">{timeAgo(car.createdAt)}</span>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {onToggleCompare && (
              <button 
                className={`btn btn-sm ${isCompared ? 'btn-dark' : 'btn-secondary'}`}
                style={{ padding: '0.35rem 0.6rem' }}
                onClick={() => onToggleCompare(car.id)}
                title="Compare"
              >
                <Scale size={14} />
              </button>
            )}
            <button 
              className="btn btn-outline-red btn-sm"
              onClick={() => onViewDetails(car.id)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

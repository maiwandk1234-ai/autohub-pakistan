import React from 'react';
import { Heart, Trash2, ArrowRight } from 'lucide-react';
import VehicleCard from '../components/VehicleCard';

export default function FavoritesPage({ favorites, onToggleFavorite, navigate }) {
  return (
    <div style={{ background: 'var(--bg-main)', padding: '2.5rem 0 5rem', minHeight: '70vh' }}>
      <div className="container">
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
            <Heart size={15} fill="var(--brand-red)" /> Your Shortlisted Listings
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)' }}>
            Saved Vehicles ({favorites.length})
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Track price drops and quickly review cars and bikes you have saved.
          </p>
        </div>

        {favorites.length === 0 ? (
          <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '4rem 2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--brand-red-light)', color: 'var(--brand-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
              <Heart size={32} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              No Saved Vehicles Yet
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
              Tap the heart icon on any car or bike listing card to shortlist it here for easy access.
            </p>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('used-cars')}>
              Browse Used Cars <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <div className="cards-grid">
            {favorites.map((car) => (
              <VehicleCard
                key={car.id}
                car={car}
                onViewDetails={(id) => navigate('car-details', { id })}
                isFavorite={true}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

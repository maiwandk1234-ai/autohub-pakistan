import React, { useState, useMemo } from 'react';
import { 
  Bike, 
  Search, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  X, 
  Calendar, 
  Gauge, 
  Zap, 
  Fuel, 
  Heart 
} from 'lucide-react';
import BikeCard from '../components/BikeCard';
import WhatsAppModal from '../components/WhatsAppModal';
import { BIKE_BRANDS } from '../data/mockBikes';
import { PAKISTANI_CITIES } from '../data/pakistaniLocations';
import { formatExactPKR, formatMileage, timeAgo } from '../utils/formatters';

export default function BikesPage({ 
  bikes, 
  favorites = [], 
  onToggleFavorite, 
  initialBikeId = null 
}) {
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBike, setSelectedBike] = useState(() => {
    if (initialBikeId) {
      return bikes.find(b => b.id === initialBikeId) || null;
    }
    return null;
  });
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const filteredBikes = useMemo(() => {
    return bikes.filter(bike => {
      if (selectedBrand !== 'All Brands' && bike.brand !== selectedBrand) return false;
      if (selectedCity && bike.city !== selectedCity) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const str = `${bike.brand} ${bike.model} ${bike.title}`.toLowerCase();
        if (!str.includes(q)) return false;
      }
      return true;
    });
  }, [bikes, selectedBrand, selectedCity, searchQuery]);

  return (
    <div style={{ background: 'var(--bg-main)', padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
            <Bike size={15} /> Two-Wheeler Portal
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)' }}>
            Used & New Bikes for Sale in Pakistan
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Explore verified Honda CD 70, CG 125, Yamaha YBR 125, Suzuki GS 150, and sports bikes with direct seller contact.
          </p>
        </div>

        {/* Filters Bar */}
        <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr', gap: '1rem', alignItems: 'center' }}>
            <div className="search-input-wrapper">
              <Search size={18} className="input-icon" />
              <input 
                type="text"
                placeholder="Search bike (e.g. YBR 125G, Honda 125, GS 150)..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="search-input-wrapper">
              <Bike size={18} className="input-icon" />
              <select 
                className="search-select"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                {BIKE_BRANDS.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="search-input-wrapper">
              <MapPin size={18} className="input-icon" />
              <select 
                className="search-select"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">All Pakistani Cities</option>
                {PAKISTANI_CITIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Showing <strong>{filteredBikes.length}</strong> motorbikes
          </span>
        </div>

        {/* Bikes Grid */}
        <div className="cards-grid">
          {filteredBikes.map(bike => (
            <BikeCard 
              key={bike.id}
              bike={bike}
              onViewDetails={() => {
                setSelectedBike(bike);
                setShowPhone(false);
              }}
              isFavorite={favorites.some(f => f.id === bike.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </div>

      {/* Bike Details Modal */}
      {selectedBike && (
        <div className="modal-backdrop" onClick={() => setSelectedBike(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
            <button className="modal-close-btn" onClick={() => setSelectedBike(null)}>
              <X size={20} />
            </button>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', paddingRight: '2rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-red)', textTransform: 'uppercase' }}>
                  {selectedBike.brand} Motorcycle
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800 }}>
                  {selectedBike.year} {selectedBike.title}
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <MapPin size={14} color="var(--brand-red)" />
                  <span>{selectedBike.city}</span>
                  {selectedBike.registeredCity && <span>• Reg. {selectedBike.registeredCity}</span>}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--brand-red)' }}>
                  {formatExactPKR(selectedBike.price)}
                </div>
              </div>
            </div>

            <div style={{ width: '100%', height: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#0f172a', marginBottom: '1.25rem' }}>
              <img 
                src={selectedBike.images?.[0] || 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&auto=format&fit=crop&q=80'} 
                alt={selectedBike.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Quick Specs */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Engine</div>
                <strong style={{ fontSize: '0.9rem' }}>{selectedBike.engineCapacity}</strong>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mileage</div>
                <strong style={{ fontSize: '0.9rem' }}>{formatMileage(selectedBike.mileage)}</strong>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Fuel Average</div>
                <strong style={{ fontSize: '0.9rem', color: '#10b981' }}>{selectedBike.fuelEconomy}</strong>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Condition</div>
                <strong style={{ fontSize: '0.9rem' }}>{selectedBike.condition}</strong>
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>Seller Description</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {selectedBike.description}
              </p>
            </div>

            {/* Seller Contact Actions */}
            <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
              {showPhone ? (
                <a 
                  href={`tel:${selectedBike.seller?.phone || '03214567890'}`}
                  className="btn btn-emerald"
                  style={{ flex: 1, textDecoration: 'none' }}
                >
                  <Phone size={16} /> Call: {selectedBike.seller?.phone || '0321-4567890'}
                </a>
              ) : (
                <button 
                  className="btn btn-dark"
                  style={{ flex: 1 }}
                  onClick={() => setShowPhone(true)}
                >
                  <Phone size={16} /> Show Phone Number
                </button>
              )}

              <button 
                className="btn btn-emerald"
                style={{ flex: 1, background: '#25D366' }}
                onClick={() => setIsWhatsAppOpen(true)}
              >
                <MessageSquare size={16} /> Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Modal */}
      {selectedBike && (
        <WhatsAppModal 
          isOpen={isWhatsAppOpen}
          onClose={() => setIsWhatsAppOpen(false)}
          vehicle={selectedBike}
          seller={selectedBike.seller}
        />
      )}
    </div>
  );
}

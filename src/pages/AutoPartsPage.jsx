import React, { useState, useMemo } from 'react';
import { 
  Wrench, 
  Search, 
  ShoppingCart, 
  Star, 
  ShieldCheck, 
  Truck, 
  Check, 
  X,
  Sparkles
} from 'lucide-react';
import PartCard from '../components/PartCard';
import { PART_CATEGORIES } from '../data/mockParts';
import { formatExactPKR } from '../utils/formatters';

export default function AutoPartsPage({ parts, onAddToCart, onOpenCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPart, setSelectedPart] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const filteredParts = useMemo(() => {
    return parts.filter(part => {
      if (selectedCategory !== 'All Categories' && part.category !== selectedCategory) {
        return false;
      }
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const str = `${part.name} ${part.category} ${part.compatibility} ${part.description}`.toLowerCase();
        if (!str.includes(q)) return false;
      }
      return true;
    });
  }, [parts, selectedCategory, searchQuery]);

  const handleAddToCartWithToast = (part) => {
    onAddToCart(part);
    setToastMessage(`Added "${part.name.substring(0, 30)}..." to cart!`);
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <div style={{ background: 'var(--bg-main)', padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
            <Wrench size={15} /> Auto Store Pakistan
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)' }}>
            Car Auto Parts & Custom Accessories
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Genuine engine oils, Android multimedia panels, LED projector headlights, and ceramic detailing kits with nationwide Cash on Delivery.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
          <div className="search-input-wrapper" style={{ marginBottom: '1.25rem' }}>
            <Search size={18} className="input-icon" />
            <input 
              type="text"
              placeholder="Search by part name, car model, or keyword (e.g. Corolla Headlights, 5W-30 Oil, Floor Mats)..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: '0.75rem', color: 'var(--text-muted)' }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            {PART_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
            Showing <strong>{filteredParts.length}</strong> items in <strong>{selectedCategory}</strong>
          </span>
          <button className="btn btn-secondary btn-sm" onClick={onOpenCart}>
            <ShoppingCart size={15} /> View My Cart
          </button>
        </div>

        {/* Products Grid */}
        <div className="cards-grid">
          {filteredParts.map(part => (
            <PartCard 
              key={part.id}
              part={part}
              onAddToCart={handleAddToCartWithToast}
              onOpenDetails={(p) => setSelectedPart(p)}
            />
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedPart && (
        <div className="modal-backdrop" onClick={() => setSelectedPart(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <button className="modal-close-btn" onClick={() => setSelectedPart(null)}>
              <X size={20} />
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#0f172a' }}>
                <img 
                  src={selectedPart.image} 
                  alt={selectedPart.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--brand-red)', textTransform: 'uppercase' }}>
                  {selectedPart.category}
                </span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, margin: '0.35rem 0' }}>
                  {selectedPart.name}
                </h3>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', margin: '0.75rem 0' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>
                    {formatExactPKR(selectedPart.price)}
                  </span>
                  {selectedPart.originalPrice && (
                    <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>
                      {formatExactPKR(selectedPart.originalPrice)}
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                  <ShieldCheck size={16} />
                  <span>Compatibility: {selectedPart.compatibility}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                  <Truck size={16} />
                  <span>Est. Delivery: {selectedPart.deliveryTime} (Cash on Delivery)</span>
                </div>

                <button 
                  className="btn btn-primary" 
                  style={{ width: '100%' }}
                  onClick={() => {
                    handleAddToCartWithToast(selectedPart);
                    setSelectedPart(null);
                  }}
                >
                  <ShoppingCart size={16} /> Add to Cart ({formatExactPKR(selectedPart.price)})
                </button>
              </div>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
              <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>Product Description</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {selectedPart.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#0f172a',
          color: '#ffffff',
          padding: '0.85rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          zIndex: 9999,
          animation: 'modalPop 0.2s ease-out'
        }}>
          <Check size={18} color="#10b981" />
          <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{toastMessage}</span>
          <button 
            className="btn btn-primary btn-sm" 
            style={{ marginLeft: '0.5rem', padding: '0.25rem 0.6rem', fontSize: '0.75rem' }}
            onClick={onOpenCart}
          >
            Open Cart
          </button>
        </div>
      )}
    </div>
  );
}

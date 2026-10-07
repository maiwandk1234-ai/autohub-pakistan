import React, { useState } from 'react';
import { Star, PlusCircle, Check, ThumbsUp, ShieldCheck, X, Car, Bike } from 'lucide-react';

export default function ReviewsPage({ reviews, onAddReview }) {
  const [filterType, setFilterType] = useState('All'); // 'All' | 'Car' | 'Bike'
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    carName: 'Honda Civic RS 1.5 Turbo',
    category: 'Car',
    overallRating: 5,
    fuelEconomyRating: 4.5,
    comfortRating: 5,
    performanceRating: 5,
    valueForMoneyRating: 4,
    reviewerName: 'Hamza Farooq',
    reviewerType: 'Verified Pakistani Owner',
    title: 'Remarkable Highway Cruiser & Luxury Finish',
    pros: 'Powerful 176hp engine, ultra responsive brakes, Honda Sensing ADAS',
    cons: 'Premium ex-factory pricing',
    reviewText: 'After driving this vehicle for over 15,000 km across the Lahore-Islamabad M2 Motorway, I can say it is the finest locally assembled sedan ever built in Pakistan. Fuel consumption averages 14 km/l on long routes.',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop&q=80'
  });

  const filteredReviews = reviews.filter(r => {
    if (filterType === 'All') return true;
    return r.category === filterType;
  });

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const newReview = {
      ...formData,
      overallRating: Number(formData.overallRating),
      fuelEconomyRating: Number(formData.fuelEconomyRating),
      comfortRating: Number(formData.comfortRating),
      performanceRating: Number(formData.performanceRating),
      valueForMoneyRating: Number(formData.valueForMoneyRating),
      pros: formData.pros.split(',').map(p => p.trim()).filter(Boolean),
      cons: formData.cons.split(',').map(c => c.trim()).filter(Boolean)
    };

    onAddReview(newReview);
    setIsWriteModalOpen(false);
  };

  return (
    <div style={{ background: 'var(--bg-main)', padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
              <Star size={14} fill="var(--brand-red)" /> Authentic User Feedback
            </div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)' }}>
              Pakistani Car & Bike Reviews
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Read unbiased opinions from real Pakistani owners about fuel average, maintenance costs, comfort, and resale.
            </p>
          </div>

          <button 
            className="btn btn-primary"
            onClick={() => setIsWriteModalOpen(true)}
          >
            <PlusCircle size={18} /> Write a Vehicle Review
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          {['All', 'Car', 'Bike'].map(type => (
            <button
              key={type}
              className={`filter-chip ${filterType === type ? 'active' : ''}`}
              onClick={() => setFilterType(type)}
            >
              {type === 'All' ? 'All Reviews' : `${type} Reviews`}
            </button>
          ))}
        </div>

        {/* Reviews List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredReviews.map((rev) => (
            <div 
              key={rev.id}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                boxShadow: 'var(--shadow-md)',
                display: 'grid',
                gridTemplateColumns: '280px 1fr',
                gap: '2rem',
                alignItems: 'start'
              }}
              className="review-item-grid"
            >
              <div>
                <div style={{ width: '100%', height: '170px', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#0f172a', marginBottom: '1rem' }}>
                  <img src={rev.image} alt={rev.carName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', color: '#f59e0b' }}>
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star 
                        key={star} 
                        size={16} 
                        fill={star <= Math.round(rev.overallRating) ? '#f59e0b' : 'none'} 
                        color="#f59e0b" 
                      />
                    ))}
                  </div>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>{rev.overallRating} / 5</strong>
                </div>

                {/* Sub-ratings */}
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Fuel Economy:</span>
                    <strong>{rev.fuelEconomyRating || 4.2} / 5</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Comfort & Ride:</span>
                    <strong>{rev.comfortRating || 4.8} / 5</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Performance:</span>
                    <strong>{rev.performanceRating || 4.7} / 5</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Value for Money:</span>
                    <strong>{rev.valueForMoneyRating || 4.5} / 5</strong>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-red)', textTransform: 'uppercase' }}>
                      {rev.category} Review
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)' }}>
                      {rev.carName}
                    </h3>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {rev.reviewDate}
                  </div>
                </div>

                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  "{rev.title}"
                </h4>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                  {rev.reviewText}
                </p>

                {/* Pros and Cons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', background: 'var(--bg-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#10b981', marginBottom: '0.35rem' }}>
                      PROS:
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {Array.isArray(rev.pros) ? rev.pros.map((p, i) => (
                        <li key={i}>{p}</li>
                      )) : <li>{rev.pros}</li>}
                    </ul>
                  </div>

                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--brand-red)', marginBottom: '0.35rem' }}>
                      CONS:
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                      {Array.isArray(rev.cons) ? rev.cons.map((c, i) => (
                        <li key={i}>{c}</li>
                      )) : <li>{rev.cons}</li>}
                    </ul>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span>Reviewed by <strong>{rev.reviewerName}</strong> ({rev.reviewerType})</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#10b981' }}>
                    <ShieldCheck size={16} /> Verified AutoHub Review
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write a Review Modal */}
      {isWriteModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsWriteModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <button className="modal-close-btn" onClick={() => setIsWriteModalOpen(false)}>
              <X size={20} />
            </button>

            <form onSubmit={handleSubmitReview}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Star size={24} color="#f59e0b" fill="#f59e0b" />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800 }}>
                  Write a Vehicle Review
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label className="search-field-label">Vehicle Make & Model</label>
                  <input 
                    type="text" 
                    className="search-input" 
                    style={{ paddingLeft: '0.85rem' }}
                    value={formData.carName}
                    onChange={(e) => setFormData({ ...formData, carName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="search-field-label">Category</label>
                  <select 
                    className="search-select" 
                    style={{ paddingLeft: '0.85rem' }}
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label className="search-field-label">Overall Rating (1 to 5)</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="5" 
                    step="0.5"
                    className="search-input"
                    style={{ paddingLeft: '0.85rem' }}
                    value={formData.overallRating}
                    onChange={(e) => setFormData({ ...formData, overallRating: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="search-field-label">Review Title</label>
                  <input 
                    type="text" 
                    className="search-input"
                    style={{ paddingLeft: '0.85rem' }}
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label className="search-field-label">Detailed Review Text</label>
                <textarea 
                  rows="3"
                  className="search-input"
                  style={{ padding: '0.75rem', resize: 'vertical', width: '100%' }}
                  value={formData.reviewText}
                  onChange={(e) => setFormData({ ...formData, reviewText: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <label className="search-field-label">Pros (comma separated)</label>
                  <input 
                    type="text" 
                    className="search-input"
                    style={{ paddingLeft: '0.85rem' }}
                    value={formData.pros}
                    onChange={(e) => setFormData({ ...formData, pros: e.target.value })}
                  />
                </div>
                <div>
                  <label className="search-field-label">Cons (comma separated)</label>
                  <input 
                    type="text" 
                    className="search-input"
                    style={{ paddingLeft: '0.85rem' }}
                    value={formData.cons}
                    onChange={(e) => setFormData({ ...formData, cons: e.target.value })}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Publish Review
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .review-item-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

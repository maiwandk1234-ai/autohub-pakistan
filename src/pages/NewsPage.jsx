import React, { useState } from 'react';
import { FileText, Calendar, Clock, ChevronRight, X, Share2, MessageCircle } from 'lucide-react';

export default function NewsPage({ news }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Industry & Policy', 'New Launches', 'Buying Guides', 'Market Trends'];

  const filteredNews = news.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <div style={{ background: 'var(--bg-main)', padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
            <FileText size={15} /> AutoHub Newsroom
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)' }}>
            Pakistan Automotive News & Insights
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Stay updated with petrol price announcements, government EV policies, excise biometric guidelines, and new car launches.
          </p>
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Top Story */}
        {filteredNews.length > 0 && (
          <div 
            style={{
              background: '#ffffff',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              marginBottom: '3rem',
              cursor: 'pointer'
            }}
            className="featured-news-item"
            onClick={() => setSelectedArticle(filteredNews[0])}
          >
            <div style={{ height: '340px', background: '#0f172a' }}>
              <img 
                src={filteredNews[0].image} 
                alt={filteredNews[0].headline} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span style={{ background: 'var(--brand-red-light)', color: 'var(--brand-red)', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase' }}>
                  {filteredNews[0].category}
                </span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Calendar size={13} /> {filteredNews[0].publishedDate}
                </span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Clock size={13} /> {filteredNews[0].readTime}
                </span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.65rem', fontWeight: 800, lineHeight: '1.3', marginBottom: '1rem', color: 'var(--primary)' }}>
                {filteredNews[0].headline}
              </h2>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {filteredNews[0].summary}
              </p>

              <div>
                <span className="btn btn-outline-red btn-sm">
                  Read Full Article <ChevronRight size={16} />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="cards-grid">
          {filteredNews.slice(1).map(item => (
            <div 
              key={item.id}
              className="vehicle-card"
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedArticle(item)}
            >
              <div className="card-media-wrapper">
                <img src={item.image} alt={item.headline} className="card-img" />
                <div className="card-badges">
                  <span className="badge-featured" style={{ background: '#0f172a' }}>
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="card-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  <Calendar size={12} />
                  <span>{item.publishedDate}</span>
                  <span>•</span>
                  <Clock size={12} />
                  <span>{item.readTime}</span>
                </div>

                <h3 className="card-title" style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                  {item.headline}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', marginBottom: '1.25rem' }}>
                  {item.summary}
                </p>

                <div className="card-footer" style={{ borderTop: 'none', padding: 0 }}>
                  <span style={{ color: 'var(--brand-red)', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    Read More <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="modal-backdrop" onClick={() => setSelectedArticle(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
            <button className="modal-close-btn" onClick={() => setSelectedArticle(null)}>
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span style={{ background: 'var(--brand-red-light)', color: 'var(--brand-red)', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase' }}>
                {selectedArticle.category}
              </span>
              <span>•</span>
              <span>{selectedArticle.publishedDate}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, lineHeight: '1.3', marginBottom: '1.25rem', color: 'var(--primary)' }}>
              {selectedArticle.headline}
            </h2>

            <div style={{ width: '100%', height: '320px', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#0f172a', marginBottom: '1.5rem' }}>
              <img src={selectedArticle.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ fontSize: '1rem', lineHeight: '1.8', color: 'var(--text-secondary)', whiteSpace: 'pre-line', marginBottom: '2rem' }}>
              {selectedArticle.content || selectedArticle.summary}
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Published by AutoHub Pakistan Editorial Desk
              </span>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }}
              >
                <Share2 size={15} /> Share Article
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .featured-news-item {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

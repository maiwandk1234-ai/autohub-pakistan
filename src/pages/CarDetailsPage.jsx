import React, { useState } from 'react';
import { 
  Heart, 
  Share2, 
  MapPin, 
  Calendar, 
  Gauge, 
  Fuel, 
  Cog, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  X,
  User,
  AlertTriangle,
  Scale
} from 'lucide-react';
import { formatPKR, formatExactPKR, formatMileage, timeAgo } from '../utils/formatters';
import FinanceCalculator from '../components/FinanceCalculator';
import WhatsAppModal from '../components/WhatsAppModal';
import VehicleCard from '../components/VehicleCard';

export default function CarDetailsPage({ 
  car, 
  allCars = [], 
  navigate, 
  isFavorite = false, 
  onToggleFavorite,
  isCompared = false,
  onToggleCompare 
}) {
  if (!car) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>Vehicle Not Found</h2>
        <p style={{ margin: '1rem 0' }}>The car you are looking for may have been sold or removed.</p>
        <button className="btn btn-primary" onClick={() => navigate('used-cars')}>
          Back to Used Cars
        </button>
      </div>
    );
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showPhone, setShowPhone] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const images = (car.images && car.images.length > 0) 
    ? car.images 
    : ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&auto=format&fit=crop&q=80'];

  const similarCars = allCars
    .filter(c => c.id !== car.id && (c.make === car.make || c.bodyType === car.bodyType))
    .slice(0, 3);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div style={{ background: 'var(--bg-main)', padding: '2rem 0 5rem' }}>
      <div className="container">
        {/* Breadcrumb navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
          <button onClick={() => navigate('home')} style={{ color: 'var(--text-secondary)' }}>Home</button>
          <span>/</span>
          <button onClick={() => navigate('used-cars')} style={{ color: 'var(--text-secondary)' }}>Used Cars</button>
          <span>/</span>
          <button onClick={() => navigate('used-cars', { make: car.make })} style={{ color: 'var(--text-secondary)' }}>{car.make}</button>
          <span>/</span>
          <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{car.model}</span>
        </div>

        {/* Title & Action Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.1rem', fontWeight: 800, color: 'var(--primary)', lineHeight: '1.2' }}>
                {car.year} {car.title}
              </h1>
              {car.certified && (
                <span className="badge-certified" style={{ fontSize: '0.8rem', padding: '0.3rem 0.6rem' }}>
                  <ShieldCheck size={14} /> AutoHub Certified
                </span>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={15} color="var(--brand-red)" />
                {car.city} {car.locationArea ? `• ${car.locationArea}` : ''}
              </span>
              <span>•</span>
              <span>Added {timeAgo(car.createdAt)}</span>
              <span>•</span>
              <span>Ad ID: #{car.id.replace('car-', '')}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
            <button 
              className={`btn btn-secondary ${isFavorite ? 'btn-outline-red' : ''}`}
              onClick={() => onToggleFavorite(car)}
            >
              <Heart size={18} fill={isFavorite ? 'var(--brand-red)' : 'none'} color={isFavorite ? 'var(--brand-red)' : 'currentColor'} />
              <span>{isFavorite ? 'Saved' : 'Save Car'}</span>
            </button>

            <button 
              className="btn btn-secondary" 
              onClick={handleShare}
              title="Share listing"
            >
              <Share2 size={18} />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>

            {onToggleCompare && (
              <button 
                className={`btn ${isCompared ? 'btn-dark' : 'btn-secondary'}`}
                onClick={() => onToggleCompare(car.id)}
              >
                <Scale size={18} />
                <span>{isCompared ? 'Comparing' : 'Compare'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Main Grid: Gallery & Details on Left, Seller Card & Finance on Right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '2rem', alignItems: 'start' }}>
          {/* Left Column */}
          <div>
            {/* Image Gallery */}
            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', background: '#0f172a' }}>
                <img 
                  src={images[activeImageIndex]} 
                  alt={car.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />

                {/* Lightbox Trigger */}
                <button 
                  onClick={() => setLightboxOpen(true)}
                  style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '8px', borderRadius: '50%' }}
                  title="Expand Fullscreen"
                >
                  <Maximize2 size={18} />
                </button>

                {/* Navigation arrows if multiple images */}
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={() => setActiveImageIndex((activeImageIndex - 1 + images.length) % images.length)}
                      style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '10px', borderRadius: '50%' }}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={() => setActiveImageIndex((activeImageIndex + 1) % images.length)}
                      style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '10px', borderRadius: '50%' }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Image counter */}
                <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600 }}>
                  {activeImageIndex + 1} / {images.length} Photos
                </div>
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', overflowX: 'auto', background: '#f8fafc' }}>
                  {images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt="" 
                      onClick={() => setActiveImageIndex(idx)}
                      style={{
                        width: '84px',
                        height: '56px',
                        objectFit: 'cover',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                        border: activeImageIndex === idx ? '2.5px solid var(--brand-red)' : '1px solid var(--border-color)',
                        opacity: activeImageIndex === idx ? 1 : 0.65,
                        transition: 'all var(--transition-fast)'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Key Specs Pills Grid */}
            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '1.75rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                Key Vehicle Specifications
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>
                    <Calendar size={13} /> Year
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary)' }}>{car.year}</div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>
                    <Gauge size={13} /> Mileage
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary)' }}>{formatMileage(car.mileage)}</div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>
                    <Fuel size={13} /> Fuel Type
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary)' }}>{car.fuelType}</div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>
                    <Cog size={13} /> Transmission
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary)' }}>{car.transmission}</div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>
                    Engine
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary)' }}>{car.engineCapacity}</div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>
                    Color
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary)' }}>{car.exteriorColor}</div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>
                    Registered In
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary)' }}>{car.registeredCity}</div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '0.85rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>
                    Assembly
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--primary)' }}>{car.assembly}</div>
                </div>
              </div>
            </div>

            {/* 150-Point Certified Inspection Card */}
            {car.inspectionSummary && (
              <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '1.75rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <ShieldCheck size={24} color="#10b981" />
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
                        AutoHub Certified Inspection Report
                      </h3>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Verified by AutoHub Senior Automotive Inspector</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', background: '#0f172a', color: '#ffffff', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-full)' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#38bdf8' }}>{car.inspectionSummary.overall}</span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>/ 10 Rating</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Engine & Transmission</span>
                      <strong style={{ color: '#10b981' }}>{car.inspectionSummary.engine}/10</strong>
                    </div>
                    <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${car.inspectionSummary.engine * 10}%`, background: '#10b981', height: '100%' }} />
                    </div>
                  </div>

                  <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Suspension & Steering</span>
                      <strong style={{ color: '#10b981' }}>{car.inspectionSummary.suspension}/10</strong>
                    </div>
                    <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${car.inspectionSummary.suspension * 10}%`, background: '#10b981', height: '100%' }} />
                    </div>
                  </div>

                  <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Body Frame & Paint</span>
                      <strong style={{ color: '#0284c7' }}>{car.inspectionSummary.body}/10</strong>
                    </div>
                    <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${car.inspectionSummary.body * 10}%`, background: '#0284c7', height: '100%' }} />
                    </div>
                  </div>

                  <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Interior & Electronics</span>
                      <strong style={{ color: '#10b981' }}>{car.inspectionSummary.interior}/10</strong>
                    </div>
                    <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${car.inspectionSummary.interior * 10}%`, background: '#10b981', height: '100%' }} />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#059669', background: '#ecfdf5', padding: '0.65rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                  <CheckCircle2 size={16} />
                  <span>Non-accidental certified. Genuine seal intact on all pillars and apron. Original file verified.</span>
                </div>
              </div>
            )}

            {/* Features Checklist */}
            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '1.75rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem' }}>
                Features & Equipment
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.85rem' }}>
                {(car.features || []).map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} color="var(--brand-red)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Seller Description */}
            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '1.75rem', marginBottom: '2rem', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
                Seller's Comments
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
                {car.description}
              </p>
            </div>

            {/* Embedded Finance Calculator */}
            <FinanceCalculator initialPrice={car.price} />
          </div>

          {/* Right Column: Price & Contact Sticky Card */}
          <div style={{ position: 'sticky', top: '90px' }}>
            <div style={{ background: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', padding: '1.75rem', boxShadow: 'var(--shadow-lg)', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
                Demand Price
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--brand-red)', marginBottom: '0.25rem' }}>
                {formatPKR(car.price)}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Exact: <strong>{formatExactPKR(car.price)}</strong> • Slightly negotiable
              </div>

              {/* Contact buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                {showPhone ? (
                  <a 
                    href={`tel:${car.seller?.phone || '03008452199'}`}
                    className="btn btn-emerald btn-lg"
                    style={{ textDecoration: 'none' }}
                  >
                    <Phone size={18} /> Call: {car.seller?.phone || '0300-8452199'}
                  </a>
                ) : (
                  <button 
                    className="btn btn-dark btn-lg"
                    onClick={() => setShowPhone(true)}
                  >
                    <Phone size={18} /> Show Phone Number
                  </button>
                )}

                <button 
                  className="btn btn-emerald btn-lg"
                  style={{ background: '#25D366' }}
                  onClick={() => setIsWhatsAppOpen(true)}
                >
                  <MessageSquare size={18} /> Chat on WhatsApp
                </button>
              </div>

              {/* Seller Profile */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <User size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '1rem' }}>{car.seller?.name || 'Verified Private Seller'}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Member on AutoHub since {car.seller?.memberSince || '2022'}
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Location: <strong>{car.city} ({car.locationArea || 'City Center'})</strong>
                </div>
              </div>
            </div>

            {/* Buyer Safety Tips */}
            <div style={{ background: '#fffbeb', border: '1px solid #fef3c7', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#b45309', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <AlertTriangle size={18} /> Safety Guidelines for Buyers
              </div>
              <ul style={{ paddingLeft: '1.2rem', fontSize: '0.8rem', color: '#92400e', lineHeight: '1.6' }}>
                <li>Never transfer advance money before physical inspection.</li>
                <li>Meet the seller in a safe, public location.</li>
                <li>Verify original registration book, smart card, and biometric before finalizing payment.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Similar Vehicles Carousel / Grid */}
        {similarCars.length > 0 && (
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              Similar Vehicles You May Like
            </h3>
            <div className="cards-grid">
              {similarCars.map((simCar) => (
                <VehicleCard
                  key={simCar.id}
                  car={simCar}
                  onViewDetails={(id) => {
                    navigate('car-details', { id });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  isFavorite={isFavorite}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal 
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        vehicle={car}
        seller={car.seller}
      />

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="modal-backdrop" onClick={() => setLightboxOpen(false)}>
          <div style={{ position: 'relative', maxWidth: '1000px', width: '95%' }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setLightboxOpen(false)}
              style={{ position: 'absolute', top: '-40px', right: 0, color: 'white' }}
            >
              <X size={28} />
            </button>
            <img 
              src={images[activeImageIndex]} 
              alt={car.title} 
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', borderRadius: '8px' }}
            />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .container > div[style*="grid-template-columns: 1.7fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

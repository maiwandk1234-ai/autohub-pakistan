import React, { useState } from 'react';
import { 
  Car, 
  Upload, 
  CheckCircle, 
  MapPin, 
  Sparkles, 
  Image as ImageIcon, 
  Trash2, 
  ShieldCheck, 
  Plus 
} from 'lucide-react';
import { PAKISTANI_CITIES } from '../data/pakistaniLocations';
import { formatPKR, formatExactPKR } from '../utils/formatters';

const SAMPLE_PHOTO_PRESETS = [
  'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80'
];

export default function SellCarPage({ onCarCreated, navigate, currentUser }) {
  const [formData, setFormData] = useState({
    make: 'Toyota',
    model: 'Corolla Altis',
    variant: '1.6 Automatic Dual VVT-i',
    year: 2022,
    city: 'Lahore',
    locationArea: 'DHA Phase 5',
    registeredCity: 'Lahore',
    price: 5400000,
    mileage: 32000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineCapacity: '1600 cc',
    bodyType: 'Sedan',
    exteriorColor: 'Super White',
    assembly: 'Local',
    condition: '9.5/10',
    description: 'First owner car, totally genuine bumper to bumper. Driven with extreme care in DHA. Original book and file with all token taxes paid. Genuine low mileage, company maintained. Serious buyers contact on phone or WhatsApp.',
    sellerName: currentUser?.name || 'Muhammad Usman',
    sellerPhone: currentUser?.phone || '0300-8452199',
    sellerWhatsapp: '923008452199',
    images: [SAMPLE_PHOTO_PRESETS[0], SAMPLE_PHOTO_PRESETS[1]]
  });

  const [customImageUrl, setCustomImageUrl] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [newCarId, setNewCarId] = useState(null);

  const handleAddSampleImage = (url) => {
    if (!formData.images.includes(url)) {
      setFormData({
        ...formData,
        images: [...formData.images, url]
      });
    }
  };

  const handleAddCustomImage = (e) => {
    e.preventDefault();
    if (customImageUrl.trim()) {
      setFormData({
        ...formData,
        images: [...formData.images, customImageUrl.trim()]
      });
      setCustomImageUrl('');
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, idx) => idx !== indexToRemove)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCar = {
      title: `${formData.make} ${formData.model}`,
      make: formData.make,
      model: formData.model,
      variant: formData.variant,
      year: Number(formData.year),
      price: Number(formData.price),
      mileage: Number(formData.mileage),
      city: formData.city,
      locationArea: formData.locationArea,
      registeredCity: formData.registeredCity,
      fuelType: formData.fuelType,
      transmission: formData.transmission,
      engineCapacity: formData.engineCapacity,
      bodyType: formData.bodyType,
      exteriorColor: formData.exteriorColor,
      assembly: formData.assembly,
      condition: formData.condition,
      images: formData.images.length > 0 ? formData.images : [SAMPLE_PHOTO_PRESETS[0]],
      description: formData.description,
      features: [
        'Air Conditioning',
        'Power Windows',
        'ABS Brakes',
        'Alloy Wheels',
        'Infotainment Screen',
        'Keyless Entry',
        'Reverse Camera'
      ],
      seller: {
        name: formData.sellerName,
        phone: formData.sellerPhone,
        whatsapp: formData.sellerWhatsapp || formData.sellerPhone.replace(/[^0-9]/g, ''),
        city: formData.city,
        memberSince: 'October 2026',
        verified: true
      },
      featured: false,
      certified: true,
      inspectionScore: 9.3,
      inspectionSummary: {
        overall: 9.3,
        engine: 9.5,
        suspension: 9.2,
        body: 9.1,
        interior: 9.4
      }
    };

    const created = onCarCreated(newCar);
    setNewCarId(created.id);
    setSubmittedSuccess(true);
  };

  if (submittedSuccess) {
    return (
      <div className="container" style={{ padding: '5rem 0', maxWidth: '640px', textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#ecfdf5', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <CheckCircle size={48} />
        </div>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>
          Ad Published Successfully!
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Mubarak! Your <strong>{formData.year} {formData.make} {formData.model}</strong> ad has been posted on AutoHub Pakistan. Buyers in {formData.city} can now find and contact you directly via call or WhatsApp.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            className="btn btn-primary btn-lg"
            onClick={() => navigate('car-details', { id: newCarId })}
          >
            View My Ad
          </button>
          <button 
            className="btn btn-secondary btn-lg"
            onClick={() => navigate('used-cars')}
          >
            Browse Used Cars
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-main)', padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'var(--brand-red-light)', color: 'var(--brand-red)', padding: '0.35rem 0.9rem', borderRadius: 'var(--radius-full)', fontWeight: 700, fontSize: '0.825rem', marginBottom: '0.75rem' }}>
            <Sparkles size={14} /> Free Pakistani Vehicle Listing
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800 }}>
            Sell Your Car on AutoHub Pakistan
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            Reach millions of authentic car buyers in Karachi, Lahore, Islamabad, and all 4 provinces.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
          {/* Main Form */}
          <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
            <form onSubmit={handleSubmit}>
              {/* Section 1: Vehicle Information */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                  1. Vehicle Information
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label className="search-field-label">Make / Brand *</label>
                    <select 
                      className="search-select" 
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.make}
                      onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                      required
                    >
                      <option value="Toyota">Toyota</option>
                      <option value="Honda">Honda</option>
                      <option value="Suzuki">Suzuki</option>
                      <option value="KIA">KIA</option>
                      <option value="Hyundai">Hyundai</option>
                      <option value="Haval">Haval</option>
                      <option value="Changan">Changan</option>
                      <option value="MG">MG</option>
                      <option value="Daihatsu">Daihatsu</option>
                      <option value="Nissan">Nissan</option>
                    </select>
                  </div>

                  <div>
                    <label className="search-field-label">Model *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Corolla, Civic, Alto, Swift..."
                      className="search-input"
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label className="search-field-label">Year of Manufacture *</label>
                    <input 
                      type="number" 
                      min="1990" 
                      max="2026"
                      className="search-input"
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="search-field-label">Variant / Package</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Altis Grande 1.8, RS Turbo, VXR..."
                      className="search-input"
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.variant}
                      onChange={(e) => setFormData({ ...formData, variant: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label className="search-field-label">Car Location (City) *</label>
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

                  <div>
                    <label className="search-field-label">Registered City / Province</label>
                    <select 
                      className="search-select" 
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.registeredCity}
                      onChange={(e) => setFormData({ ...formData, registeredCity: e.target.value })}
                    >
                      <option value="Islamabad">Islamabad</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Sindh">Sindh</option>
                      <option value="KPK">KPK</option>
                      <option value="Un-registered">Un-registered</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label className="search-field-label">Exterior Color</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Super White, Metallic Gray..."
                      className="search-input"
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.exteriorColor}
                      onChange={(e) => setFormData({ ...formData, exteriorColor: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="search-field-label">Assembly</label>
                    <select 
                      className="search-select" 
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.assembly}
                      onChange={(e) => setFormData({ ...formData, assembly: e.target.value })}
                    >
                      <option value="Local">Local Assembly (Pakistani)</option>
                      <option value="Imported">Imported (JDM / CBU)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Specs & Details */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                  2. Technical Specs & Mileage
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label className="search-field-label">Mileage (km) *</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 35000"
                      className="search-input"
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.mileage}
                      onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="search-field-label">Engine Capacity</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 1800 cc, 660 cc, 1500 cc..."
                      className="search-input"
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.engineCapacity}
                      onChange={(e) => setFormData({ ...formData, engineCapacity: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label className="search-field-label">Transmission</label>
                    <select 
                      className="search-select" 
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.transmission}
                      onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
                    >
                      <option value="Automatic">Automatic (CVT / AT / DCT)</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>

                  <div>
                    <label className="search-field-label">Fuel Type</label>
                    <select 
                      className="search-select" 
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.fuelType}
                      onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}
                    >
                      <option value="Petrol">Petrol</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 3: Photos Upload UI */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                  3. Vehicle Photos
                </h3>

                <div style={{ border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem', textAlign: 'center', background: 'var(--bg-subtle)', marginBottom: '1rem' }}>
                  <Upload size={32} color="var(--brand-red)" style={{ margin: '0 auto 0.5rem' }} />
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                    Upload High Quality Photos
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Add photos of exterior front, back, interior dashboard, and engine room.
                  </p>

                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {SAMPLE_PHOTO_PRESETS.map((sample, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleAddSampleImage(sample)}
                      >
                        <Plus size={14} /> Add Photo #{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom URL input */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <input 
                    type="url"
                    placeholder="Or enter image URL (https://...)"
                    className="search-input"
                    style={{ paddingLeft: '0.85rem' }}
                    value={customImageUrl}
                    onChange={(e) => setCustomImageUrl(e.target.value)}
                  />
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    onClick={handleAddCustomImage}
                  >
                    Add URL
                  </button>
                </div>

                {/* Selected Images List */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {formData.images.map((img, idx) => (
                    <div key={idx} style={{ position: 'relative', width: '90px', height: '60px', borderRadius: '6px', overflow: 'hidden', border: idx === 0 ? '2px solid var(--brand-red)' : '1px solid var(--border-color)' }}>
                      <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      {idx === 0 && (
                        <span style={{ position: 'absolute', top: 2, left: 2, background: 'var(--brand-red)', color: 'white', fontSize: '0.6rem', padding: '1px 3px', borderRadius: '2px', fontWeight: 700 }}>
                          Cover
                        </span>
                      )}
                      <button 
                        type="button" 
                        onClick={() => handleRemoveImage(idx)}
                        style={{ position: 'absolute', top: 2, right: 2, background: 'rgba(0,0,0,0.6)', color: 'white', padding: '2px', borderRadius: '50%' }}
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Pricing & Description */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                  4. Price & Description
                </h3>

                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                    <label className="search-field-label">Demand Price (PKR) *</label>
                    <span style={{ fontWeight: 800, color: 'var(--brand-red)', fontSize: '1.1rem' }}>
                      {formatPKR(formData.price)}
                    </span>
                  </div>
                  <input 
                    type="number" 
                    min="100000" 
                    step="50000"
                    placeholder="e.g. 4500000"
                    className="search-input"
                    style={{ paddingLeft: '0.85rem' }}
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    required
                  />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    PKR {Number(formData.price).toLocaleString('en-PK')}
                  </span>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label className="search-field-label">Detailed Ad Description *</label>
                  <textarea 
                    rows="4"
                    className="search-input"
                    style={{ padding: '0.75rem', resize: 'vertical', width: '100%' }}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Section 5: Seller Contact */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                  5. Seller Contact Details
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label className="search-field-label">Seller Name *</label>
                    <input 
                      type="text" 
                      className="search-input"
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.sellerName}
                      onChange={(e) => setFormData({ ...formData, sellerName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="search-field-label">Mobile Number *</label>
                    <input 
                      type="tel" 
                      className="search-input"
                      style={{ paddingLeft: '0.85rem' }}
                      value={formData.sellerPhone}
                      onChange={(e) => setFormData({ ...formData, sellerPhone: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', fontSize: '1.15rem' }}>
                <Car size={20} /> Publish Advertisement on AutoHub
              </button>
            </form>
          </div>

          {/* Right Column: Live Ad Preview */}
          <div style={{ position: 'sticky', top: '90px' }}>
            <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontWeight: 700, fontSize: '0.85rem', marginBottom: '1rem' }}>
                <ShieldCheck size={16} /> Live Ad Preview (How buyers see it)
              </div>

              <div style={{ width: '100%', aspectRatio: '16 / 10', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#0f172a', marginBottom: '1rem' }}>
                <img 
                  src={formData.images[0] || SAMPLE_PHOTO_PRESETS[0]} 
                  alt="Preview" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                {formData.year} {formData.make} {formData.model}
              </h4>

              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--brand-red)', marginBottom: '0.75rem' }}>
                {formatPKR(formData.price)}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.75rem' }}>
                <MapPin size={14} color="var(--brand-red)" />
                <span>{formData.city}</span>
                {formData.registeredCity && <span>• Reg. {formData.registeredCity}</span>}
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <span>Seller: {formData.sellerName} • {formData.sellerPhone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .container > div[style*="grid-template-columns: 1.4fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

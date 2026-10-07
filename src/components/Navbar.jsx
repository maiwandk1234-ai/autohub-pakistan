import React, { useState } from 'react';
import { 
  Car, 
  Bike, 
  Wrench, 
  Scale, 
  Star, 
  FileText, 
  PlusCircle, 
  Heart, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  PhoneCall, 
  ShieldCheck, 
  MapPin, 
  LogOut 
} from 'lucide-react';

export default function Navbar({ 
  currentPage, 
  navigate, 
  favoritesCount = 0, 
  cartCount = 0, 
  comparisonCount = 0,
  currentUser, 
  onOpenAuth, 
  onLogout,
  onOpenCart 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'used-cars', label: 'Used Cars' },
    { id: 'new-cars', label: 'New Cars' },
    { id: 'bikes', label: 'Bikes' },
    { id: 'auto-parts', label: 'Auto Parts' },
    { id: 'compare', label: 'Compare', badge: comparisonCount > 0 ? comparisonCount : null },
    { id: 'reviews', label: 'Reviews' },
    { id: 'news', label: 'News' }
  ];

  const handleNavClick = (pageId) => {
    navigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header>
      {/* Top utility bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-links">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#10b981', fontWeight: 600 }}>
              <ShieldCheck size={14} /> 100% Verified Pakistani Vehicles
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <PhoneCall size={14} /> 24/7 Helpline: 042-111-AUTOHUB (288-648)
            </span>
          </div>
          <div className="top-bar-links">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={13} /> Pakistan Edition (PKR)
            </span>
            {currentUser?.isLoggedIn ? (
              <span style={{ color: '#e2e8f0', fontWeight: 600 }}>
                Salam, {currentUser.name}
              </span>
            ) : (
              <button 
                onClick={onOpenAuth} 
                style={{ color: '#ffffff', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                <User size={13} /> Sign In / Register
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="navbar">
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <div 
            className="brand-logo" 
            onClick={() => handleNavClick('home')} 
            style={{ cursor: 'pointer' }}
          >
            <div className="brand-logo-icon">
              <Car size={24} strokeWidth={2.5} />
            </div>
            <div>
              <div className="brand-logo-text">
                AUTOHUB<span>.PK</span>
              </div>
              <span className="brand-tagline">Pakistan Automotive Marketplace</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <button
                  className={`nav-link ${currentPage === link.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                  {link.badge && (
                    <span style={{
                      background: 'var(--brand-red)',
                      color: 'white',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      padding: '0.1rem 0.4rem',
                      borderRadius: '9999px',
                      marginLeft: '0.2rem'
                    }}>
                      {link.badge}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Nav Actions */}
          <div className="nav-actions">
            {/* Favorites Icon */}
            <button 
              className="btn-icon-only" 
              title="Saved Vehicles" 
              onClick={() => handleNavClick('favorites')}
            >
              <Heart size={20} color={favoritesCount > 0 ? 'var(--brand-red)' : 'currentColor'} fill={favoritesCount > 0 ? 'var(--brand-red)' : 'none'} />
              {favoritesCount > 0 && <span className="badge-counter">{favoritesCount}</span>}
            </button>

            {/* Cart Icon */}
            <button 
              className="btn-icon-only" 
              title="Auto Parts Cart" 
              onClick={onOpenCart}
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="badge-counter">{cartCount}</span>}
            </button>

            {/* User Profile / Auth */}
            {currentUser?.isLoggedIn ? (
              <div style={{ position: 'relative' }}>
                <button 
                  className="btn btn-secondary btn-sm" 
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <User size={16} />
                  <span>{currentUser.name.split(' ')[0]}</span>
                </button>

                {userDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '110%',
                    background: '#ffffff',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-lg)',
                    minWidth: '180px',
                    padding: '0.5rem 0',
                    zIndex: 100
                  }}>
                    <div style={{ padding: '0.5rem 1rem', borderBottom: '1px solid var(--border-color)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Signed in as <strong>{currentUser.email || currentUser.phone}</strong>
                    </div>
                    <button 
                      onClick={() => { navigate('sell-your-car'); setUserDropdownOpen(false); }}
                      style={{ width: '100%', textAlign: 'left', padding: '0.5rem 1rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <PlusCircle size={15} /> Post New Ad
                    </button>
                    <button 
                      onClick={() => { navigate('favorites'); setUserDropdownOpen(false); }}
                      style={{ width: '100%', textAlign: 'left', padding: '0.5rem 1rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                      <Heart size={15} /> My Saved Vehicles
                    </button>
                    <button 
                      onClick={() => { onLogout(); setUserDropdownOpen(false); }}
                      style={{ width: '100%', textAlign: 'left', padding: '0.5rem 1rem', fontSize: '0.875rem', color: 'var(--brand-red)', display: 'flex', alignItems: 'center', gap: '0.5rem', borderTop: '1px solid var(--border-color)' }}
                    >
                      <LogOut size={15} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button className="btn btn-secondary btn-sm" onClick={onOpenAuth}>
                <User size={16} />
                <span>Sign In</span>
              </button>
            )}

            {/* Post an Ad CTA */}
            <button 
              className="btn btn-primary" 
              onClick={() => handleNavClick('sell-your-car')}
              style={{ fontWeight: 700 }}
            >
              <PlusCircle size={18} />
              <span>Post an Ad</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button 
              className="btn-icon-only" 
              style={{ display: 'none' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: '#ffffff',
            borderTop: '1px solid var(--border-color)',
            padding: '1rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: currentPage === link.id ? 'var(--brand-red-light)' : 'transparent',
                  color: currentPage === link.id ? 'var(--brand-red)' : 'var(--text-primary)'
                }}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span style={{ background: 'var(--brand-red)', color: 'white', padding: '0.1rem 0.5rem', borderRadius: '9999px', fontSize: '0.75rem' }}>
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
            <button 
              className="btn btn-primary" 
              style={{ marginTop: '0.5rem', width: '100%' }}
              onClick={() => handleNavClick('sell-your-car')}
            >
              <PlusCircle size={18} /> Post an Ad
            </button>
          </div>
        )}
      </nav>
      
      <style>{`
        @media (max-width: 900px) {
          #mobile-menu-toggle {
            display: flex !important;
          }
          .nav-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import CartModal from './components/CartModal';

// Pages
import HomePage from './pages/HomePage';
import UsedCarsPage from './pages/UsedCarsPage';
import CarDetailsPage from './pages/CarDetailsPage';
import SellCarPage from './pages/SellCarPage';
import NewCarsPage from './pages/NewCarsPage';
import BikesPage from './pages/BikesPage';
import AutoPartsPage from './pages/AutoPartsPage';
import ComparePage from './pages/ComparePage';
import ReviewsPage from './pages/ReviewsPage';
import NewsPage from './pages/NewsPage';
import FavoritesPage from './pages/FavoritesPage';

// Services & Data
import { StorageService } from './services/storageService';
import { INITIAL_NEWS } from './data/mockNews';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParams, setPageParams] = useState({});

  // Core Data loaded through StorageService (persisted in localStorage)
  const [cars, setCars] = useState(() => StorageService.getCars());
  const [bikes, setBikes] = useState(() => StorageService.getBikes());
  const [parts, setParts] = useState(() => StorageService.getParts());
  const [reviews, setReviews] = useState(() => StorageService.getReviews());
  const [news] = useState(INITIAL_NEWS);
  const [favorites, setFavorites] = useState(() => StorageService.getFavorites());
  const [cart, setCart] = useState(() => StorageService.getCart());
  const [comparison, setComparison] = useState(() => StorageService.getComparison());
  const [currentUser, setCurrentUser] = useState(() => StorageService.getUser());

  // Modals
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on page change
  const navigate = (page, params = {}) => {
    setCurrentPage(page);
    setPageParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Favorites
  const handleToggleFavorite = (item) => {
    const updated = StorageService.toggleFavorite(item);
    setFavorites(updated);
  };

  // Compare
  const handleToggleCompare = (carId) => {
    const updated = StorageService.toggleComparison(carId);
    setComparison(updated);
  };

  // Cart
  const handleAddToCart = (part, qty = 1) => {
    const updated = StorageService.addToCart(part, qty);
    setCart(updated);
  };

  const handleUpdateCartQty = (partId, delta) => {
    const updated = StorageService.updateCartQuantity(partId, delta);
    setCart(updated);
  };

  const handleRemoveFromCart = (partId) => {
    const updated = StorageService.removeFromCart(partId);
    setCart(updated);
  };

  const handleClearCart = () => {
    const updated = StorageService.clearCart();
    setCart(updated);
  };

  // Sell Car
  const handleCarCreated = (newCarData) => {
    const created = StorageService.addCar(newCarData);
    setCars(StorageService.getCars());
    return created;
  };

  // Reviews
  const handleAddReview = (reviewData) => {
    const created = StorageService.addReview(reviewData);
    setReviews(StorageService.getReviews());
    return created;
  };

  // Auth
  const handleLoginSuccess = (userData) => {
    const user = StorageService.setUser(userData);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    StorageService.logoutUser();
    setCurrentUser({ isLoggedIn: false, name: '', phone: '', email: '', city: '' });
  };

  // Active Car for Details Page
  const activeCar = pageParams.id ? cars.find(c => String(c.id) === String(pageParams.id)) : cars[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar 
        currentPage={currentPage}
        navigate={navigate}
        favoritesCount={favorites.length}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        comparisonCount={comparison.length}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <HomePage 
            cars={cars}
            bikes={bikes}
            parts={parts}
            reviews={reviews}
            news={news}
            navigate={navigate}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            comparison={comparison}
            onToggleCompare={handleToggleCompare}
            onAddToCart={handleAddToCart}
            onOpenPartDetails={() => navigate('auto-parts')}
          />
        )}

        {currentPage === 'used-cars' && (
          <UsedCarsPage 
            cars={cars}
            navigate={navigate}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            comparison={comparison}
            onToggleCompare={handleToggleCompare}
            initialFilters={pageParams}
          />
        )}

        {currentPage === 'car-details' && (
          <CarDetailsPage 
            car={activeCar}
            allCars={cars}
            navigate={navigate}
            isFavorite={favorites.some(f => f.id === activeCar?.id)}
            onToggleFavorite={handleToggleFavorite}
            isCompared={comparison.includes(activeCar?.id)}
            onToggleCompare={handleToggleCompare}
          />
        )}

        {currentPage === 'sell-your-car' && (
          <SellCarPage 
            onCarCreated={handleCarCreated}
            navigate={navigate}
            currentUser={currentUser}
          />
        )}

        {currentPage === 'new-cars' && (
          <NewCarsPage 
            navigate={navigate}
          />
        )}

        {currentPage === 'bikes' && (
          <BikesPage 
            bikes={bikes}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            initialBikeId={pageParams.selectedId}
          />
        )}

        {currentPage === 'auto-parts' && (
          <AutoPartsPage 
            parts={parts}
            onAddToCart={handleAddToCart}
            onOpenCart={() => setIsCartOpen(true)}
          />
        )}

        {currentPage === 'compare' && (
          <ComparePage 
            cars={cars}
            navigate={navigate}
            initialCarA={pageParams.carA || comparison[0] || 'car-2'}
            initialCarB={pageParams.carB || comparison[1] || 'car-1'}
          />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage 
            reviews={reviews}
            onAddReview={handleAddReview}
          />
        )}

        {currentPage === 'news' && (
          <NewsPage 
            news={news}
          />
        )}

        {currentPage === 'favorites' && (
          <FavoritesPage 
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            navigate={navigate}
          />
        )}
      </main>

      <Footer navigate={navigate} />

      {/* Global Modals */}
      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQty}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

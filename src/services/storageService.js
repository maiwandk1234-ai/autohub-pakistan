// AutoHub Pakistan - LocalStorage & Application State Service
import { INITIAL_CARS } from '../data/mockCars';
import { INITIAL_BIKES } from '../data/mockBikes';
import { INITIAL_PARTS } from '../data/mockParts';
import { INITIAL_REVIEWS } from '../data/mockReviews';

const STORAGE_KEYS = {
  CARS: 'autohub_cars_v1',
  BIKES: 'autohub_bikes_v1',
  PARTS: 'autohub_parts_v1',
  REVIEWS: 'autohub_reviews_v1',
  FAVORITES: 'autohub_favorites_v1',
  CART: 'autohub_cart_v1',
  USER: 'autohub_user_v1',
  COMPARISON: 'autohub_comparison_v1'
};

// Safe localStorage helper
function getStoredItem(key, defaultValue) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (err) {
    console.error('Error reading from localStorage', err);
    return defaultValue;
  }
}

function setStoredItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error('Error writing to localStorage', err);
  }
}

export const StorageService = {
  // Cars
  getCars() {
    const stored = getStoredItem(STORAGE_KEYS.CARS, null);
    if (!stored || !Array.isArray(stored) || stored.length === 0) {
      setStoredItem(STORAGE_KEYS.CARS, INITIAL_CARS);
      return INITIAL_CARS;
    }
    return stored;
  },

  addCar(carData) {
    const cars = this.getCars();
    const newCar = {
      ...carData,
      id: `car-${Date.now()}`,
      createdAt: new Date().toISOString(),
      featured: false,
      certified: true,
      inspectionScore: carData.inspectionScore || 9.0,
      inspectionSummary: {
        overall: 9.0,
        engine: 9.2,
        suspension: 9.0,
        body: 8.9,
        interior: 9.1
      }
    };
    const updated = [newCar, ...cars];
    setStoredItem(STORAGE_KEYS.CARS, updated);
    return newCar;
  },

  getCarById(id) {
    const cars = this.getCars();
    return cars.find(c => String(c.id) === String(id));
  },

  // Bikes
  getBikes() {
    const stored = getStoredItem(STORAGE_KEYS.BIKES, null);
    if (!stored || !Array.isArray(stored) || stored.length === 0) {
      setStoredItem(STORAGE_KEYS.BIKES, INITIAL_BIKES);
      return INITIAL_BIKES;
    }
    return stored;
  },

  getBikeById(id) {
    const bikes = this.getBikes();
    return bikes.find(b => String(b.id) === String(id));
  },

  // Parts
  getParts() {
    const stored = getStoredItem(STORAGE_KEYS.PARTS, null);
    if (!stored || !Array.isArray(stored) || stored.length === 0) {
      setStoredItem(STORAGE_KEYS.PARTS, INITIAL_PARTS);
      return INITIAL_PARTS;
    }
    return stored;
  },

  // Reviews
  getReviews() {
    const stored = getStoredItem(STORAGE_KEYS.REVIEWS, null);
    if (!stored || !Array.isArray(stored) || stored.length === 0) {
      setStoredItem(STORAGE_KEYS.REVIEWS, INITIAL_REVIEWS);
      return INITIAL_REVIEWS;
    }
    return stored;
  },

  addReview(reviewData) {
    const reviews = this.getReviews();
    const newReview = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      reviewDate: 'Just now'
    };
    const updated = [newReview, ...reviews];
    setStoredItem(STORAGE_KEYS.REVIEWS, updated);
    return newReview;
  },

  // Favorites
  getFavorites() {
    return getStoredItem(STORAGE_KEYS.FAVORITES, []);
  },

  isFavorite(id) {
    const favs = this.getFavorites();
    return favs.some(item => String(item.id) === String(id));
  },

  toggleFavorite(item) {
    const favs = this.getFavorites();
    const exists = favs.find(f => String(f.id) === String(item.id));
    let updated;
    if (exists) {
      updated = favs.filter(f => String(f.id) !== String(item.id));
    } else {
      updated = [item, ...favs];
    }
    setStoredItem(STORAGE_KEYS.FAVORITES, updated);
    return updated;
  },

  // Cart for Auto Parts
  getCart() {
    return getStoredItem(STORAGE_KEYS.CART, []);
  },

  addToCart(part, quantity = 1) {
    const cart = this.getCart();
    const existingIndex = cart.findIndex(item => item.id === part.id);
    let updated;
    if (existingIndex > -1) {
      updated = [...cart];
      updated[existingIndex].quantity += quantity;
    } else {
      updated = [...cart, { ...part, quantity }];
    }
    setStoredItem(STORAGE_KEYS.CART, updated);
    return updated;
  },

  removeFromCart(partId) {
    const cart = this.getCart();
    const updated = cart.filter(item => item.id !== partId);
    setStoredItem(STORAGE_KEYS.CART, updated);
    return updated;
  },

  updateCartQuantity(partId, delta) {
    const cart = this.getCart();
    const updated = cart.map(item => {
      if (item.id === partId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setStoredItem(STORAGE_KEYS.CART, updated);
    return updated;
  },

  clearCart() {
    setStoredItem(STORAGE_KEYS.CART, []);
    return [];
  },

  // Comparison
  getComparison() {
    return getStoredItem(STORAGE_KEYS.COMPARISON, ['car-2', 'car-1']); // Preload Civic vs Corolla
  },

  toggleComparison(carId) {
    let list = this.getComparison();
    if (list.includes(carId)) {
      list = list.filter(id => id !== carId);
    } else {
      if (list.length >= 3) {
        list = [list[1], list[2], carId]; // Keep max 3
      } else {
        list = [...list, carId];
      }
    }
    setStoredItem(STORAGE_KEYS.COMPARISON, list);
    return list;
  },

  setComparison(carIds) {
    setStoredItem(STORAGE_KEYS.COMPARISON, carIds);
    return carIds;
  },

  // Auth User session
  getUser() {
    return getStoredItem(STORAGE_KEYS.USER, {
      isLoggedIn: true,
      name: 'Hamza Farooq',
      email: 'hamza.farooq@autohub.pk',
      phone: '0300-9876543',
      city: 'Lahore'
    });
  },

  setUser(userData) {
    setStoredItem(STORAGE_KEYS.USER, userData);
    return userData;
  },

  logoutUser() {
    setStoredItem(STORAGE_KEYS.USER, {
      isLoggedIn: false,
      name: '',
      email: '',
      phone: '',
      city: ''
    });
  }
};

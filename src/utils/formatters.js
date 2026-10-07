// AutoHub Pakistan - Utility Formatters

/**
 * Format price into Pakistani currency convention (Lacs & Crores or Thousands)
 * @param {number} priceInPKR 
 * @returns {string} e.g. "Rs 45.5 Lacs", "Rs 1.85 Crore", "Rs 85,000"
 */
export function formatPKR(priceInPKR) {
  if (!priceInPKR && priceInPKR !== 0) return 'Price on Call';
  const num = Number(priceInPKR);
  if (isNaN(num)) return 'Price on Call';

  if (num >= 10000000) {
    const crore = (num / 10000000).toFixed(2);
    // remove trailing zero if .00
    const cleanCrore = crore.replace(/\.00$/, '').replace(/(\.[1-9])0$/, '$1');
    return `PKR ${cleanCrore} Crore`;
  } else if (num >= 100000) {
    const lac = (num / 100000).toFixed(2);
    const cleanLac = lac.replace(/\.00$/, '').replace(/(\.[1-9])0$/, '$1');
    return `PKR ${cleanLac} Lacs`;
  } else {
    return `PKR ${num.toLocaleString('en-PK')}`;
  }
}

/**
 * Format full exact PKR price
 */
export function formatExactPKR(priceInPKR) {
  if (!priceInPKR && priceInPKR !== 0) return 'PKR 0';
  return `PKR ${Number(priceInPKR).toLocaleString('en-PK')}`;
}

/**
 * Format mileage with km
 */
export function formatMileage(km) {
  if (!km && km !== 0) return '0 km';
  return `${Number(km).toLocaleString('en-PK')} km`;
}

/**
 * Format relative time
 */
export function timeAgo(timestamp) {
  if (!timestamp) return 'Recently';
  const now = new Date();
  const date = new Date(timestamp);
  const diffInSecs = Math.floor((now - date) / 1000);

  if (diffInSecs < 60) return 'Just now';
  const diffInMins = Math.floor(diffInSecs / 60);
  if (diffInMins < 60) return `${diffInMins}m ago`;
  const diffInHours = Math.floor(diffInMins / 60);
  if (diffInHours < 24) return `${diffInHours}h ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays}d ago`;
  const diffInMonths = Math.floor(diffInDays / 30);
  return `${diffInMonths}mo ago`;
}

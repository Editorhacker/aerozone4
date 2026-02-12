// Simple in-memory cache (CommonJS)

const cacheStore = {};
const DEFAULT_TTL = 24 * 60 * 60 * 1000; // 24 hours

function getCache(key) {
  const item = cacheStore[key];

  if (!item) return null;

  // expired
  if (Date.now() > item.expiry) {
    delete cacheStore[key];
    return null;
  }

  return item.data;
}

function setCache(key, data, ttl = DEFAULT_TTL) {
  cacheStore[key] = {
    data,
    expiry: Date.now() + ttl,
  };
}

function clearCache(key = null) {
  if (key) {
    delete cacheStore[key];
  } else {
    Object.keys(cacheStore).forEach(k => delete cacheStore[k]);
  }
}

module.exports = {
  getCache,
  setCache,
  clearCache
};

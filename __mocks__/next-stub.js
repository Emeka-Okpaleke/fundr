// Mock for Next.js modules
module.exports = new Proxy(
  {},
  {
    get: function() {
      return () => ({});
    },
  }
);

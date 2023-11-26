export const mockResApi = (data, delay = 300) => {
  return new Promise((resolve) => {
    return setTimeout(() => resolve({ data }), delay);
  });
};
